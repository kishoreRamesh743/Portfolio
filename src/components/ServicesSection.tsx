import { motion } from "framer-motion";
import { Code, BarChart3, Cpu, Gamepad2 } from "lucide-react";

const services = [
  { icon: Code, title: "Python Programming", description: "Custom Python scripts and programming assistance for automation and problem-solving." },
  { icon: BarChart3, title: "Data Analysis", description: "Data inspection, cleaning, and visualization using NumPy, Matplotlib, and Seaborn." },
  { icon: Cpu, title: "Embedded Systems", description: "Learning projects involving microcontrollers, sensors, and Embedded C programming." },
  { icon: Gamepad2, title: "Game Development", description: "Basic game development in Python — logic-based interactive games." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono-label text-primary">// SERVICES</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-8">What I Offer.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover p-6 group"
          >
            <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <s.icon size={22} />
            </div>
            <h3 className="text-lg font-bold mt-4 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
