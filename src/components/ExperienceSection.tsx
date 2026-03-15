import { motion } from "framer-motion";

const internships = [
  {
    company: "Lumisense Pvt Ltd",
    role: "Sensor Technology Intern",
    description: "Learned sensor functionality, worked with sensor-based systems, and gained hands-on experience with real-world sensor applications.",
    tags: ["Sensors", "IoT", "Hardware"],
  },
  {
    company: "Lenovo Pvt Ltd, Puducherry",
    role: "Technical Intern",
    description: "Worked in real-time industrial environments including night shift operations. Gained experience in professional work environments and operational processes.",
    tags: ["Industrial", "Operations", "Stipend"],
  },
  {
    company: "Adventure Tech",
    role: "Embedded Systems Intern",
    description: "Learned Embedded C programming and gained knowledge about microcontrollers and embedded system development.",
    tags: ["Embedded C", "Microcontrollers", "Systems"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono-label text-primary">// WORK EXPERIENCE</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-8">Internships.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {internships.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover p-6 group relative overflow-hidden"
          >
            {/* Scan effect on hover */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="w-full h-px bg-primary/30 animate-scan-line" />
            </div>

            <span className="font-mono-label text-muted-foreground">INT_{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-lg font-bold mt-3 text-foreground">{item.role}</h3>
            <p className="text-primary font-mono-data text-sm mt-1">{item.company}</p>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag) => (
                <span key={tag} className="font-mono-label text-primary border border-primary/20 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
