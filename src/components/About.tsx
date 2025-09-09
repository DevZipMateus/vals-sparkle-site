
import React from 'react';
import { Target, Eye, Heart, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Amor pelo que fazemos",
      description: "Realizamos tudo com amor e dedicação"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Foco no cliente",
      description: "Suas necessidades são nossa prioridade"
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Qualidade garantida",
      description: "Excelência em todos os serviços realizados"
    },
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      title: "Responsabilidade",
      description: "Compromisso com clientes e meio ambiente"
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-20 bg-gradient-to-br from-nature-50 to-white">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Content */}
          <div className="space-responsive-lg animate-fade-in">
            <div>
              <h2 className="text-responsive-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                <span className="gradient-text">Nossa História</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-nature-600 to-nature-400 rounded-full mb-4 sm:mb-6 mx-auto lg:mx-0"></div>
            </div>

            <div className="space-responsive-sm text-muted-foreground leading-relaxed text-center lg:text-left">
              <p className="text-responsive-base">
                Localizada na cidade de <strong className="text-foreground">Sorocaba - SP</strong>, a Val's Limpeza e Paisagismo é uma empresa especializada em terceirização de mão de obra.
              </p>
              
              <p className="text-responsive-sm">
                Nossa liderança estratégica possui <strong className="text-primary">mais de 20 anos de experiência</strong> no ramo industrial e varejo, uma excelente vivência que permite conhecer e identificar as diversas necessidades de nossos clientes e atendê-los da melhor forma possível.
              </p>
              
              <p className="text-responsive-sm">
                Nosso foco está na <strong className="text-foreground">qualidade e excelência</strong> dos serviços executados, sempre mantendo nossa essência: <em>"Limpeza profissional com toque pessoal, cultivando o melhor!"</em>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-nature-200">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-foreground">20+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-nature-200">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="space-responsive-lg animate-slide-in">
            {/* Mission */}
            <Card className="border-nature-200 card-hover">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-nature-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">Nossa Missão</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Oferecer serviços de extrema qualidade, mantendo uma postura profissional, 
                      garantindo ótima relação custo-benefício e um atendimento eficiente e gentil.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-nature-200 card-hover">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-nature-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">Nossa Visão</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Ser reconhecida como uma empresa tradicional e confiável, que preza pela 
                      qualidade dos serviços e tem uma identidade respeitável e sólida.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-nature-200 card-hover">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Nossos Valores</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="text-center p-2 sm:p-3 bg-nature-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {value.icon}
                      </div>
                      <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-1">{value.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
