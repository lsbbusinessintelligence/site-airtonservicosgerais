import { MapPin, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511974743793?text=Ol%C3%A1!%20Encontrei%20o%20site%20no%20Google.%20Preciso%20de%20ajuda%20com%20um%20reparo%2Fservi%C3%A7o.";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-14" role="contentinfo">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/airton/AIRTON-LOGO.jpeg"
              alt="Logo Airton Serviços Gerais"
              className="w-12 h-12 object-contain rounded-lg border border-white/15"
            />
            <div>
              <h3 className="text-lg font-bold leading-tight">Airton Serviços</h3>
              <p className="text-primary-foreground/60 text-xs">Desentupidora · Caça Vazamento · Eletricista · Pintura</p>
            </div>
          </div>
          <p className="text-primary-foreground/65 text-sm leading-relaxed">
            Serviços gerais residenciais e comerciais em São Paulo - SP e região
            metropolitana. Qualidade, transparência e garantia em cada serviço.
          </p>
        </div>

        {/* Serviços */}
        <div>
          <h3 className="text-base font-bold mb-4">Serviços em São Paulo</h3>
          <ul className="space-y-2 text-primary-foreground/65 text-sm">
            <li>• Desentupidora Profissional em São Paulo</li>
            <li>• Caça Vazamento em SP</li>
            <li>• Eletricista em São Paulo</li>
            <li>• Encanamento em São Paulo</li>
            <li>• Pedreiro e Pintura em SP</li>
          </ul>
        </div>

        {/* Contato & Área */}
        <div>
          <h3 className="text-base font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Área de Atendimento
          </h3>
          <ul className="space-y-1 text-primary-foreground/65 text-sm mb-5">
            <li>• São Paulo (todas as zonas)</li>
            <li>• Grande São Paulo</li>
            <li>• Região Metropolitana de SP</li>
          </ul>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+5511974743793"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              (11) 97474-3793
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-accent" />
              WhatsApp: (11) 97474-3793
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row items-center justify-between gap-3 text-primary-foreground/50 text-xs">
        <p>&copy; {new Date().getFullYear()} Airton Serviços. Todos os direitos reservados.</p>
        <p>
          Developed by{" "}
          <a
            href="https://lsbintelligence.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:brightness-110 transition-colors font-medium"
          >
            LSB Business Intelligence
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
