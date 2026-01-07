import { motion } from "framer-motion";
import logo1 from "@assets/26223385_1994649867421839_6009631052174196736_n_1767782875328.png";
import logo2 from "@assets/53762932_329163244395625_726688847072591872_n_1767782875328.png";
import logo3 from "@assets/170342098_356112955795965_4465757533484679409_n_1767782875328.png";
import logo4 from "@assets/253558029_195166099463507_4940690085342094307_n_1767782875329.png";
import logo5 from "@assets/299091429_361202769543377_7929086272732765636_n_1767782875329.png";
import logo6 from "@assets/312696742_647140816946147_6572336688173157624_n_1767782875329.png";
import logo7 from "@assets/326130488_1781112508955662_2481053415452603301_n_1767782875329.png";
import logo8 from "@assets/344987271_220483644013835_2065573032579483899_n_1767782875329.png";
import logo9 from "@assets/354034011_199585882789409_4101201147969576106_n_1767782875330.png";
import logo10 from "@assets/366495394_1741452949627937_3020611971889406196_n_1767782875330.png";
import logo11 from "@assets/418621938_696707025852587_8741066425647608368_n_1767782875330.png";
import logo12 from "@assets/422575912_1643379589530047_633939232435318899_n_1767782875330.png";
import logo13 from "@assets/440868007_346821568394917_8492325103601683043_n_1767782895799.png";
import logo14 from "@assets/441655909_1105176564147159_1443897792786301737_n_1767782895799.png";
import logo15 from "@assets/491455797_1011283060960397_6665471886061417366_n_1767782895799.png";
import logo16 from "@assets/Ayra_Logos_1767782895799.png";
import logo17 from "@assets/coorg-cliffs-resort-logo_1767782895800.png";
import logo19 from "@assets/mahindra-new-logo_1767782895801.png";
import logo20 from "@assets/New-Triity-Logo-01-1-r0uq3igz1e5dkl9wqqjewupf4p4n3ktfjnbb133nn_1767782895801.png";
import logo21 from "@assets/Screenshot_2026-01-07_at_2.18.57_PM_1767782895802.png";
import logo22 from "@assets/Screenshot_2026-01-07_at_2.20.00_PM_1767782895802.png";
import logo23 from "@assets/Screenshot_2026-01-07_at_2.20.33_PM_1767782895802.png";
import logo24 from "@assets/Screenshot_2026-01-07_at_2.28.51_PM_1767782895802.png";
import logo25 from "@assets/Screenshot_2026-01-07_at_2.29.15_PM_1767782953134.png";
import logo26 from "@assets/Screenshot_2026-01-07_at_2.56.23_PM_1767782953134.png";
import logo27 from "@assets/Screenshot_2026-01-07_at_2.58.46_PM_1767782953134.png";
import logo28 from "@assets/Screenshot_2026-01-07_at_3.00.44_PM_1767782953134.png";
import logo29 from "@assets/Screenshot_2026-01-07_at_3.05.10_PM_1767782953135.png";
import logo30 from "@assets/Screenshot_2026-01-07_at_3.08.48_PM_1767782953135.png";
import logo31 from "@assets/Screenshot_2026-01-07_at_3.22.19_PM_1767782953135.png";
import logo32 from "@assets/Screenshot_2026-01-07_at_3.26.33_PM_1767782953135.png";
import logo33 from "@assets/Screenshot_2026-01-07_at_3.30.21_PM_1767782953136.png";
import logo34 from "@assets/UpperLogo050720231009410091632PM_1767782953136.png";
import logo35 from "@assets/Screenshot_2026-01-07_at_6.43.17_PM_1767791794060.png";

