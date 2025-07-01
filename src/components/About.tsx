
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Clock, 
  Heart, 
  Shield, 
  Users, 
  CheckCircle 
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Utilizamos apenas materiais de primeira linha e técnicas de fabricação avançadas."
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Respeitamos prazos e entregamos seus móveis no tempo combinado."
    },
    {
      icon: Heart,
      title: "Paixão pelo Que Fazemos",
      description: "Cada projeto é tratado com carinho e atenção aos mínimos detalhes."
    },
    {
      icon: Shield,
      title: "Garantia Completa",
      description: "Oferecemos garantia em todos os nossos móveis e serviços."
    }
  ];

  const achievements = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "500+", label: "Projetos Concluídos" },
    { number: "100%", label: "Clientes Satisfeitos" },
    { number: "50+", label: "Parceiros Ativos" }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-wood mb-6">
              Sobre a Maicon Melo
              <span className="block text-gold">Móveis Planejados</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Com mais de 15 anos de experiência no mercado de móveis planejados, 
              a <strong>Maicon Melo Móveis</strong> nasceu da paixão por transformar 
              espaços e realizar sonhos. Nossa missão é criar ambientes únicos, 
              funcionais e elegantes que reflitam a personalidade de cada cliente.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Especializados em móveis sob medida para todos os ambientes da casa, 
              combinamos tradição artesanal com tecnologia moderna para entregar 
              resultados excepcionais. Cada projeto é desenvolvido com cuidado e 
              atenção aos detalhes, garantindo móveis que durem por gerações.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-wood hover:bg-wood/90 text-white"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="w-5 h-5 mr-2" />
                Fale Conosco
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-wood text-wood hover:bg-wood hover:text-white"
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Nossos Trabalhos
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Oficina Maicon Melo Móveis"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-wood/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-4xl md:text-5xl font-bold text-wood mb-2">
                {achievement.number}
              </h3>
              <p className="text-muted-foreground font-medium">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-wood mb-4">
            Nossos Valores
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os princípios que guiam nosso trabalho e nos tornam referência no mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-wood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-wood" />
                  </div>
                  <h4 className="text-lg font-semibold text-wood mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
