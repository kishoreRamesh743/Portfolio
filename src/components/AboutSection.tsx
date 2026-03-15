import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono-label text-primary">// ABOUT</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-8">
          The Engineer <span className="text-primary">&</span> Athlete.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an Electronics & Communication Engineering student at Sairam Engineering College, Chennai. 
              My passion lies at the intersection of hardware and software — from embedded systems and sensor 
              technology to Python programming and data analysis.
            </p>
            <p>
              I've completed internships at Lumisense, Lenovo, and Adventure Tech, gaining hands-on experience 
              with real-world sensor applications, industrial operations, and embedded C development.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Beyond the lab, I'm a dedicated football player with 100+ tournaments and 60+ wins. I've competed 
              in zonal, inter-zonal, and national level competitions across multiple sports including football 
              tennis and tennis ball cricket.
            </p>
            <p>
              My goal is to strengthen my expertise in Python, data analysis, and embedded systems while 
              maintaining the discipline, teamwork, and drive that competitive sports demand.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
