import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono-label text-primary">// EDUCATION</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-8">Academic Base.</h2>

        <div className="card-hover p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">B.E. Electronics & Communication Engineering</h3>
              <p className="text-primary font-mono-data text-sm mt-1">Sairam Engineering College</p>
              <p className="text-muted-foreground flex items-center gap-1 mt-2 text-sm">
                <MapPin size={14} /> Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
