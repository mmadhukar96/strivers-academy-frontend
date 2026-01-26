import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Globe } from "lucide-react";

export default function Founder() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-slate-100 relative h-96 md:h-auto">
              <img 
                src="/assets/founder.png" 
                alt="Mayank Madhukar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8 md:hidden">
                <div className="text-white">
                  <h1 className="font-heading text-3xl font-bold">Mayank Madhukar</h1>
                  <p className="opacity-90">Generative AI Educator</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="hidden md:block mb-6">
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Founder & Lead Mentor</Badge>
                <h1 className="font-heading text-4xl font-bold mb-2">Mayank Madhukar</h1>
                <p className="text-xl text-muted-foreground font-medium">Global 1-to-1 STEM Mentor</p>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  I founded Strivers Academy after working with students who could memorize technology but struggled to truly understand it. Many could follow instructions or replicate code, yet found it difficult to explain why something worked or how to apply their learning independently. Over time, it became clear that the issue wasn’t ability — it was the way technology was being taught.
                </p>
                <p>
                  Through years of teaching and mentoring, I realized that meaningful learning happens when education adapts to the learner, not the other way around. Every student thinks differently, learns at a different pace, and gains confidence through different kinds of practice. This insight led to the foundation of Strivers Academy — a place built around personalized, one-to-one learning rather than standardized, one-size-fits-all instruction.
                </p>
                <p>
                  At Strivers Academy, I work closely with students in live 1-to-1 sessions, focusing on deep concept clarity, hands-on problem solving, and real-world projects. Instead of memorizing steps, students learn how to think logically, ask questions, and build solutions independently. Each learning path is customized to the student’s level, interests, and goals.
                </p>
                <p>
                  The academy serves students globally, working across different curricula and time zones, while maintaining a consistent focus on quality, clarity, and mentorship. Parents receive regular updates, and students are guided not just to learn technology, but to understand it with confidence.
                </p>
                <p>
                  Strivers Academy was created with a simple belief: when students truly understand what they are learning, they don’t just perform better — they become independent thinkers and creators.
                </p>

                <p className="font-medium text-slate-900 italic border-l-4 border-primary pl-4">
                  "In a rapidly evolving world, one-size-fits-all education is no longer enough. Personalized 1-to-1 mentoring allows us to nurture individual curiosity and build a deep, lasting foundation for future innovators."
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <Globe className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-sm">Global Experience</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <Award className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                  <div className="font-bold text-sm">Certified Expert</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <GraduationCap className="w-6 h-6 mx-auto mb-2 text-cyan-500" />
                  <div className="font-bold text-sm">Project Based Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
