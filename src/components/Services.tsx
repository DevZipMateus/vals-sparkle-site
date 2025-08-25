import React from 'react';
import { Sparkles, TreePine, Layers, Brush } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "Limpeza e Conservação", 
      description: "Serviços completos de limpeza predial, conservação de ambientes corporativos e residenciais com produtos de alta qualidade.",
      features: ["Limpeza predial", "Conservação diária", "Produtos ecológicos", "Equipe treinada"]
    },
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "Tratamento de Piso",
      description: "Especialistas em tratamento, enceramento e restauração de pisos. Devolvemos o brilho e proteção para todos os tipos de revestimento.",
      features: ["Enceramento profissional", "Restauração", "Impermeabilização", "Manutenção preventiva"]
    },
    {
      icon: <TreePine className="h-12 w-12 text-primary" />,
      title: "Jardinagem e Paisagismo",
      description: "Criação e manutenção de jardins, paisagismo corporativo e residencial. Transformamos espaços em ambientes verdes e acolhedores.",
      features: ["Design de jardins", "Manutenção regular", "Plantio especializado", "Irrigação automática"]
    },
    {
      icon: <Brush className="h-12 w-12 text-primary" />,
      title: "Serviços Especializados",
      description: "Soluções personalizadas para necessidades específicas, incluindo limpeza pós-obra, eventos e serviços emergenciais.",
      features: ["Limpeza pós-obra", "Eventos especiais", "Atendimento emergencial", "Consultoria técnica"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container-responsive">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Nossos Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em limpeza e paisagismo, sempre com foco na qualidade, 
            sustentabilidade e satisfação do cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border-nature-200 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-nature-500 rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="btn-outline-hero w-full group-hover:btn-hero transition-all duration-300"
                  onClick={() => window.open('https://wa.me/5511910314915?text=Olá! Gostaria de saber mais sobre os serviços de ' + service.title.toLowerCase() + '.', '_blank')}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-nature-50 border border-nature-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Precisa de um serviço personalizado?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para criar soluções sob medida para suas necessidades específicas.
            </p>
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={() => window.open('https://wa.me/5511910314915?text=Olá! Preciso de um orçamento personalizado para meus serviços.', '_blank')}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
