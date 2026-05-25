import { motion } from "framer-motion";
import { Play, Wind, Search } from "lucide-react";

const videos = [
  {
    icon: Wind,
    label: "Desentupimento Industrial",
    title: "Máquinas desentupidoras motorizadas em ação",
    desc: "Assista à demonstração dos nossos equipamentos de desentupimento de grande porte resolvendo obstruções severas que equipamentos convencionais não alcançam.",
    tag: "Desentupidora Profissional",
  },
  {
    icon: Search,
    label: "Localização de Vazamentos",
    title: "Geofone digital detectando vazamento oculto",
    desc: "Veja como localizamos com precisão milimétrica o ponto exato de um vazamento oculto em parede ou laje sem nenhuma quebra desnecessária.",
    tag: "Caça Vazamento",
  },
];

const VideoSection = () => (
  <section className="py-20 md:py-28 bg-primary" aria-labelledby="videos-heading">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2
          id="videos-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Nosso Trabalho{" "}
          <span className="text-gradient">em Ação</span>
        </h2>
        <p className="text-white/65 text-lg">
          Tecnologia profissional aplicada na prática — veja como resolvemos o que
          outros não conseguem
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex flex-col"
          >
            {/* Video placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/80 to-[hsl(215_60%_22%)] flex items-center justify-center group cursor-pointer">
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, hsl(0 0% 100%), hsl(0 0% 100%) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, hsl(0 0% 100%), hsl(0 0% 100%) 1px, transparent 1px, transparent 40px)",
                }}
              />

              {/* Icon background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
              </div>

              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/90 hover:bg-accent flex items-center justify-center shadow-lg shadow-accent/30 transition-all duration-200 group-hover:scale-110">
                  <Play className="w-7 h-7 text-accent-foreground ml-1" />
                </div>
                <span className="text-white/80 text-sm font-medium">
                  Vídeo em breve
                </span>
              </div>

              {/* Service icon watermark */}
              <v.icon className="absolute bottom-4 right-4 w-8 h-8 text-white/10" />
            </div>

            {/* Caption */}
            <div className="p-5 flex flex-col gap-2">
              <span className="text-xs font-bold text-accent uppercase tracking-wider">
                {v.tag}
              </span>
              <h3 className="text-white font-semibold text-base leading-snug">
                {v.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
