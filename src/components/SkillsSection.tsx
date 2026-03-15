import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    items: ["Python", "Embedded C"],
    color: "text-primary",
  },
  {
    title: "Data Analysis",
    items: ["NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "Data Visualization"],
    color: "text-primary",
  },
  {
    title: "Technical",
    items: ["Sensors", "Embedded Systems", "Data Inspection", "Missing Value Handling"],
    color: "text-primary",
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Analytical Thinking", "Teamwork", "Discipline"],
    color: "text-energy",
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono-label text-primary">// SKILLS</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-8">Tech Stack.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover p-6"
          >
            <span className="font-mono-label text-muted-foreground">{cat.title}</span>
            <div className="mt-4 space-y-2">
              {cat.items.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 ${cat.color === "text-energy" ? "bg-energy" : "bg-primary"}`} />
                  <span className="font-mono-data text-sm text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
