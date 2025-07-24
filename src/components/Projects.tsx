import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, GitBranch, Cloud, Settings, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline with GitHub Actions",
      description: "Automated deployment pipeline for web applications using GitHub Actions, featuring automated testing, security scanning, and multi-environment deployments.",
      longDescription: "Comprehensive CI/CD solution that automates the entire software delivery process from code commit to production deployment. Includes automated testing, code quality checks, security vulnerability scanning, and deployment to multiple environments with rollback capabilities.",
      icon: GitBranch,
      technologies: ["GitHub Actions", "YAML", "Docker", "Azure", "PowerShell", "Terraform"],
      features: [
        "Automated testing and code quality checks",
        "Security vulnerability scanning with automated reports",
        "Multi-environment deployment (Dev, Staging, Production)",
        "Automated rollback mechanisms for failed deployments",
        "Slack/Teams integration for deployment notifications",
        "Infrastructure provisioning with Terraform"
      ],
      metrics: {
        "Deployment Speed": "10x faster",
        "Error Reduction": "85% fewer deployment issues",
        "Automation": "100% automated pipeline"
      },
      status: "Production",
      category: "CI/CD Automation"
    },
    {
      title: "Infrastructure as Code with Terraform on Azure",
      description: "Scalable cloud infrastructure automation using Terraform for Azure resources, implementing best practices for infrastructure management and cost optimization.",
      longDescription: "Enterprise-grade infrastructure automation solution using Terraform to provision and manage Azure cloud resources. Implements infrastructure as code principles with version control, automated testing, and cost optimization strategies.",
      icon: Cloud,
      technologies: ["Terraform", "Azure", "PowerShell", "Azure CLI", "Git", "YAML"],
      features: [
        "Modular Terraform configurations for reusability",
        "Azure resource group and subscription management",
        "Automated infrastructure testing and validation",
        "Cost optimization with resource tagging and policies",
        "Multi-region deployment capabilities",
        "Infrastructure state management and backup"
      ],
      metrics: {
        "Cost Savings": "40% infrastructure cost reduction",
        "Deployment Time": "75% faster provisioning",
        "Reliability": "99.9% uptime achieved"
      },
      status: "Production",
      category: "Infrastructure Automation"
    },
    {
      title: "PowerShell Automation Framework",
      description: "Comprehensive PowerShell automation framework for system administration, configuration management, and DevOps workflows.",
      longDescription: "Enterprise PowerShell automation framework designed to streamline system administration tasks, automate configuration management, and integrate with DevOps pipelines for improved operational efficiency.",
      icon: Settings,
      technologies: ["PowerShell", "Azure PowerShell", "Git", "JSON", "XML", "REST APIs"],
      features: [
        "Modular script architecture for reusability",
        "Configuration management automation",
        "System health monitoring and reporting",
        "Active Directory and Azure AD integration",
        "Automated backup and maintenance tasks",
        "Error handling and logging mechanisms"
      ],
      metrics: {
        "Time Savings": "60% reduction in manual tasks",
        "Accuracy": "95% fewer configuration errors",
        "Coverage": "500+ automated processes"
      },
      status: "Active Development",
      category: "System Automation"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-devops-success/10 text-devops-success border-devops-success/30';
      case 'Active Development':
        return 'bg-devops-warning/10 text-devops-warning border-devops-warning/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing DevOps automation solutions and infrastructure projects that drive efficiency and reliability
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                          <project.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                            <Badge variant="secondary">{project.category}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>

                  {/* Project Content Grid */}
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Features */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Project Impact</h4>
                      <div className="space-y-3">
                        {Object.entries(project.metrics).map(([metric, value]) => (
                          <div key={metric} className="bg-muted/30 rounded-lg p-3">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground">{metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
                    <Button variant="hero" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Summary */}
        <Card className="card-gradient mt-12 p-8">
          <CardContent className="p-0 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Project <span className="text-gradient">Portfolio</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Automation Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Cloud Migrations</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Infrastructure as Code</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring & Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;