import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, ChevronRight, BookOpen, Rocket, Award } from "lucide-react";

export default function LearningJourney() {
  const journey = [
    {
      month: "Month 1",
      title: "Foundations & Exploration",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      items: [
        "Personalized skill assessment",
        "Introduction to core STEM concepts",
        "Building first guided project",
        "Developing confidence with digital tools"
      ]
    },
    {
      month: "Month 3",
      title: "Innovation & Independence",
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      items: [
        "Transition to real-world projects",
        "Critical thinking & problem solving",
        "Building complex autonomous systems",
        "Detailed parent progress update"
      ]
    },
    {
      month: "Month 6",
      title: "Mastery & Portfolio",
      icon: <Award className="w-8 h-8 text-cyan-600" />,
      items: [
        "Advanced project implementation",
        "Full-cycle portfolio development",
        "Final capstone project presentation",
        "Next-level roadmap planning"
      ]
    }
  ];

  const faqs = [
    {
      q: "Is this 1-to-1 or group-based?",
      a: "We focus exclusively on 1-to-1 live online mentorship to ensure your child receives undivided attention and a pace that suits them."
    },
    {
      q: "Are sessions live or recorded?",
      a: "Every single session is 100% live and interactive with a dedicated mentor. We don't use pre-recorded videos for core teaching."
    },
    {
      q: "Who teaches the sessions?",
      a: "Our mentors are vetted STEM experts, engineers, and educators who are passionate about project-based learning."
    },
    {
      q: "Which countries do you serve?",
      a: "Strivers Academy is a global platform. We serve students in the US, UK, Middle East, India, Singapore, Australia, Canada, and Germany."
    },
    {
      q: "What age group is this for?",
      a: "Our programs are specifically tailored for students aged 6–16 years, with age-appropriate curriculum for each level."
    },
    {
      q: "How is learning personalized?",
      a: "We start with a skill assessment and build a custom learning roadmap based on your child's interests and previous experience."
    },
    {
      q: "Do parents get progress updates?",
      a: "Yes! We provide regular, detailed updates on your child's progress, including completed projects and areas of growth."
    },
    {
      q: "What will students build?",
      a: "Depending on their track, students build real mobile apps, autonomous robots, 3D models, AI chatbots, or VR experiences."
    },
    {
      q: "How do we get started?",
      a: "The first step is booking a free 1-to-1 trial and assessment. This helps us understand your child's needs and place them correctly."
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Learning Journey & FAQ</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to know about how we mentor the next generation of innovators.
          </p>
        </div>

        {/* Journey Section */}
        <section className="mb-24">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">A Typical Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journey.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="h-2 bg-primary/20" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner">
                        {stage.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">{stage.month}</span>
                        <h3 className="font-heading text-xl font-bold">{stage.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {stage.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <h4 className="font-bold text-slate-900 mb-3">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
