import { motion } from "motion/react";

// Placeholder logos - in a real implementation, these would be actual client logos
const logos = [
  { name: "HDFC Bank", width: "w-32" },
  { name: "ICICI Bank", width: "w-28" },
  { name: "Axis Bank", width: "w-24" },
  { name: "Bajaj Finserv", width: "w-36" },
  { name: "Tata Capital", width: "w-32" },
  { name: "Mahindra Finance", width: "w-40" },
  { name: "L&T Finance", width: "w-28" },
  { name: "Muthoot Finance", width: "w-36" },
  { name: "Payme India", width: "w-28" },
  { name: "NBFC Partners", width: "w-32" }
];

export function SupportedBySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
              Banks, NBFCs & Fintech
            </span>{" "}
            Innovators
          </h2>
          <p className="text-lg text-muted-foreground">
            Powering recovery operations for India's most trusted financial institutions
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex space-x-16"
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className={`${logo.width} flex-shrink-0 flex items-center justify-center h-16 glass-card rounded-2xl px-6 hover:bg-white/10 transition-all duration-300 group`}
              >
                <div className="text-muted-foreground font-medium group-hover:text-cyan-accent transition-colors duration-300">
                  {logo.name}
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className={`${logo.width} flex-shrink-0 flex items-center justify-center h-16 glass-card rounded-2xl px-6 hover:bg-white/10 transition-all duration-300 group`}
              >
                <div className="text-muted-foreground font-medium group-hover:text-cyan-accent transition-colors duration-300">
                  {logo.name}
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-midnight-navy via-midnight-navy/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-midnight-navy via-midnight-navy/80 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-cyan-accent">50+</div>
            <div className="text-foreground font-medium">Financial Partners</div>
            <div className="text-muted-foreground">Across India</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-purple-glow">10M+</div>
            <div className="text-foreground font-medium">Calls Processed</div>
            <div className="text-muted-foreground">Monthly Volume</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-cyan-accent">99.9%</div>
            <div className="text-foreground font-medium">System Uptime</div>
            <div className="text-muted-foreground">Enterprise Grade</div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-glow/3 rounded-full blur-3xl"></div>
    </section>
  );
}