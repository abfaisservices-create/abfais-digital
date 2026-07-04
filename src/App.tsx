import { motion, useScroll, useTransform } from "motion/react";
import { 
  Globe, 
  Code, 
  TrendingUp, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  Mail,
  ExternalLink,
  Search,
  Layout,
  BarChart3
} from "lucide-react";
import { useRef } from "react";
import { cn } from "./lib/utils";

const services = [
  {
    title: "Web Design & Development",
    description: "High-converting, automated websites built for contractors and businesses.",
    icon: Layout,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "SEO Optimization",
    description: "Dominating search results to ensure your business is the first choice.",
    icon: Search,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Marketing & Lead Gen",
    description: "Automated CRM and lead generation systems that work while you sleep.",
    icon: BarChart3,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Content Generation",
    description: "Impactful content that builds authority and trust with your audience.",
    icon: TrendingUp,
    color: "bg-orange-500/10 text-orange-500",
  }
];

const stats = [
  { label: "Value Generated", value: "$100k+", icon: Zap },
  { label: "Views Generated", value: "5M+", icon: TrendingUp },
  { label: "International Clients", value: "50+", icon: Globe },
  { label: "Projects Delivered", value: "120+", icon: CheckCircle2 },
];

const portfolio = [
  {
    title: "Ridgewood Fence & Patio",
    category: "Web Design & Lead Gen",
    image: "https://ik.imagekit.io/q9nroxbqc/screencapture-ridgewoodfenceandpatio-2026-04-04-13_39_15.png",
    link: "https://ridgewoodfenceandpatio.com",
  },
  {
    title: "Walker's Fencing",
    category: "SEO & Automation",
    image: "https://ik.imagekit.io/q9nroxbqc/screen%20cptureWalker's%20Fencing?updatedAt=1775292025601",
    link: "#",
  },
  {
    title: "Workman Green Life Landscaping Ltd",
    category: "Full Digital Marketing",
    image: "https://ik.imagekit.io/q9nroxbqc/screencapture-startling-sorbet-d4d8e9-netlify-app-2026-04-04-13_38_11.png",
    link: "#",
  }
];

const team = [
  {
    name: "Abdullah",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah",
    bio: "Visionary leader focused on scaling businesses through technology."
  },
  {
    name: "Faisal",
    role: "CEO & Co-Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Faisal",
    bio: "Strategic expert in marketing automation and client success."
  }
];

export default function App() {
  const targetRef = useRef(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen selection:bg-brand selection:text-bg overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center font-bold text-bg text-sm">A.</div>
          <span className="font-display font-bold text-xl tracking-tight">Abfais <span className="text-brand">LLC</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-brand transition-colors">Services</a>
          <a href="#work" className="hover:text-brand transition-colors">Work</a>
          <a href="#about" className="hover:text-brand transition-colors">About</a>
          <button 
            onClick={scrollToContact}
            className="bg-brand text-bg px-5 py-2 rounded-full font-bold hover:bg-brand-dark transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 md:pt-0 overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center z-10 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold mb-6"
          >
            <Zap size={14} />
            <span>TRUSTED BY INTERNATIONAL CLIENTS</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 leading-[1.1] md:leading-[0.9]"
          >
            WE SCALE <span className="text-brand">CONTRACTORS</span> TO THE NEXT LEVEL.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            Abfais LLC provides high-impact web design, SEO, and marketing automation. 
            We've generated over <span className="text-white font-bold">$100,000+</span> in value for our clients worldwide.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={scrollToContact}
              className="bg-brand text-bg px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-dark transition-all group"
            >
              Book a Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#work"
              className="glass px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="text-brand" size={24} />
              </div>
              <div className="text-3xl md:text-5xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-white/40 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand font-bold tracking-widest text-sm mb-4 uppercase">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Comprehensive Solutions for <span className="text-white/40">Modern Businesses.</span>
            </h3>
          </div>
          <p className="text-white/50 max-w-sm">
            We don't just build websites; we build automated growth engines that generate real revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group cursor-default"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Selected Works</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              A glimpse into the digital experiences we've crafted for our international partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] glass"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-brand text-xs font-bold mb-2 uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <a href={item.link} className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-brand font-bold tracking-widest text-sm mb-4 uppercase">The Leadership</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Driven by <span className="text-white/40">Innovation</span> & Results.
            </h3>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Abfais LLC was founded with a single mission: to bridge the gap between complex technology and business growth. 
              Our CEOs bring a combined decade of experience in digital transformation.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand">10+</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Years Combined Exp.</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand">100%</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass p-6 rounded-3xl text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-brand/20">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-brand text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-white/50 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-brand/5 -z-10" />
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            READY TO SCALE YOUR <span className="text-brand">BUSINESS?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join the elite contractors and businesses who have already generated over $100k+ in value with Abfais LLC.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-brand text-bg px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-dark transition-all transform hover:scale-105 shadow-2xl shadow-brand/20"
          >
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-brand font-bold tracking-widest text-sm mb-4 uppercase">Contact Us</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Let's Build Something <span className="text-white/40">Great Together.</span>
            </h3>
            <p className="text-white/60 text-lg mb-12">
              Ready to automate your leads and scale your business? Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest font-bold">Email Us</div>
                  <div className="text-lg font-bold">contact@abfais.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest font-bold">Location</div>
                  <div className="text-lg font-bold">Worldwide / Remote</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[32px]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Service Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors appearance-none">
                  <option className="bg-bg">Web Design & Development</option>
                  <option className="bg-bg">SEO Optimization</option>
                  <option className="bg-bg">Marketing & Lead Gen</option>
                  <option className="bg-bg">Content Generation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-brand text-bg py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all transform active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center font-bold text-bg text-[10px]">A.</div>
            <span className="font-display font-bold text-lg tracking-tight">Abfais <span className="text-brand">LLC</span></span>
          </div>
          
          <div className="flex gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:contact@abfais.com" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="text-center mt-12 text-white/20 text-xs">
          © 2026 Abfais LLC. All rights reserved. Designed for impact.
        </div>
      </footer>
    </div>
  );
}
