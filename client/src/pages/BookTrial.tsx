import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Form action URL
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdiP27DQ3g6vuSrOz9hU4-gduFW1obf1b0tUSrzJbFdH8d58g/formResponse";
    
    // Mapping our form fields to Google Form entry IDs
    const queryParams = new URLSearchParams();
    queryParams.append("entry.30937712", values.parentName);
    queryParams.append("entry.1911157625", values.studentName);
    queryParams.append("entry.665674324", values.age);
    queryParams.append("entry.928726567", values.email);
    queryParams.append("entry.571039264", values.phone);
    queryParams.append("entry.1972014444", values.program);
    
    const submissionUrl = `${GOOGLE_FORM_ACTION_URL}?${queryParams.toString()}`;

    // Create a visible link for the user to click if they want
    // But we'll try to auto-submit first
    const form = document.createElement('form');
    form.action = GOOGLE_FORM_ACTION_URL;
    form.method = 'POST';
    form.target = '_blank'; // Opening in new tab is more reliable for published sites

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
      "entry.30937712": values.parentName,
      "entry.1911157625": values.studentName,
      "entry.665674324": values.age,
      "entry.928726567": values.email,
      "entry.571039264": values.phone,
      "entry.1972014444": formatProgramValue(values.program)
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Cleanup
    setTimeout(() => {
      document.body.removeChild(form);
    }, 1000);

    // Keep local storage for our dashboard
    const existingLeads = JSON.parse(localStorage.getItem("mock_leads") || "[]");
    const newLead = {
      ...values,
      id: Date.now(),
      status: "new",
      date: new Date().toLocaleDateString(),
    };
    localStorage.setItem("mock_leads", JSON.stringify([newLead, ...existingLeads]));

    toast({
      title: "Registration Successful! 🎉",
      description: "We'll contact you shortly to schedule your free trial class.",
    });
    form.reset();
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
                      <Input placeholder="+91 98765 43210" {...field} />
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
