import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import profileImg from "@/assets/kishore-profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const statusItems = ["SYSTEM: ACTIVE", "LOCATION: CHENNAI", "MODE: DATA_ANALYSIS"];

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  const [currentStatus, setCurrentStatus] = useState(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prev) => (prev + 1) % statusItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 circuit-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Status Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-20 left-6 md:left-12 lg:left-24 flex gap-4"
      >
        {statusItems.map((item, i) => (
          <span
            key={item}
            className={`font-mono-label transition-colors duration-500 ${
              i === currentStatus ? "text-primary glow-cyan" : "text-muted-foreground"
            }`}
          >
            [{item}]
          </span>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 section-padding pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-mono-label text-primary mb-4 block">// PORTFOLIO_V1.0</span>

              <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter uppercase leading-[0.85]">
                <span className="text-stroke block">KISHORE R</span>
              </h1>

              <motion.p
                style={{ x: parallaxX, y: parallaxY }}
                className="text-xl md:text-2xl font-bold tracking-tight mt-4 text-foreground"
              >
                ECE STUDENT <span className="text-primary">•</span> ATHLETE
              </motion.p>

              <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
                Electronics & Communication Engineering student at Sairam Engineering College, 
                passionate about Python, data analysis, embedded systems, and competitive football.
              </p>

              <div className="flex gap-4 mt-8">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono-label hover:glow-cyan transition-all">
                  [CONTACT]
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono-label hover:border-primary hover:text-primary transition-all">
                  [PROJECTS]
                </a>
              </div>

              <div className="flex gap-5 mt-8">
                {[
                  { icon: Mail, href: "mailto:kishore@email.com", label: "Email" },
                  { icon: Phone, href: "tel:+91", label: "Phone" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Github, href: "#", label: "GitHub" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} className="text-muted-foreground hover:text-primary hover:glow-cyan transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden border-2 border-primary/30 relative">
                <img src={profileImg} alt="Kishore" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border border-primary/20" />
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="w-full h-px bg-primary/40 animate-scan-line" />
                </div>
              </div>
              {/* Corner markers */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
              <span className="font-mono-label text-primary absolute -bottom-6 left-0">[IMG_PROFILE_01]</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
