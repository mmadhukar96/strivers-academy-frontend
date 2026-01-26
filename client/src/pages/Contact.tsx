import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground">We'd love to hear from you. Visit us or drop a message!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <div className="space-y-6">
            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strivers Academy<br />
                    Noida, Uttar Pradesh<br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground">strivers.academy11@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+91-9877110438</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-full min-h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-inner border border-slate-200 flex items-center justify-center text-slate-400">
            {/* Map Section */}
            <div className="text-center w-full h-full relative">
              <img src="/assets/logo1.png" alt="Strivers Academy Location" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-transparent p-6 text-center min-w-[240px]">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/40 shadow-xl">
                    <MapPin className="w-8 h-8 text-primary drop-shadow-lg" />
                  </div>
                  <p className="text-white font-bold text-2xl mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"></p>
                  <p className="text-lg text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
