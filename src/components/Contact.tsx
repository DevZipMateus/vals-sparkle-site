
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const whatsappMessage = `Olá! Meu nome é ${formData.name}.
      
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço de interesse: ${formData.service}

Mensagem: ${formData.message}`;

      const whatsappUrl = `https://wa.me/5511910314915?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Mensagem enviada!",
        description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
      });
      
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Telefone",
      content: "(11) 91031-4915",
      link: "tel:+5511910314915"
    },
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Email",
      content: "val.slimpeza@gmail.com",
      link: "mailto:val.slimpeza@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Endereço",
      content: "Rua Gentile Gioachino, 178\nVila Nova Sorocaba - Sorocaba\nCEP: 18070-825",
      link: "https://maps.google.com/maps?q=Rua+Gentile+Gioachino,+178,+Vila+Nova+Sorocaba,+Sorocaba"
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Horário",
      content: "Segunda a Sexta\n8h às 18h",
      link: null
    }
  ];

  return (
    <section id="contato" className="py-12 sm:py-20 bg-white">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-responsive-3xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Estamos prontos para atender suas necessidades. Solicite seu orçamento sem compromisso 
            e descubra como podemos ajudar você.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-responsive-sm animate-slide-in order-2 lg:order-1">
            <Card className="border-nature-200">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-2xl font-bold text-foreground">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-responsive-sm p-4 sm:p-6 pt-0">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-nature-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-xs sm:text-sm break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line text-xs sm:text-sm">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-nature-200">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h4>
                <div className="space-y-3">
                  <a 
                    href="https://www.instagram.com/valslimpezaepaisagismo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm font-bold">IG</span>
                    </div>
                    <span className="text-xs sm:text-sm truncate">@valslimpezaepaisagismo</span>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/share/1Cr8oGtCtv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm font-bold">FB</span>
                    </div>
                    <span className="text-xs sm:text-sm">Val's Limpeza</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in order-1 lg:order-2">
            <Card className="border-nature-200">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-2xl font-bold text-foreground">
                  Solicite seu Orçamento
                </CardTitle>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Preencha o formulário abaixo e entraremos em contato rapidamente.
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-responsive-sm">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="border-nature-200 focus:border-primary text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="border-nature-200 focus:border-primary text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="border-nature-200 focus:border-primary text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-nature-200 rounded-md focus:outline-none focus:border-primary bg-background text-sm"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="limpeza-conservacao">Limpeza e Conservação</option>
                        <option value="tratamento-piso">Tratamento de Piso</option>
                        <option value="jardinagem-paisagismo">Jardinagem e Paisagismo</option>
                        <option value="servicos-especializados">Serviços Especializados</option>
                        <option value="multiplos-servicos">Múltiplos Serviços</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva suas necessidades, local do serviço, frequência desejada, etc."
                      className="border-nature-200 focus:border-primary resize-none text-sm"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-hero group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="bg-gradient-to-r from-nature-50 to-nature-100 border-nature-200 max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
                Prefere falar direto conosco?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4 sm:px-0">
                Entre em contato agora mesmo pelo WhatsApp e receba atendimento imediato.
              </p>
              <Button 
                size="lg" 
                className="btn-hero group w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5511910314915?text=Olá! Gostaria de falar sobre os serviços da Val\'s.', '_blank')}
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Direto
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
