import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code, Cpu, Boxes, Box, Glasses } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const features = [
    { icon: <Code className="w-6 h-6 text-white" />, title: "Coding", color: "bg-blue-500" },
    { icon: <Bot className="w-6 h-6 text-white" />, title: "Robotics", color: "bg-purple-500" },
    { icon: <Cpu className="w-6 h-6 text-white" />, title: "Gen AI", color: "bg-cyan-500" },
    { icon: <Box className="w-6 h-6 text-white" />, title: "3D Models", color: "bg-pink-500" },
    { icon: <Glasses className="w-6 h-6 text-white" />, title: "AR/VR", color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                🚀 Future-Ready Skills for Ages 6-16
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
                Building <span className="text-gradient-tech">Future Innovators</span> Through 1-to-1 STEM Mentorship
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                1-to-1 live sessions featuring personalized learning and global availability in Coding, Robotics, and AI. <span className="text-primary font-semibold">They become independent thinkers and creators.</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-trial">
                  <Button size="lg" className="bg-gradient-tech hover:opacity-90 text-white rounded-full px-8 h-12 text-base shadow-xl shadow-primary/20">
                    Book Free 1-to-1 Trial
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-primary/20 hover:bg-primary/5">
                    Explore Programs
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-medium">
                Personal mentor • Flexible time zones • Project-based learning
              </p>

              <div className="mt-12 flex gap-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/assets/hero-main.png" 
                  alt="Students learning robotics" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 max-w-[200px]"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm">Robotics</div>
                  <div className="text-xs text-muted-foreground">Hands-on Kits</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 max-w-[200px]"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm">AI Learning</div>
                  <div className="text-xs text-muted-foreground">Future Skills</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              "1-to-1 live online sessions",
              "Flexible scheduling across time zones",
              "English-first instruction",
              "Personalized learning roadmap"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Choose Strivers Academy?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-2">We don't just teach code; we teach how to think, create, and innovate.</p>
            <p className="text-sm font-medium text-primary/80">Designed for students across different education systems and time zones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bot size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Hands-on Robotics</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  1-to-1 mentor-led learning by doing with physical kits and real-world sensors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cpu size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Generative AI</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Master the latest AI tools and understand how Large Language Models work in live sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Boxes size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Project Based Learning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Build real projects from day one with personalized guidance and portfolio development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Featured FAQ & Journey CTA */}

          <div className="text-center mt-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Ready to see their transformation?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/learning-journey">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Learning Journey & FAQ
                </Button>
              </Link>
              <Link href="/book-trial">
                <Button size="lg" className="bg-primary text-white rounded-full px-8">
                  Book Free 1-to-1 Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
