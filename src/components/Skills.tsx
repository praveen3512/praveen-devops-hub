import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Settings, 
  Terminal, 
  GitBranch, 
  Container, 
  Server,
  Code,
  FileText,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: [
        { name: "Microsoft Azure", level: 90, icon: Cloud },
        { name: "Terraform", level: 85, icon: Settings },
        { name: "Linux", level: 80, icon: Terminal },
      ]
    },
    {
      title: "CI/CD & Version Control", 
      icon: GitBranch,
      skills: [
        { name: "GitHub Actions", level: 88, icon: GitBranch },
        { name: "CI/CD Pipelines", level: 85, icon: Settings },
        { name: "GitHub", level: 90, icon: GitBranch },
      ]
    },
    {
      title: "Scripting & Automation",
      icon: Code,
      skills: [
        { name: "PowerShell", level: 88, icon: Terminal },
        { name: "Bash", level: 75, icon: Terminal },
        { name: "YAML", level: 85, icon: FileText },
      ]
    },
    {
      title: "Containerization",
      icon: Container,
      skills: [
        { name: "Docker", level: 80, icon: Container },
        { name: "Kubernetes", level: 65, icon: Layers },
      ]
    }
  ];

  const certifications = [
    "Azure Fundamentals (AZ-900)",
    "Terraform Associate", 
    "DevOps Foundation",
    "PowerShell Scripting"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern DevOps practices, cloud infrastructure, and automation technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-devops-primary to-devops-secondary h-2 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Interests */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="card-gradient p-6">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-devops-success/10 rounded-lg flex items-center justify-center">
                  <Badge className="w-6 h-6 text-devops-success" />
                </div>
                <h3 className="text-xl font-semibold">Certifications & Learning</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-devops-success rounded-full"></div>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills & Interests */}
          <Card className="card-gradient p-6">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-devops-accent/10 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-devops-accent" />
                </div>
                <h3 className="text-xl font-semibold">Soft Skills & Interests</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary mb-2">Professional Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Problem-solving", "Team Collaboration", "Communication", "Leadership", "Agile Methodology"].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Cloud Architecture", "Automation", "Open Source", "Continuous Learning", "Tech Innovation"].map((interest) => (
                      <Badge key={interest} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;