import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-accent/15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-glow/15 blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-subtle-white leading-tight">
              Redefining{" "}
              <span className="bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
                Debt Recovery
              </span>{" "}
              with Voice AI
            </h1>
            
            <p className="text-xl lg:text-2xl text-subtle-white/90 max-w-2xl mx-auto lg:mx-0">
              Finolabs — an AI-powered debt recovery system designed to be{" "}
              <span className="text-cyan-accent font-medium">empathetic</span>,{" "}
              <span className="text-cyan-accent font-medium">multilingual</span>,{" "}
              <span className="text-cyan-accent font-medium">scalable</span>, and{" "}
              <span className="text-cyan-accent font-medium">cost-effective</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-accent to-cyan-accent/90 text-white font-semibold px-8 py-4 rounded-2xl primary-glow hover:scale-105 transition-all duration-300"
              >
                Request Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-button text-subtle-white border-subtle-white/40 px-8 py-4 rounded-2xl hover:bg-cyan-accent/5"
              >
                Talk to Sales
              </Button>
            </div>
          </motion.div>
          
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-card rounded-3xl p-8 max-w-md mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718664485487-5aad5f72dff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHZvaWNlJTIwYXNzaXN0YW50JTIwZnV0dXJpc3RpYyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NTQzMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Voice Assistant Technology"
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* Floating Animation Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-accent/20 rounded-full blur-md animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-glow/20 rounded-full blur-md animate-bounce delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-subtle-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}