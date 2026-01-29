import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const formSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  studentName: z.string().min(2, "Student name must be at least 2 characters"),
  age: z.string().min(1, "Please enter age"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program interest"),
});

export default function BookTrial() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      studentName: "",
      age: "",
      email: "",
      phone: "",
      program: "",
    },
  });

  const [selectedCountry, setSelectedCountry] = useState({ code: "+91", flag: "in" });
  const [countries, setCountries] = useState([
    { name: "India", code: "+91", flag: "in" },
    { name: "USA", code: "+1", flag: "us" },
    { name: "UK", code: "+44", flag: "gb" },
    { name: "UAE", code: "+971", flag: "ae" },
    { name: "Singapore", code: "+65", flag: "sg" },
    { name: "Australia", code: "+61", flag: "au" },
    { name: "Canada", code: "+1", flag: "ca" },
  ]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2")
      .then(res => res.json())
      .then(data => {
        const formatted = data
          .filter((c: any) => c.idd.root)
          .map((c: any) => ({
            name: c.name.common,
            code: c.idd.root + (c.idd.suffixes?.[0] || ""),
            flag: c.cca2.toLowerCase()
          }))
          .sort((a: any, b: any) => a.name.localeCompare(b.name));
        
        // Ensure India is at top or preserved
        const india = formatted.find((c: any) => c.flag === "in");
        const rest = formatted.filter((c: any) => c.flag !== "in");
        setCountries(india ? [india, ...rest] : formatted);
      })
      .catch(err => console.error("Error fetching countries:", err));
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Combine country code with phone for submission
    const fullPhone = `${selectedCountry.code}${values.phone}`;
    const submissionValues = { ...values, phone: fullPhone };

    // Form action URL
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdiP27DQ3g6vuSrOz9hU4-gduFW1obf1b0tUSrzJbFdH8d58g/formResponse";
    
    // Mapping our form fields to Google Form entry IDs
    const queryParams = new URLSearchParams();
    queryParams.append("entry.30937712", submissionValues.parentName);
    queryParams.append("entry.1911157625", submissionValues.studentName);
    queryParams.append("entry.665674324", submissionValues.age);
    queryParams.append("entry.928726567", submissionValues.email);
    queryParams.append("entry.571039264", submissionValues.phone);
    queryParams.append("entry.1972014444", submissionValues.program);
    
    // ... rest of mapping logic
    const form_el = document.createElement('form');
    form_el.action = GOOGLE_FORM_ACTION_URL;
    form_el.method = 'POST';
    form_el.target = '_blank';

    const formatProgramValue = (val: string) => {
      switch (val) {
        case "coding": return "Coding";
        case "robotics": return "Robotics";
        case "ai": return "Generative AI";
        case "3d": return "3D Modelling";
        case "arvr": return "AR/VR";
        default: return val;
      }
    };

    const fields = {
      "entry.30937712": submissionValues.parentName,
      "entry.1911157625": submissionValues.studentName,
      "entry.665674324": submissionValues.age,
      "entry.928726567": submissionValues.email,
      "entry.571039264": submissionValues.phone,
      "entry.1972014444": formatProgramValue(submissionValues.program)
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form_el.appendChild(input);
    });

    document.body.appendChild(form_el);
    form_el.submit();

    // Cleanup
    setTimeout(() => {
      document.body.removeChild(form_el);
      form.reset();
    }, 2000);

    // Keep local storage for our dashboard
    const existingLeads = JSON.parse(localStorage.getItem("mock_leads") || "[]");
    const newLead = {
      ...submissionValues,
      id: Date.now(),
      status: "new",
      date: new Date().toLocaleDateString(),
    };
    localStorage.setItem("mock_leads", JSON.stringify([newLead, ...existingLeads]));

    toast({
      title: "Registration Successful! 🎉",
      description: "We'll contact you shortly to schedule your free trial class.",
    });
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-xl border-none">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="font-heading text-3xl font-bold text-primary">Book Your Free 1-to-1 Trial Session</CardTitle>
          <CardDescription className="text-base">
            A personalized session to assess your child’s interests, level, and learning style.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter parent's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="studentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter student's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student's Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Age" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="parent@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="flex items-center border border-input rounded-md bg-white overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 transition-all duration-200">
                        <Select
                          onValueChange={(val) => {
                            const country = countries.find(c => c.code === val);
                            if (country) setSelectedCountry(country);
                          }}
                          defaultValue={selectedCountry.code}
                        >
                          <SelectTrigger className="flex items-center gap-2 px-3 bg-slate-50 border-r border-input py-2 select-none h-10 w-auto min-w-[100px] rounded-none border-none focus:ring-0">
                            <div className="flex items-center gap-2">
                              <img 
                                src={`https://flagcdn.com/w40/${selectedCountry.flag}.png`}
                                alt={selectedCountry.name}
                                className="w-5 h-auto rounded-sm"
                              />
                              <span className="font-medium text-slate-700">{selectedCountry.code}</span>
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((c) => (
                              <SelectItem key={`${c.flag}-${c.code}`} value={c.code}>
                                <div className="flex items-center gap-2">
                                  <img 
                                    src={`https://flagcdn.com/w20/${c.flag}.png`} 
                                    alt={c.name} 
                                    className="w-4 h-auto rounded-sm"
                                  />
                                  <span>{c.name} ({c.code})</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input
                          type="tel"
                          className="flex h-10 w-full bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Type here"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="program"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="coding">Coding</SelectItem>
                        <SelectItem value="robotics">Robotics</SelectItem>
                        <SelectItem value="ai">Generative AI</SelectItem>
                        <SelectItem value="3d">3D Modelling</SelectItem>
                        <SelectItem value="arvr">AR / VR</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-gradient-tech text-white h-11 text-base font-medium shadow-lg hover:opacity-90 transition-opacity">
                Schedule My Free Class
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
