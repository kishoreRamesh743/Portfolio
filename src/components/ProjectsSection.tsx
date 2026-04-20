import { motion } from "framer-motion";

const projects = [
  {
    id: "PRJ_01",
    title: "Smart Automated Cleaning Robot",
    subtitle: "Municipal Use",
    description: "A sensor-based automated robot designed to detect and clean waste, helping municipalities improve waste management through intelligent detection systems.",
    tags: ["Sensors", "Automation", "IoT", "Embedded"],
    accent: "primary",
  },
  {
    id: "PRJ_02",
    title: "Python Games",
    subtitle: "Tic Tac Toe • Rock Paper Scissors",
    description: "Python games developed to understand programming logic and game mechanics, featuring interactive gameplay and clean code architecture.",
    tags: ["Python", "Logic", "Games"],
    accent: "primary",
  },
  {
    id: "PRJ_03",
    title: "Data Analysis Projects",
    subtitle: "Iris • Amazon • Mobile • Mental Health • AI Tools",
    description: "Performed data inspection, cleaning, and visualization using NumPy, Matplotlib, and Seaborn. Created heatmaps, cluster maps, violin plots, and pair plots.",
    tags: ["NumPy", "Matplotlib", "Seaborn", "Pandas"],
    accent: "primary",
  },
  {
    id: "PRJ_03",
    title: "Nutrition & Fitness AI Chatbot",
    subtitle: "Health Analysis • Diet Planning • Fitness Insights",
    description: "An AI-powered chatbot built using Streamlit that analyzes user fitness data such as height, weight, age, activity level, and diet to provide personalized nutrition guidance, obesity level prediction, and fitness recommendations. It helps users understand their health status and improve lifestyle choices using data-driven insights.",
    tags: ["Python", "AI", "Streamlit", "Machine Learning", "Health"],
    accent: "success",
    link: "http://localhost:8501/#nutrition-and-fitness-ai-chatbot"
  }
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono-label text-primary">// PROJECTS</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-8">Selected Works.</h2>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover p-8 group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <span className="font-mono-label text-muted-foreground shrink-0">{project.id}</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono-data text-sm text-primary mt-1">{project.subtitle}</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono-label text-primary border border-primary/20 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
