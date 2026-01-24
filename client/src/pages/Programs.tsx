import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Bot, Cpu, Box, Glasses, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Programs() {
  const programs = [
    {
      title: "Coding",
      description: "Learn Python, JavaScript, and block-based coding to build apps and games.",
      icon: <Code className="w-10 h-10 text-white" />,
      color: "bg-blue-500",
      age: "8-16 Years"
    },
    {
      title: "Robotics",
      description: "Design and build autonomous robots using sensors, motors, and controllers.",
      icon: <Bot className="w-10 h-10 text-white" />,
      color: "bg-purple-500",
      age: "10-16 Years"
    },
    {
      title: "Generative AI",
      description: "Explore the world of AI, machine learning, and create content with LLMs.",
      icon: <Cpu className="w-10 h-10 text-white" />,
      color: "bg-cyan-500",
      age: "12-16 Years"
    },
    {
      title: "3D Modelling",
      description: "Turn imagination into 3D designs for printing and game assets.",
      icon: <Box className="w-10 h-10 text-white" />,
      color: "bg-pink-500",
      age: "10-16 Years"
    },
    {
      title: "AR / VR",
      description: "Create immersive augmented and virtual reality experiences.",
      icon: <Glasses className="w-10 h-10 text-white" />,
      color: "bg-orange-500",
      age: "12-16 Years"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-4">Our Core Programs</h1>
          <p className="text-muted-foreground">
            Comprehensive curriculum designed to take students from beginners to innovators.
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
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-none overflow-hidden group">
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
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/book-trial" className="w-full">
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
