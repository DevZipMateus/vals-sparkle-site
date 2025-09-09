import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const ImageCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  // Lista das imagens da pasta public/lovable-uploads/imagens/
  const images = [
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.18_f677cf26.jpg',
      alt: 'Serviços de limpeza profissional Val\'s'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.19_1a21ad45.jpg',
      alt: 'Serviços de limpeza e paisagismo'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.19_20f51281.jpg',
      alt: 'Equipe profissional de limpeza'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.19_b756959c.jpg',
      alt: 'Tratamento de pisos especializado'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.19_eaec2be7.jpg',
      alt: 'Serviços de jardinagem e paisagismo'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.20_118df18e.jpg',
      alt: 'Limpeza residencial e comercial'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.20_2b82a995.jpg',
      alt: 'Conservação e manutenção'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.20_9588bc4d.jpg',
      alt: 'Serviços especializados de limpeza'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.20_fcc44bed.jpg',
      alt: 'Cuidados com jardins e áreas verdes'
    },
    {
      src: '/lovable-uploads/imagens/Imagem%20do%20WhatsApp%20de%202025-09-08%20à(s)%2017.01.21_4cd454aa.jpg',
      alt: 'Resultados profissionais garantidos'
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container-responsive">
        <div className="text-center space-responsive-md mb-8 sm:mb-12">
          <h2 className="text-responsive-2xl font-bold text-foreground">
            Nossos Trabalhos
          </h2>
          <p className="text-responsive-base text-muted-foreground max-w-3xl mx-auto">
            Veja alguns dos nossos serviços realizados com qualidade e dedicação
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-nature">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-nature-200 text-nature-700 hover:text-nature-800" />
            <CarouselNext className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-nature-200 text-nature-700 hover:text-nature-800" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-muted transition-colors duration-200 hover:bg-nature-500"
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;