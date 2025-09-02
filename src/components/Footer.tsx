import { motion } from "motion/react";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Press", href: "#" }
  ],
  solutions: [
    { name: "Loan Recovery AI", href: "#" },
    { name: "Collections Automation", href: "#" },
    { name: "Multilingual Voice AI", href: "#" },
    { name: "Integration Services", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "RBI Compliance", href: "#" },
    { name: "Data Security", href: "#" }
  ]
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-400" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400" }
];

export function Footer() {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-subtle-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
                Finolabs
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Revolutionizing loan recovery with empathetic AI voice technology. 
                Scalable, compliant, and customer-friendly solutions for the future of financial services.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-cyan-accent" />
                <span>hello@finolabs.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-cyan-accent" />
                <span>+91 80 4000 7000</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-cyan-accent" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-subtle-white/70 hover:text-cyan-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-subtle-white/70 hover:text-cyan-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-subtle-white/70 hover:text-cyan-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-subtle-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-subtle-white/60">
            © 2025 Finolabs. All rights reserved.
          </div>
          
          {/* Social links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-subtle-white/60 ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-gradient-to-t from-cyan-accent/5 to-transparent blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-64 h-32 bg-gradient-to-b from-purple-glow/5 to-transparent blur-3xl"></div>
    </footer>
  );
}