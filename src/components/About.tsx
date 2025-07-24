import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, Target } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      label: "Years Experience",
      value: "4+",
      description: "Professional DevOps"
    },
    {
      icon: Target,
      label: "Automation Focus",
      value: "100%",
      description: "Pipeline Efficiency"
    },
    {
      icon: Award,
      label: "Cloud Expertise",
      value: "Azure",
      description: "Certified Solutions"
    },
    {
      icon: Users,
      label: "Team Success",
      value: "24/7",
      description: "System Reliability"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about automation, cloud infrastructure, and continuous improvement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="card-gradient p-8">
              <CardContent className="p-0">
                <blockquote className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 italic">
                  "DevOps Engineer with 4 years of experience in automation, cloud, CI/CD, 
                  Kubernetes, and Infrastructure as Code tools like Terraform. Passionate about 
                  bridging development and operations with efficient workflows and creating 
                  scalable, reliable systems that drive business success."
                </blockquote>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Infrastructure as Code (Terraform)",
                  "Cloud Architecture (Microsoft Azure)",
                  "CI/CD Pipeline Automation",
                  "Container Orchestration",
                  "PowerShell Scripting",
                  "System Administration"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-gradient text-center p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-gradient">Education</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-gradient p-6">
              <CardContent className="p-0">
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-primary">MTech in Production Engineering</h4>
                  <p className="text-muted-foreground">Dr. C.V. Raman University</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">74.2%</Badge>
                    <span className="text-sm text-muted-foreground">Completed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient p-6">
              <CardContent className="p-0">
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-primary">BE in Mechanical Engineering</h4>
                  <p className="text-muted-foreground">Govt Engineering College</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">66.2%</Badge>
                    <span className="text-sm text-muted-foreground">Completed</span>
                  </div>
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