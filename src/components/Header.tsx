
import { Menu, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="#inicio" className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-wood">
              <img 
                src="/logo.png" 
                alt="Logo Maicon Melo" 
                className="w-10 h-10 rounded-full object-cover border border-wood bg-white transition-transform group-hover:scale-105" 
                style={{ background: 'white' }}
              />
              <span>
                <h1 className="text-2xl md:text-3xl font-bold text-wood leading-tight">
                  Maicon Melo
                </h1>
                <span className="text-lg text-gold font-medium hidden sm:block">
                  Móveis Planejados
                </span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-wood transition-colors duration-200">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-wood transition-colors duration-200">
              Serviços
            </a>
            <a href="#projetos" className="text-foreground hover:text-wood transition-colors duration-200">
              Projetos
            </a>
            <a href="#sobre" className="text-foreground hover:text-wood transition-colors duration-200">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-wood transition-colors duration-200">
              Contato
            </a>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-wood text-wood hover:bg-wood hover:text-white"
              onClick={() => window.open('https://www.instagram.com/maiconmelomoveis/', '_blank')}
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
            <Button 
              size="sm"
              className="bg-wood hover:bg-wood/90 text-white"
              onClick={() => window.open('tel:+5511999999999', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="text-foreground hover:text-wood transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-foreground hover:text-wood transition-colors">
                Serviços
              </a>
              <a href="#projetos" className="text-foreground hover:text-wood transition-colors">
                Projetos
              </a>
              <a href="#sobre" className="text-foreground hover:text-wood transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-wood transition-colors">
                Contato
              </a>
              <div className="flex space-x-3 pt-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-wood text-wood hover:bg-wood hover:text-white flex-1"
                  onClick={() => window.open('https://www.instagram.com/maiconmelomoveis/', '_blank')}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button 
                  size="sm"
                  className="bg-wood hover:bg-wood/90 text-white flex-1"
                  onClick={() => window.open('tel:+5511999999999', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
