import { motion } from "framer-motion";
import { Lightbulb, Cog, Layout, Target, Presentation } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Initial Skill Assessment",
      desc: "We start by understanding your child's current level, interests, and learning style to tailor the roadmap."
    },
    {
      icon: <Cog className="w-8 h-8 text-blue-500" />,
      title: "Individualized Pace",
      desc: "Learning happens at the student's own speed. No rushing through topics or waiting for a group."
    },
    {
      icon: <Layout className="w-8 h-8 text-purple-500" />,
      title: "Continuous Feedback",
      desc: "Mentors provide real-time guidance during sessions, adapting their teaching style to match the student."
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Project-Based Mastery",
      desc: "Every concept is applied to a personal project, ensuring practical understanding and creative confidence."
    },
    {
      icon: <Presentation className="w-8 h-8 text-green-500" />,
      title: "Parent Progress Updates",
      desc: "Regular reports and showcases keep parents informed of milestones and upcoming learning goals."
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="font-heading text-4xl font-bold mb-6">Our Methodology</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A structured, proven 5-step approach to ensure deep learning and practical application.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-6 rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-shadow ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="font-heading text-xl font-bold mb-2 text-slate-900">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shadow-lg shrink-0">
                  <div className="scale-75 transform">{step.icon}</div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
