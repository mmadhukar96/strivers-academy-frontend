import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function BookTrial() {
  const { toast } = useToast();
  const countries = [
    { name: "India", code: "+91", flag: "in", min: 10, max: 10 },
    { name: "USA", code: "+1", flag: "us", min: 10, max: 10 },
    { name: "UK", code: "+44", flag: "gb", min: 10, max: 11 },
    { name: "UAE", code: "+971", flag: "ae", min: 9, max: 9 },
    { name: "Singapore", code: "+65", flag: "sg", min: 8, max: 8 },
    { name: "Australia", code: "+61", flag: "au", min: 9, max: 9 },
    { name: "Canada", code: "+1", flag: "ca", min: 10, max: 10 },
    { name: "Germany", code: "+49", flag: "de", min: 10, max: 11 },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const formSchema = z.object({
    parentName: z.string().min(2, "Parent name must be at least 2 characters"),
    studentName: z.string().min(2, "Student name must be at least 2 characters"),
    age: z.string().refine((val) => {
      const age = parseInt(val);
      return !isNaN(age) && age >= 5;
    }, "Minimum age must be 5 years"),
    email: z.string()
      .email("Please enter a valid email address")
      .refine((val) => {
        const domain = val.split('@')[1]?.toLowerCase();
        const commonProviders = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com'];
        // You can add more logic here if you want to block specific domains
        // For now, we'll just ensure it's a standard email format
        return true; 
      }, "Please use a valid personal email address"),
    phone: z.string().refine((val) => {
      const digitsOnly = val.replace(/\D/g, "");
      return digitsOnly.length >= selectedCountry.min && digitsOnly.length <= selectedCountry.max;
    }, {
      message: `Phone number must be ${selectedCountry.min === selectedCountry.max ? selectedCountry.min : `${selectedCountry.min}-${selectedCountry.max}`} digits for ${selectedCountry.name}`
    }),
    program: z.string().min(1, "Please select a program interest"),
  });

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

  // Re-validate phone when country changes
  useEffect(() => {
    if (form.getValues("phone")) {
      form.trigger("phone");
    }
  }, [selectedCountry, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const fullPhone = `${selectedCountry.code}${values.phone}`;
    const submissionValues = { ...values, phone: fullPhone };

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdiP27DQ3g6vuSrOz9hU4-gduFW1obf1b0tUSrzJbFdH8d58g/formResponse";
    
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

    setTimeout(() => {
      document.body.removeChild(form_el);
      form.reset();
    }, 2000);

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
          <CardTitle className="font-heading text-3xl font-bold text-primary">Book Free 1-to-1 Trial</CardTitle>
          <CardDescription className="text-base">
            A personalized session to assess your child’s interests, level, and learning style.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8 p-4 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h4 className="font-bold text-primary mb-2">Pricing & Personalized Assessment</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our pricing is personalized and discussed after your child's free 1-to-1 assessment. 
              We tailor the plan based on individual learning goals, pace, and depth of mentorship required.
            </p>
          </div>
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
                Book Free 1-to-1 Trial
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
