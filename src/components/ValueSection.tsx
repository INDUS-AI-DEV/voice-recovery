import { motion } from "motion/react";
import { Heart, Clock, Bell, Phone, Link, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Empathetic, Multilingual AI",
    description: "Consistent, human-like voice agents that understand cultural nuances and speak naturally.",
    color: "from-cyan-accent to-cyan-accent/60"
  },
  {
    icon: Clock,
    title: "24/7 Recovery Operations",
    description: "On-time calls, even on weekends. Never miss critical recovery windows.",
    color: "from-purple-glow to-purple-glow/60"
  },
  {
    icon: Bell,
    title: "Smart EMI Nudges",
    description: "Polite reminders, never harsh collection calls. Maintains customer relationships.",
    color: "from-cyan-accent to-purple-glow"
  },
  {
    icon: Phone,
    title: "No Missed Follow-Ups",
    description: "AI ensures persistent outreach with intelligent scheduling and retry mechanisms.",
    color: "from-purple-glow to-cyan-accent"
  },
  {
    icon: Link,
    title: "Seamless Integration",
    description: "Works with all existing Loan Management Systems & CRMs without disruption.",
    color: "from-cyan-accent/80 to-purple-glow/80"
  },
  {
    icon: CheckCircle,
    title: "Built-in Compliance",
    description: "RBI-aligned scripts to avoid legal risks and maintain regulatory standards.",
    color: "from-purple-glow/80 to-cyan-accent/80"
  }
];

export function ValueSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Value Addition{" "}
            <span className="bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your loan recovery process with intelligent automation that maintains human empathy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-2xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-cyan-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-10 blur-xl`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 glass-card rounded-3xl p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
                85%
              </div>
              <div className="text-foreground font-medium">Recovery Rate</div>
              <div className="text-muted-foreground text-sm">Improvement</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-glow to-cyan-accent bg-clip-text text-transparent">
                60%
              </div>
              <div className="text-foreground font-medium">Cost Reduction</div>
              <div className="text-muted-foreground text-sm">vs Traditional</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-foreground font-medium">Operation</div>
              <div className="text-muted-foreground text-sm">Never Stop</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-glow to-cyan-accent bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-foreground font-medium">Compliant</div>
              <div className="text-muted-foreground text-sm">RBI Standards</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-cyan-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-purple-glow/5 rounded-full blur-3xl"></div>
    </section>
  );
}