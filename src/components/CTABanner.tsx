import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/10 via-purple-glow/10 to-midnight-navy/50 rounded-3xl"></div>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-glow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Let's Transform Your{" "}
              <span className="bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
                Loan Recovery
              </span>{" "}
              Process
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            >
              Reduce NPAs. Improve Efficiency. Increase Repayments.
              <br />
              Join the AI revolution in financial recovery operations.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-accent to-cyan-accent/90 text-white font-semibold px-10 py-4 rounded-2xl primary-glow hover:scale-105 transition-all duration-300 group"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-button text-foreground border-border px-10 py-4 rounded-2xl group hover:border-purple-glow hover:text-purple-glow"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                See How It Works
              </Button>
            </motion.div>
            
            {/* Additional trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-accent rounded-full animate-pulse delay-300"></div>
                <span>Setup in under 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-glow rounded-full animate-pulse delay-500"></div>
                <span>24/7 support included</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}