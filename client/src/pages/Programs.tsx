import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Bot, Cpu, Box, Glasses, ArrowRight, UserCheck, Calendar, BookOpen, Rocket } from "lucide-react";
import { Link } from "wouter";

export default function Programs() {
  const programs = [
    {
      title: "Coding",
      description: "Learn Python, Web Development, and block-based coding to build apps and games.",
      outcomes: "Build a personal portfolio website, a 2D arcade game, and a data-driven Python application.",
      icon: <Code className="w-10 h-10 text-white" />,
      color: "bg-blue-500",
      age: "6 and above"
    },
    {
      title: "Robotics",
      description: "Design and build autonomous robots using sensors, motors, and controllers.",
      outcomes: "Design an obstacle-avoiding robot, a remote-controlled vehicle, and an automated home system.",
      icon: <Bot className="w-10 h-10 text-white" />,
      color: "bg-purple-500",
      age: "8 and above"
    },
    {
      title: "Generative AI",
      description: "Explore the world of AI, machine learning, and create content with LLMs.",
      outcomes: "Create an AI-powered chatbot, an image generation tool, and a personalized AI assistant.",
      icon: <Cpu className="w-10 h-10 text-white" />,
      color: "bg-cyan-500",
      age: "12 and above"
    },
    {
      title: "3D Modelling",
      description: "Turn imagination into 3D designs for printing and game assets.",
      outcomes: "Design custom 3D characters, architectural prototypes, and print-ready mechanical parts.",
      icon: <Box className="w-10 h-10 text-white" />,
      color: "bg-pink-500",
      age: "10 and above"
    },
    {
      title: "AR / VR",
      description: "Create immersive augmented and virtual reality experiences.",
      outcomes: "Develop an interactive AR filter, a virtual gallery, and a 360-degree educational tour.",
      icon: <Glasses className="w-10 h-10 text-white" />,
      color: "bg-orange-500",
      age: "12 and above"
    }
  ];

  const howItWorks = [
    { icon: <UserCheck className="w-5 h-5" />, text: "Initial skill assessment" },
    { icon: <Calendar className="w-5 h-5" />, text: "Customized learning plan" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Weekly mentor-led sessions" },
    { icon: <Rocket className="w-5 h-5" />, text: "Real-world projects" }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-4">Our Core Programs</h1>
          <p className="text-muted-foreground">
            Comprehensive 1-to-1 curriculum designed to take students from beginners to innovators at their own pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-none overflow-hidden group flex flex-col">
                <div className={`h-2 bg-gradient-to-r ${program.color} to-white opacity-80`} />
                <CardHeader className="pb-2">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 ${program.color} group-hover:scale-110 transition-transform duration-300`}>
                    {program.icon}
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-heading text-2xl">{program.title}</CardTitle>
                    <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded-md text-slate-600">
                      {program.age}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Tracks Available</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-primary">Foundation Track</span>
                          <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-slate-200">50 Classes</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-tight">Focused on fundamentals and guided learning.</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-primary">Growth Track</span>
                          <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-slate-200">100 Classes</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-tight">Focused on real-world application and independence.</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-primary">Mastery Track</span>
                          <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-slate-200">150 Classes</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-tight">Focused on advanced skills and portfolio projects.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">How 1-to-1 Works</h4>
                    <ul className="space-y-2">
                      {howItWorks.map((step, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="text-primary">{step.icon}</span>
                          {step.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Concrete Outcomes</h4>
                    <p className="text-sm text-slate-600 italic">
                      {program.outcomes}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/book-trial" className="w-full">
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary transition-colors">
                      Book Free 1-to-1 Trial <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
