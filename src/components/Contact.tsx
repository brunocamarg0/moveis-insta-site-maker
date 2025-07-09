
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  MessageCircle,
  Send
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5519971067197?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(19) 97106-7197",
      action: () => window.open('tel:+5519971067197', '_self')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(19) 97106-7197",
      action: () => window.open('https://wa.me/5519971067197', '_blank')
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@maiconmelo.com.br",
      action: () => window.open('mailto:contato@maiconmelo.com.br', '_self')
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@maiconmelomoveis",
      action: () => window.open('https://www.instagram.com/maiconmelomoveis/', '_blank')
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-wood mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua casa? Entre em contato conosco e vamos 
            criar juntos o projeto dos seus sonhos. Atendimento personalizado e orçamento gratuito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl text-wood flex items-center">
                <Send className="w-6 h-6 mr-3" />
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-wood mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-wood/30 focus:border-wood"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wood mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-wood/30 focus:border-wood"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-wood mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-wood/30 focus:border-wood"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wood mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-wood/30 focus:border-wood min-h-32"
                    placeholder="Conte-nos sobre seu projeto: ambiente, estilo preferido, prazo..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-wood hover:bg-wood/90 text-white py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:bg-wood/5"
                    onClick={info.action}
                  >
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-wood mx-auto mb-3" />
                      <h3 className="font-semibold text-wood mb-1">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-wood flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-medium">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-wood flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rua dos Móveis, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP: 01234-567
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-wood text-wood hover:bg-wood hover:text-white"
                  onClick={() => window.open('https://maps.google.com/?q=Rua+dos+Móveis+123+São+Paulo', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
