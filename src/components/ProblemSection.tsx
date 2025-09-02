import { motion } from "motion/react";
import { AlertTriangle, Users, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "NPAs Remain a Threat",
    description: "Even as banking NPAs fall, NBFCs still face asset quality pressure with higher risk from unsecured lending."
  },
  {
    icon: Users,
    title: "Inconsistent Collection Efforts",
    description: "Human agents vary in tone, persistence, and compliance, leading to lost repayments and reputational risk."
  },
  {
    icon: AlertTriangle,
    title: "Customer Fatigue",
    description: "Aggressive recovery tactics erode trust. Regulatory scrutiny on NBFC recovery practices is rising."
  },
  {
    icon: Clock,
    title: "Manual Recovery ≠ Scalable",
    description: "Recovery teams can only handle limited calls daily. Peak EMI cycles create massive backlogs."
  }
];

export function ProblemSection() {
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
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            The Banking System of{" "}
            <span className="bg-gradient-to-r from-cyan-accent to-purple-glow bg-clip-text text-transparent">
              Voice
            </span>
          </h2>
          <p className="text-2xl text-cyan-accent font-semibold mb-4">
            Loan Recovery is Broken. We're Fixing It.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-accent/20 to-purple-glow/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-glow/5 rounded-full blur-3xl"></div>
    </section>
  );
}