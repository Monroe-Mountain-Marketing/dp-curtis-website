//Add Home page component
import React from 'react';
import { Hero } from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Palette, 
  Shield, 
  Smartphone, 
  Database, 
  Zap, 
  Layers, 
  Globe,
  TestTube,
  Wrench,
  Rocket,
  CheckCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Tech Stack Section */}
      <section id="tech-stack" className="pt-36 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modern Tech Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technologies for performance, scalability, and developer experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code2 className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle>React 18 + TypeScript</CardTitle>
                    <Badge variant="secondary">Frontend</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modern React with hooks, TypeScript for type safety, and latest features like Suspense and concurrent rendering.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-yellow-500" />
                  <div>
                    <CardTitle>Vite + Hot Reload</CardTitle>
                    <Badge variant="secondary">Build Tool</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lightning-fast development with Vite's instant hot module replacement and optimized production builds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Palette className="h-8 w-8 text-purple-500" />
                  <div>
                    <CardTitle>Tailwind + Shadcn/ui</CardTitle>
                    <Badge variant="secondary">Styling</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Utility-first CSS with beautifully designed, accessible components. Dark/light themes included.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-green-500" />
                  <div>
                    <CardTitle>Capacitor + Electron</CardTitle>
                    <Badge variant="secondary">Cross-Platform</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deploy to web, iOS, Android, and desktop from a single codebase. True cross-platform development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>API Integration</CardTitle>
                    <Badge variant="secondary">Backend</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Express server with Swagger docs, SQLite database, and GoHighLevel API integration ready to use.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TestTube className="h-8 w-8 text-red-500" />
                  <div>
                    <CardTitle>Testing & Quality</CardTitle>
                    <Badge variant="secondary">DevOps</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Vitest for testing, ESLint for code quality, and TypeScript for compile-time error catching.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UI Components Section */}
      <section id="ui-components" className="pt-36 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive UI System</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pre-built components with accessibility, animations, and responsive design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Navigation with mobile sheet menu</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Hero sections with animated backgrounds</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Card layouts with pricing components</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Forms with validation and error handling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Modal dialogs and dropdown menus</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Buttons, badges, and icons library</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Dark/light theme toggle</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-6 border">
              <h4 className="font-semibold mb-4">Component Preview</h4>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                </div>
                <div className="flex gap-2">
                  <Badge>New</Badge>
                  <Badge variant="secondary">Popular</Badge>
                  <Badge variant="outline">Featured</Badge>
                </div>
                <Card className="max-w-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Sample Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      This is how cards look with the current theme.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="pt-36 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Authentication</h3>
              <p className="text-muted-foreground">
                Complete auth flow with protected routes and user management
              </p>
            </div>
            
            <div className="text-center">
              <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p className="text-muted-foreground">
                Mobile-first design that works on all screen sizes
              </p>
            </div>
            
            <div className="text-center">
              <Layers className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">State Management</h3>
              <p className="text-muted-foreground">
                Zustand for simple, scalable state management
              </p>
            </div>
            
            <div className="text-center">
              <Wrench className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
              <p className="text-muted-foreground">
                Hot reload, TypeScript, ESLint, and debugging tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="pt-36 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Scalable Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Well-organized, maintainable codebase following modern best practices
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    • Component-based architecture
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Custom hooks for logic
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Theme provider system
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Routing with React Router
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    • Express.js server
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • SQLite database
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Swagger API docs
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Authentication middleware
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    • Vite build optimization
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Environment configs
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Git integration
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Multi-platform builds
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section id="deployment" className="pt-36 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Multi-Platform Deployment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build once, deploy everywhere with our integrated deployment pipeline
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                <CardTitle>Web</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Static site generation with Vite for fast, SEO-friendly websites
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <CardTitle>Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  iOS and Android apps using Capacitor with native performance
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code2 className="h-12 w-12 text-purple-500 mx-auto mb-2" />
                <CardTitle>Desktop</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cross-platform desktop apps with Electron for Windows, Mac, and Linux
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                <CardTitle>PWA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Progressive Web App capabilities for offline functionality
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="pt-36 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Clone this repository and start building your next modern web application today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              View on GitHub
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Read Documentation
            </Button>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto bg-background rounded-lg p-6 border">
            <h3 className="text-lg font-semibold mb-4">Quick Start</h3>
            <div className="text-left space-y-2 font-mono text-sm bg-muted rounded p-4">
              <div>git clone https://github.com/openskysolutions/react-vite-shadcn.git</div>
              <div>cd react-vite-shadcn</div>
              <div>npm install</div>
              <div>npm run dev</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;