import { motion } from "framer-motion";
import { Lightbulb, Cog, Layout, Target, Presentation, Star, Users, ShieldCheck } from "lucide-react";
import methodologyHero from "@/assets/images/methodology-pbl.png";

export default function Methodology() {
  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "1. Precise Skill Assessment",
      desc: "We don't just guess. We conduct a deep-dive assessment of logic, mathematical reasoning, and creative interest to build a unique profile."
    },
    {
      icon: <Cog className="w-8 h-8 text-blue-500" />,
      title: "2. Individualized Mentorship",
      desc: "Your child is matched with a mentor who fits their personality and goals. Every minute is dedicated to their growth—never shared with a group."
    },
    {
      icon: <Layout className="w-8 h-8 text-purple-500" />,
      title: "3. Adaptive Learning Pace",
      desc: "Our curriculum flexes in real-time. If a student masters a concept quickly, we move ahead. If they need more depth, we stay and explore."
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "4. Project-First Mastery",
      desc: "Concepts aren't just memorized—they are built. Students create tangible apps, robots, or models that prove they truly understand the 'why' behind the 'how'."
    },
    {
      icon: <Presentation className="w-8 h-8 text-green-500" />,
      title: "5. Milestone Showcases",
      desc: "Confidence is built through presentation. Every track concludes with a showcase where students present their work to parents and mentors."
    }
  ];

  const values = [
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Premium Mentors",
      desc: "Vetted experts from top-tier STEM backgrounds who are trained in the art of 1-to-1 engagement."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "100% Focused",
      desc: "Zero distractions. The entire session is a conversation between one student and one expert."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Global Standards",
      desc: "Our curriculum meets international standards for STEM education across US, UK, and Middle East markets."
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Art of <span className="text-primary">1-to-1</span> Mentorship
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              At Strivers Academy, we believe learning is a dialogue, not a lecture. Our methodology is designed to ignite curiosity and build lasting confidence through personalized attention.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-sm">{v.title}</h4>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
              <img src={methodologyHero} alt="Project Based Learning" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our 5-Step Learning Framework</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured, proven approach that ensures every student transitions from a consumer to a creator.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`group p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`mb-6 flex ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-center`}>
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-500">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 w-4 h-4 rounded-full bg-primary ring-[8px] ring-primary/10 hidden md:block" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
