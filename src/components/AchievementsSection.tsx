import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const stats = [
  { value: "100+", label: "Tournaments Played" },
  { value: "60+", label: "Tournaments Won" },
  { value: "2x", label: "Zonal Champion" },
  { value: "1x", label: "Inter-Zonal Runner-Up" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono-label text-energy">// ACHIEVEMENTS</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-8">
          The Trophy Room.
        </h2>
      </motion.div>

      {/* Big stat */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-[8rem] md:text-[12rem] font-bold tracking-tighter leading-none text-energy/20 italic">
          60+
        </span>
        <p className="font-mono-label text-energy -mt-6 ml-2">TOURNAMENT WINS</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover p-6 text-center"
          >
            <span className="text-3xl md:text-4xl font-bold text-energy">{stat.value}</span>
            <p className="font-mono-label text-muted-foreground mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="card-hover p-8">
        <div className="flex items-start gap-4">
          <Trophy size={24} className="text-energy shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Sports Journey</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• 2x Zonal Tournament Winner in Football</li>
              <li>• 1x Inter-Zonal Runner-Up</li>
              <li>• 2x Zonal Third Place</li>
              <li>• National Level Tennis Ball Cricket — Maharashtra</li>
              <li>• National Level Football Tennis — Odisha</li>
              <li>• National Level Jump Rope — Maharashtra</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
