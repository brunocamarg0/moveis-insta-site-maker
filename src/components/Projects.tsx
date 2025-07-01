
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowRight } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "cozinha", label: "Cozinhas" },
    { id: "dormitorio", label: "Dormitórios" },
    { id: "sala", label: "Salas" },
    { id: "banheiro", label: "Banheiros" },
    { id: "escritorio", label: "Escritórios" }
  ];

  const projects = [
    {
      id: 1,
      title: "Cozinha Moderna Americana",
      category: "cozinha",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Cozinha planejada com ilha central e acabamentos premium"
    },
    {
      id: 2,
      title: "Dormitório Casal Elegante",
      category: "dormitorio",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Quarto completo com guarda-roupa amplo e penteadeira"
    },
    {
      id: 3,
      title: "Sala de Estar Contemporânea",
      category: "sala",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Rack sob medida com painel para TV e estantes"
    },
    {
      id: 4,
      title: "Banheiro Planejado Luxo",
      category: "banheiro",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Móveis suspensos com espelheira e nichos embutidos"
    },
    {
      id: 5,
      title: "Home Office Executivo",
      category: "escritorio",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Escritório completo com mesa angular e estantes"
    },
    {
      id: 6,
      title: "Cozinha Compacta Funcional",
      category: "cozinha",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Aproveitamento máximo do espaço em cozinha pequena"
    },
    {
      id: 7,
      title: "Quarto Infantil Temático",
      category: "dormitorio",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Beliche com escrivaninha integrada e muito charme"
    },
    {
      id: 8,
      title: "Sala de Jantar Clássica",
      category: "sala",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Buffet elegante com cristaleira para sala de jantar"
    }
  ];

  const filteredProjects = selectedCategory === "todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-wood mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Cada projeto é único e pensado especialmente para você. 
            Veja alguns dos nossos trabalhos realizados com carinho e dedicação.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id 
                    ? "bg-wood hover:bg-wood/90 text-white" 
                    : "border-wood text-wood hover:bg-wood hover:text-white"
                } transition-all duration-200`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3 bg-gold/90 text-black">
                  {categories.find(cat => cat.id === project.category)?.label}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-wood mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Gostou do que viu? Entre em contato e vamos criar o projeto dos seus sonhos!
          </p>
          <Button 
            size="lg"
            className="bg-wood hover:bg-wood/90 text-white px-8 py-6 text-lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
