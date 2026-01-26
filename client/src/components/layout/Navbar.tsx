import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/methodology", label: "Methodology" },
    { href: "/founder", label: "Founder" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/logo.png" alt="Strivers Academy" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              Strivers<span className="text-primary">Academy</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/book-trial">
            <Button className="bg-gradient-tech hover:opacity-90 transition-opacity text-white rounded-full px-6 shadow-lg shadow-primary/20">
              Book Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary cursor-pointer ${
                        location === link.href ? "text-primary font-semibold" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Link href="/book-trial">
                  <Button className="w-full bg-gradient-tech text-white rounded-full mt-4" onClick={() => setIsOpen(false)}>
                    Book Free Trial
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
