import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Satyam Balajee Pvt Ltd",
      role: "DevOps Engineer",
      period: "May 2021 – Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading DevOps initiatives and infrastructure automation for enterprise applications.",
      responsibilities: [
        "Built and maintained infrastructure using Terraform for scalable cloud deployments",
        "Designed and implemented CI/CD pipelines with GitHub Actions for automated testing and deployment",
        "Developed PowerShell scripts for system automation and configuration management",
        "Managed containerized applications using Docker and basic Kubernetes orchestration",
        "Collaborated with development teams to optimize deployment processes and system reliability",
        "Monitored and maintained cloud infrastructure on Microsoft Azure platform"
      ],
      technologies: ["Terraform", "Azure", "GitHub Actions", "PowerShell", "Docker", "Kubernetes", "CI/CD", "YAML"]
    },
    {
      company: "Dish Infra Pvt Ltd",
      role: "System Engineer",
      period: "April 2018 – March 2019",
      location: "On-site",
      type: "Full-time", 
      description: "Managed system infrastructure and provided technical support for enterprise systems.",
      responsibilities: [
        "Maintained and troubleshot enterprise server infrastructure",
        "Provided technical support for system-related issues and incidents",
        "Assisted in system configurations and updates",
        "Documented system processes and procedures",
        "Collaborated with cross-functional teams for system optimization"
      ],
      technologies: ["Windows Server", "Linux", "System Administration", "Troubleshooting", "Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in DevOps and system engineering, building scalable infrastructure and automation solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Building className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                          <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline indicator */}
                    <div className="hidden lg:block">
                      <div className="w-4 h-4 bg-primary rounded-full relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-background rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience timeline line */}
                {index < experiences.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Summary */}
        <Card className="card-gradient mt-12 p-8">
          <CardContent className="p-0 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Career <span className="text-gradient">Highlights</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">Cloud</div>
                <div className="text-sm text-muted-foreground">Infrastructure Expert</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">CI/CD</div>
                <div className="text-sm text-muted-foreground">Automation Specialist</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">System Reliability</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;