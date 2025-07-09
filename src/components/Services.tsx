
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChefHat, 
  Bed, 
  Sofa, 
  Bath, 
  Briefcase, 
  Home,
  Ruler,
  Palette,
  Wrench
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Cozinhas Planejadas",
      description: "Cozinhas funcionais e elegantes, projetadas para otimizar cada centímetro do seu espaço.",
      features: ["Armários sob medida", "Bancadas em quartzo", "Iluminação LED integrada"]
    },
    {
      icon: Bed,
      title: "Dormitórios",
      description: "Quartos aconchegantes com guarda-roupas, cômodas e criados-mudos personalizados.",
      features: ["Guarda-roupas amplos", "Penteadeiras elegantes", "Cabeceiras estofadas"]
    },
    {
      icon: Sofa,
      title: "Salas de Estar",
      description: "Ambientes de convivência com racks, estantes e móveis que combinam estilo e funcionalidade.",
      features: ["Racks para TV", "Estantes modulares", "Mesa de centro"]
    },
    {
      icon: Bath,
      title: "Banheiros",
      description: "Móveis para banheiro que unem praticidade e beleza em ambientes únicos.",
      features: ["Gabinetes suspensos", "Espelheiras", "Nichos embutidos"]
    },
    {
      icon: Briefcase,
      title: "Home Office",
      description: "Escritórios em casa com mesas, estantes e organização para máxima produtividade.",
      features: ["Mesas ergonômicas", "Estantes organizadoras", "Armários arquivos"]
    },
    {
      icon: Home,
      title: "Área Gourmet",
      description: "Espaços para entretenimento com churrasqueiras, balcões e área de apoio.",
      features: ["Bancadas gourmet", "Armários externos", "Área de churrasco"]
    }
  ];

  const process = [
    {
      icon: Ruler,
      title: "Medição",
      description: "Visitamos seu espaço e realizamos medições precisas para o projeto perfeito."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Criamos um projeto 3D personalizado de acordo com seu estilo e necessidades."
    },
    {
      icon: Wrench,
      title: "Instalação",
      description: "Nossa equipe especializada cuida de toda a fabricação e instalação dos móveis."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-wood mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em móveis planejados para todos os ambientes da sua casa,
            com design personalizado e qualidade excepcional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in-up border-border/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-wood/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-wood" />
                  </div>
                  <CardTitle className="text-xl text-wood">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-wood mb-4">
            Como Trabalhamos
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e transparente do primeiro contato até a entrega final
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-20 h-20 bg-gradient-wood rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-wood mb-3">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gold/30 transform translate-x-1/2"></div>
                )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Services;
