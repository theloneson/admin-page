import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LoginDialog } from "@/components/LoginDialog";
import { 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart3, 
  Lock,
  CheckCircle,
  ArrowRight,
  Database,
  Activity,
  AlertTriangle,
  Settings
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Professional Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-nexus-blue to-nexus-yellow flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-nexus-blue to-nexus-yellow bg-clip-text text-transparent">
                  NexusBank
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  ADMINISTRATIVE PORTAL
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Platform
              </a>
              <a href="#security" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Security
              </a>
              <a href="#enterprise" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Enterprise
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="font-medium">
                Support Portal
              </Button>
              <LoginDialog>
                <Button className="bg-gradient-to-r from-nexus-blue to-nexus-yellow hover:from-nexus-blue-dark hover:to-nexus-yellow text-white font-medium">
                  Admin Login
                </Button>
              </LoginDialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nexus-blue/5 via-background to-nexus-yellow/5"></div>
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]"></div>
        
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-nexus-blue/10 text-nexus-blue border-nexus-blue/20 hover:bg-nexus-blue/20 font-medium">
                🏦 Enterprise Banking Administration
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Professional
                  <span className="block bg-gradient-to-r from-nexus-blue to-nexus-yellow bg-clip-text text-transparent">
                    Banking Control
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Advanced administrative platform designed for banking professionals. 
                  Manage transactions, monitor activities, and maintain security with 
                  enterprise-grade tools.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <LoginDialog>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-nexus-blue to-nexus-yellow hover:from-nexus-blue-dark hover:to-nexus-yellow text-white font-medium h-12 px-8"
                  >
                    Access Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </LoginDialog>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-12 px-8 border-nexus-blue/30 text-nexus-blue hover:bg-nexus-blue/5"
                  onClick={() => window.location.href = '/support'}
                >
                  Support Portal
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-nexus-blue/10 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-nexus-blue" />
                  </div>
                  <span className="text-foreground font-medium">Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-nexus-yellow/10 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-nexus-yellow" />
                  </div>
                  <span className="text-foreground font-medium">Real-Time Processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-nexus-blue/10 flex items-center justify-center">
                    <Lock className="h-4 w-4 text-nexus-blue" />
                  </div>
                  <span className="text-foreground font-medium">Compliance Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-nexus-yellow/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-nexus-yellow" />
                  </div>
                  <span className="text-foreground font-medium">99.9% Uptime</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-nexus-blue/20 to-nexus-yellow/20 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-card/80 backdrop-blur-xl border-border/50 shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-muted-foreground text-sm font-medium">NEXUSBANK</div>
                      <div className="text-foreground font-bold text-2xl">Admin Dashboard</div>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-nexus-blue to-nexus-yellow flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-nexus-blue/5 rounded-lg p-4">
                      <div className="text-nexus-blue text-sm font-medium">Active Users</div>
                      <div className="text-foreground font-bold text-xl">847,230</div>
                    </div>
                    <div className="bg-nexus-yellow/5 rounded-lg p-4">
                      <div className="text-nexus-yellow text-sm font-medium">Daily Volume</div>
                      <div className="text-foreground font-bold text-xl">$12.4M</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground text-sm">Security Status</span>
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                        Secure
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground text-sm">System Health</span>
                      <Badge className="bg-nexus-blue/10 text-nexus-blue border-nexus-blue/20">
                        Optimal
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground text-sm">Compliance</span>
                      <Badge className="bg-nexus-yellow/10 text-nexus-yellow border-nexus-yellow/20">
                        Verified
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-nexus-yellow/10 text-nexus-yellow border-nexus-yellow/20" variant="secondary">
              Enterprise Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Complete Banking <span className="text-nexus-blue">Administration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools for modern banking operations, designed by professionals for professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">User Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced user administration with role-based access, verification workflows, 
                  and comprehensive user analytics for complete oversight.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Transaction Control</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time transaction monitoring with instant approval/blocking capabilities, 
                  fraud detection, and comprehensive transaction analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Fraud Detection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI-powered fraud detection with customizable rules, instant alerts, 
                  and automated response systems for enhanced security.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Advanced Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive analytics dashboard with real-time insights, 
                  performance metrics, and detailed reporting for data-driven decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Audit Trails</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete audit logging with detailed tracking of all administrative actions, 
                  compliance reporting, and forensic analysis capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">System Configuration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Centralized system configuration with role-based access controls, 
                  security policies, and system-wide settings management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-nexus-blue/10 text-nexus-blue border-nexus-blue/20">
              Bank-Grade Security
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Uncompromising <span className="text-nexus-blue">Security</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security architecture designed to protect sensitive financial data 
              and meet the most stringent regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">End-to-End Encryption</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Military-grade AES-256 encryption for all data in transit and at rest, 
                  ensuring complete protection of sensitive banking information.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Multi-Factor Authentication</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced MFA with biometric verification, hardware tokens, and 
                  adaptive authentication based on risk assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Real-Time Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  24/7 security monitoring with AI-powered threat detection and 
                  automated incident response capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Compliance Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full compliance with PCI DSS, SOX, GDPR, and banking regulations 
                  with automated compliance reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Secure Data Centers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tier IV data centers with biometric access, 24/7 security, 
                  and geographically distributed backup systems.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-nexus-blue/30 bg-card/80">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Incident Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rapid incident response team with forensics capabilities and 
                  automated containment procedures for security breaches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="enterprise" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-nexus-yellow/10 text-nexus-yellow border-nexus-yellow/20">
              Enterprise Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Enterprise-Grade <span className="text-nexus-yellow">Banking Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scalable banking infrastructure designed for large financial institutions 
              with advanced customization and integration capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-nexus-blue to-nexus-yellow flex items-center justify-center flex-shrink-0">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Custom Configuration</h3>
                  <p className="text-muted-foreground">
                    Tailor the platform to your institution's specific needs with extensive 
                    customization options and white-label solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-nexus-blue to-nexus-yellow flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Seamless Integration</h3>
                  <p className="text-muted-foreground">
                    Connect with existing banking systems through our comprehensive API suite 
                    and pre-built integrations with major financial platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-nexus-blue to-nexus-yellow flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Scalable Architecture</h3>
                  <p className="text-muted-foreground">
                    Built on microservices architecture to handle millions of transactions 
                    with auto-scaling capabilities and load balancing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-nexus-blue to-nexus-yellow flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">24/7 Enterprise Support</h3>
                  <p className="text-muted-foreground">
                    Dedicated support team with SLA guarantees, priority response times, 
                    and on-site technical assistance when needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-nexus-blue/10 to-nexus-yellow/10 rounded-2xl blur-2xl"></div>
              <Card className="relative bg-card/90 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <div className="text-nexus-blue text-sm font-medium mb-2">ENTERPRISE METRICS</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-nexus-blue/5 rounded-lg">
                      <div className="text-2xl font-bold text-nexus-blue mb-1">500+</div>
                      <div className="text-xs text-muted-foreground">Financial Institutions</div>
                    </div>
                    <div className="text-center p-4 bg-nexus-yellow/5 rounded-lg">
                      <div className="text-2xl font-bold text-nexus-yellow mb-1">99.99%</div>
                      <div className="text-xs text-muted-foreground">Uptime SLA</div>
                    </div>
                    <div className="text-center p-4 bg-nexus-blue/5 rounded-lg">
                      <div className="text-2xl font-bold text-nexus-blue mb-1">50M+</div>
                      <div className="text-xs text-muted-foreground">Daily Transactions</div>
                    </div>
                    <div className="text-center p-4 bg-nexus-yellow/5 rounded-lg">
                      <div className="text-2xl font-bold text-nexus-yellow mb-1">&lt;100ms</div>
                      <div className="text-xs text-muted-foreground">Response Time</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/30">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Enterprise Ready</span>
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                        ✓ Certified
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <LoginDialog>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-nexus-blue to-nexus-yellow hover:from-nexus-blue-dark hover:to-nexus-yellow text-white font-medium h-12 px-8"
              >
                Request Enterprise Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </LoginDialog>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-nexus-blue/10 text-nexus-blue border-nexus-blue/20">
            Enterprise Trust
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            Trusted by Banking <span className="text-nexus-yellow">Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
            Built to meet the highest standards of banking security and compliance, 
            trusted by financial institutions worldwide.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-nexus-blue mb-2">99.9%</div>
              <div className="text-muted-foreground font-medium">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nexus-yellow mb-2">$2.4B+</div>
              <div className="text-muted-foreground font-medium">Transactions Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-nexus-blue mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Banking Partners</div>
            </div>
          </div>

          <LoginDialog>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-nexus-blue to-nexus-yellow hover:from-nexus-blue-dark hover:to-nexus-yellow text-white font-medium h-12 px-8"
            >
              Access Admin Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </LoginDialog>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-nexus-blue to-nexus-yellow flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-nexus-blue to-nexus-yellow bg-clip-text text-transparent">
                  NexusBank
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Professional banking administration platform designed for 
                enterprise-level financial institutions and their administrators.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-foreground">Platform</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Admin Dashboard</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Analytics Suite</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Security Center</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Compliance Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-foreground">Enterprise</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Support Portal</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Training Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-foreground">Compliance</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Security Standards</a></li>
                <li><a href="#" className="hover:text-nexus-blue transition-colors">Audit Reports</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              &copy; 2024 NexusBank Administrative Platform. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Badge className="bg-nexus-blue/10 text-nexus-blue border-nexus-blue/20">
                SOC 2 Compliant
              </Badge>
              <Badge className="bg-nexus-yellow/10 text-nexus-yellow border-nexus-yellow/20">
                ISO 27001 Certified
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;