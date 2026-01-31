import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-100 rounded-md flex items-center justify-center border border-slate-200">
                <img src="/assets/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-heading font-bold text-lg">Strivers Academy</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of innovators with personalized 1-to-1 tech mentorship in AI, Robotics, and Coding. Serving students worldwide with time-zone friendly sessions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary">Programs</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/programs"><a className="hover:text-white transition-colors">Coding</a></Link></li>
              <li><Link href="/programs"><a className="hover:text-white transition-colors">Robotics</a></Link></li>
              <li><Link href="/programs"><a className="hover:text-white transition-colors">Generative AI</a></Link></li>
              <li><Link href="/programs"><a className="hover:text-white transition-colors">AR / VR</a></Link></li>
            </ul>
          </div>

          {/* Global Trust */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary">Global Mentoring</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Serving students worldwide</li>
              <li>Time-zone friendly sessions</li>
              <li>English-first instruction</li>
              <li>Flexible scheduling</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span>Noida, India (Global HQ)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91-9877110438</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>strivers.academy11@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Strivers Academy. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/919877110438" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <IconBrandWhatsapp className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
