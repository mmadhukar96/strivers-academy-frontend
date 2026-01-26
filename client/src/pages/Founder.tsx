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
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">Founder & Lead Educator</Badge>
                <h1 className="font-heading text-4xl font-bold mb-2">Mayank Madhukar</h1>
                <p className="text-xl text-muted-foreground font-medium">STEM & Robotics Specialist</p>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  With a passion for future technologies and years of experience in global education systems like CBSE, SEAB, and IGCSE, Mayank established Strivers Academy to bridge the gap between traditional schooling and future industry needs.
                </p>
                <p>
                  He specializes in simplifying complex concepts in Generative AI, Robotics, and Coding, ensuring that students not only learn technical skills but also develop a problem-solving mindset.
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
