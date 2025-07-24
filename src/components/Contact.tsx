import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hello Praveen,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:praveen.bsp351@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "praveen.bsp351@gmail.com",
      link: "mailto:praveen.bsp351@gmail.com",
      description: "Drop me an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8871571859",
      link: "tel:+918871571859",
      description: "Call for immediate response"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Praveen Kumar Tiwari",
      link: "https://www.linkedin.com/in/praveen-kumar-tiwari-a6104970/",
      description: "Let's connect professionally"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Raipur, India",
      link: "#",
      description: "Available for remote work"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next DevOps project? I'd love to hear about your infrastructure challenges and automation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Let's <span className="text-gradient">Collaborate</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need help with cloud infrastructure, CI/CD pipelines, automation, or system optimization, 
                I'm here to help bring your DevOps vision to life. Let's discuss how we can improve your development 
                and deployment workflows.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-gradient group cursor-pointer">
                  <CardContent className="p-6">
                    <a 
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group-hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{contact.label}</h4>
                        <p className="text-primary font-medium">{contact.value}</p>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Actions</h4>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="gradient"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href="mailto:praveen.bsp351@gmail.com">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
                
                <Button
                  variant="hero"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/praveen-kumar-tiwari-a6104970/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href="tel:+918871571859">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={5}
                      required
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Typically respond within 24 hours • All inquiries are welcome
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Praveen Kumar Tiwari. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            DevOps Engineer • Terraform • Azure • CI/CD • PowerShell
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;