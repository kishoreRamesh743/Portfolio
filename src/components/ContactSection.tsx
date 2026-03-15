import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "[EMAIL]", value: "kishore21004@gmail.com", href: "mailto:kishore21004@gmail.com" },
  { icon: Phone, label: "[TEL]", value: "+91 7708627921", href: "tel:+917708627921" },
  { icon: MapPin, label: "[LOC]", value: "Cuddalore, Tamil Nadu, India", href: "#" },
  { icon: Linkedin, label: "[LNKD]", value: "LinkedIn Profile", href: "#" },
  { icon: Github, label: "[GH]", value: "GitHub Profile", href: "#" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-mono-label text-primary">// CONTACT</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2 mb-4">
          Let's Connect.
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          Interested in collaborating or have a query? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card-hover p-6 flex items-center gap-4 group"
          >
            <c.icon size={18} className="text-primary shrink-0" />
            <div>
              <span className="font-mono-label text-muted-foreground">{c.label}</span>
              <p className="text-foreground text-sm mt-1 group-hover:text-primary transition-colors">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono-label text-muted-foreground">
          © 2026 KISHORE. ALL RIGHTS RESERVED.
        </span>
        <span className="font-mono-label text-muted-foreground">
          [BUILT_WITH: REACT + TYPESCRIPT]
        </span>
      </div>
    </div>
  </section>
);

export default ContactSection;