const clients = [
  { name: "North Avenue", logo: logo1 },
  { name: "Anonymous", logo: logo2 },
  { name: "Owl", logo: logo3 },
  { name: "Manipal Hospitals", logo: logo4 },
  { name: "Coorg Institute", logo: logo5 },
  { name: "Magique", logo: logo6 },
  { name: "Pebble", logo: logo7 },
  { name: "Brioche Doree", logo: logo8 },
  { name: "Plus", logo: logo9 },
  { name: "Splash", logo: logo10 },
  { name: "Javaji Mixx", logo: logo11 },
  { name: "Digitiverse", logo: logo12 },
  { name: "MYCAS", logo: logo13 },
  { name: "Vidyavardhaka", logo: logo14 },
  { name: "Kitty", logo: logo15 },
  { name: "Ayra Shelters", logo: logo16 },
  { name: "Coorg Cliffs", logo: logo17 },
  { name: "Mahindra", logo: logo19 },
  { name: "Trinity", logo: logo20 },
  { name: "Sunburn Reload", logo: logo21 },
  { name: "Nikz", logo: logo22 },
  { name: "Sunburn Union", logo: logo23 },
  { name: "Yuva Dasara", logo: logo24 },
  { name: "Casa Bacardi", logo: logo25 },
  { name: "Almost Human", logo: logo26 },
  { name: "Raghu Dixit", logo: logo27 },
  { name: "Stan Kolev", logo: logo28 },
  { name: "Anuv Jain", logo: logo29 },
  { name: "Houdini", logo: logo30 },
  { name: "Zafrir", logo: logo31 },
  { name: "Rahul Dit-O", logo: logo32 },
  { name: "Eventia", logo: logo33 },
  { name: "Rotary Mysore", logo: logo34 },
  { name: "Ritviz", logo: logo35 },
];

export default function Experience() {
  const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
  const secondRow = clients.slice(Math.ceil(clients.length / 2));

  return (
    <section id="experience_timeline" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Proven Track Record</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 italic">Strategic Collaborations</h2>
          <p className="text-muted-foreground">Brands and ecosystems I've partnered with.</p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8">
        {/* First Row: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 items-center whitespace-nowrap"
          >
            {[...firstRow, ...firstRow].map((client, index) => (
              <div
                key={index}
                className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center p-3 bg-card border border-white/5 rounded-2xl grayscale hover:grayscale-0 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 overflow-hidden"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row: Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 items-center whitespace-nowrap"
          >
            {[...secondRow, ...secondRow].map((client, index) => (
              <div
                key={index}
                className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center p-3 bg-card border border-white/5 rounded-2xl grayscale hover:grayscale-0 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 overflow-hidden"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className="flex flex-wrap justify-center gap-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/40">
          <span>Concerts</span>
          <span className="text-primary/20">•</span>
          <span>Hospitality</span>
          <span className="text-primary/20">•</span>
          <span>RealEstate</span>
          <span className="text-primary/20">•</span>
          <span>Commercial</span>
          <span className="text-primary/20">•</span>
          <span>Entertainment</span>
          <span className="text-primary/20">•</span>
          <span>Fashion</span>
          <span className="text-primary/20">•</span>
          <span>Lifestyle</span>
          <span className="text-primary/20">•</span>
          <span>Sports</span>
          <span className="text-primary/20">•</span>
          <span>Automotive</span>
          <span className="text-primary/20">•</span>
          <span>Technology</span>
          <span className="text-primary/20">•</span>
          <span>Startups</span>
          <span className="text-primary/20">•</span>
          <span>Corporate</span>
          <span className="text-primary/20">•</span>
          <span>Education</span>
          <span className="text-primary/20">•</span>
          <span>Healthcare</span>
          <span className="text-primary/20">•</span>
          <span>Restaurants</span>
          <span className="text-primary/20">•</span>
          <span>Retail</span>
          <span className="text-primary/20">•</span>
          <span>Events</span>
          <span className="text-primary/20">•</span>
          <span>Media</span>
          <span className="text-primary/20">•</span>
          <span>Tourism</span>
          <span className="text-primary/20">•</span>
          <span>Luxury</span>
        </div>
      </div>
    </section>
  );
}
