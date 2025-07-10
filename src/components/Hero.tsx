
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "/IMG2.jpg",
  "/IMG3.jpg",
  "/IMG4.jpg",
  "/IMG_1579.jpeg",
  "/IMG_1580.jpeg",
  "/IMG_1581.jpeg",
  "/IMG_1582.jpeg",
  "/IMG_1583.jpeg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev + 1) % heroImages.length);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrossel de Imagens de Fundo */}
      <div className="absolute inset-0 z-0 transition-all duration-700">
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Banner ${idx + 1}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transition: 'opacity 0.7s' }}
          />
        ))}
        {/* Setas de navegação */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 hover:bg-black/70"
          onClick={goToPrev}
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 hover:bg-black/70"
          onClick={goToNext}
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Móveis Planejados
            <span className="block text-gold">Sob Medida</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Transformamos seus sonhos em realidade com móveis únicos, 
            funcionais e de alta qualidade para todos os ambientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-6 text-lg"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-black px-8 py-6 text-lg"
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-gold mr-2" />
                <span className="text-3xl font-bold">15+</span>
              </div>
              <p className="text-gray-300">Anos de Experiência</p>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-gold mr-2" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-gray-300">Projetos Realizados</p>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-gold mr-2" />
                <span className="text-3xl font-bold">100%</span>
              </div>
              <p className="text-gray-300">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
