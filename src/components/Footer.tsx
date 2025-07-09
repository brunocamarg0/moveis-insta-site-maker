
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" }
  ];

  const services = [
    "Cozinhas Planejadas",
    "Dormitórios",
    "Salas de Estar",
    "Banheiros",
    "Home Office",
    "Área Gourmet"
  ];

  return (
    <footer className="bg-wood text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-gold">
              Maicon Melo
            </h3>
            <p className="text-lg mb-4 text-white/90">
              Móveis Planejados
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transformando espaços há mais de 15 anos com qualidade, 
              dedicação e móveis sob medida que fazem a diferença na sua casa.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white hover:text-wood"
                onClick={() => window.open('https://www.instagram.com/maiconmelomoveis/', '_blank')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/90 font-medium">(11) 99999-9999</p>
                  <p className="text-white/70 text-sm">WhatsApp disponível</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/90">contato@maiconmelo.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/90">Rua dos Móveis, 123</p>
                  <p className="text-white/70 text-sm">Centro - São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/90 text-sm">Seg-Sex: 08:00-18:00</p>
                  <p className="text-white/70 text-sm">Sáb: 08:00-12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">
              © {currentYear} Maicon Melo Móveis Planejados. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>para transformar sua casa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
