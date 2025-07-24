import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
const praveenProfileUrl = '/lovable-uploads/985b5081-67d4-42f6-8e11-d76fd25162ff.png';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">Praveen Kumar</span>
                <br />
                <span className="text-foreground">Tiwari</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground">
                <span className="glow-text font-semibold">DevOps Engineer</span>
                <span className="mx-2">|</span>
                <span>Terraform</span>
                <span className="mx-2">|</span>
                <span>Azure</span>
                <span className="mx-2">|</span>
                <span>CI/CD</span>
                <span className="mx-2">|</span>
                <span>PowerShell</span>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground italic max-w-2xl">
                "Automating the future, one pipeline at a time"
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Raipur, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="gradient"
                size="xl"
                onClick={() => scrollToSection('#contact')}
                className="animate-float"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection('#about')}
              >
                Learn More
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/praveen-kumar-tiwari-a6104970/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
                asChild
              >
                <a href="mailto:praveen.bsp351@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
                asChild
              >
                <a href="tel:+918871571859">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Card className="card-gradient p-1 rounded-full">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden relative">
                <img
                  src={praveenProfileUrl}
                  alt="Praveen Kumar Tiwari"
                  className="w-full h-full object-cover animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-full"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;