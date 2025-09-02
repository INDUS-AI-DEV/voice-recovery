import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Zap, Globe, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "English, Hinglish, Kannada, Telugu, Tamil, Marathi, Punjabi, and Gujarati"
  },
  {
    icon: Zap,
    title: "Ultra-Fast Response",
    description: "&lt; 1 sec latency for seamless conversations"
  },
  {
    icon: Shield,
    title: "RBI Compliant",
    description: "Built-in regulatory compliance for safe recovery practices"
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Never miss a recovery opportunity, even on weekends"
  }
];

export function SolutionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Your Smart, Scalable,{" "}
            <span className="bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
              Regulatory-Safe
            </span>{" "}
            Recovery Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            A recovery process that is scalable, cost-efficient, customer-friendly, and regulatory-safe. 
            Built with real industry workflows, not just basic IVR but AI that understands, speaks, and resolves.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-accent to-cyan-accent/80 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-midnight-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">INDUS AI Voice</h3>
                  <p className="text-cyan-accent">Powered by homegrown TTS from INDUSLABS</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Supports any language on earth with your own cloned voice. Ultra-low latency for natural conversations.
              </p>
              
              <Badge className="bg-cyan-accent/20 text-cyan-accent border-cyan-accent/30 hover:bg-cyan-accent/30">
                &lt; 1 sec latency
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-cyan-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwYmFua2luZ3xlbnwxfHx8fDE3NTY1NDMyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Financial Technology Banking"
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* Floating stats */}
              <div className="absolute top-4 right-4 glass-card rounded-xl p-4 bg-cyan-accent/10">
                <div className="text-2xl font-bold text-cyan-accent">99.9%</div>
                <div className="text-xs text-foreground">Uptime</div>
              </div>
              
              <div className="absolute bottom-4 left-4 glass-card rounded-xl p-4 bg-purple-glow/10">
                <div className="text-2xl font-bold text-purple-glow">8+</div>
                <div className="text-xs text-foreground">Languages</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
}