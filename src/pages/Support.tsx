import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Search,
  Send,
  Bot,
  User,
  FileText,
  Shield,
  Zap,
  HeadphonesIcon,
  Star,
  Filter,
  Calendar,
  ArrowRight,
  TrendingUp
} from "lucide-react";

const Support = () => {
  const [activeTicket, setActiveTicket] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const tickets = [
    {
      id: "TK-2024-001",
      title: "Transaction Processing Delay",
      status: "open",
      priority: "high",
      created: "2024-01-15",
      lastUpdate: "2 hours ago",
      category: "Technical"
    },
    {
      id: "TK-2024-002", 
      title: "User Authentication Issues",
      status: "in-progress",
      priority: "medium",
      created: "2024-01-14",
      lastUpdate: "1 day ago",
      category: "Security"
    },
    {
      id: "TK-2024-003",
      title: "Report Generation Error",
      status: "resolved",
      priority: "low",
      created: "2024-01-13",
      lastUpdate: "3 days ago",
      category: "Reports"
    }
  ];

  const knowledgeBase = [
    {
      title: "How to Reset Admin Password",
      category: "Authentication",
      views: 1250,
      rating: 4.8,
      lastUpdated: "2024-01-10"
    },
    {
      title: "Configuring Fraud Detection Rules",
      category: "Security", 
      views: 890,
      rating: 4.9,
      lastUpdated: "2024-01-08"
    },
    {
      title: "Generating Compliance Reports",
      category: "Reports",
      views: 650,
      rating: 4.7,
      lastUpdated: "2024-01-05"
    }
  ];

  const chatMessages = [
    { type: "bot", message: "Hello! I'm your AI assistant. How can I help you today?" },
    { type: "user", message: "I need help with transaction processing" },
    { type: "bot", message: "I can help you with that. Can you provide more details about the specific issue you're experiencing?" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Support Portal</h1>
            <p className="text-xl text-muted-foreground">Get expert help when you need it</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Available
            </Badge>
            <Button className="bg-gradient-to-r from-primary via-accent to-yellow-500">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Support
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Response Time</p>
                <p className="text-2xl font-bold text-primary">&lt; 5min</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-accent">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
                <p className="text-2xl font-bold text-accent">99.2%</p>
              </div>
              <Star className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Tickets</p>
                <p className="text-2xl font-bold text-yellow-600">12</p>
              </div>
              <FileText className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Resolved Today</p>
                <p className="text-2xl font-bold text-green-600">47</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="chat">Live Chat</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Get help fast with common tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <FileText className="w-6 h-6" />
                  Create Ticket
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Start Chat
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Phone className="w-6 h-6" />
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tickets.slice(0, 3).map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{ticket.title}</p>
                        <p className="text-sm text-muted-foreground">{ticket.id}</p>
                      </div>
                      <Badge variant={
                        ticket.status === 'resolved' ? 'default' :
                        ticket.status === 'in-progress' ? 'secondary' : 'destructive'
                      }>
                        {ticket.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {knowledgeBase.slice(0, 3).map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <div className="space-y-1">
                        <p className="font-medium">{article.title}</p>
                        <p className="text-sm text-muted-foreground">{article.views} views</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Support Tickets</h2>
              <p className="text-muted-foreground">Track and manage your support requests</p>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent">
              <FileText className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{ticket.title}</h3>
                        <p className="text-sm text-muted-foreground">{ticket.id} • Created {ticket.created}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          ticket.priority === 'high' ? 'destructive' :
                          ticket.priority === 'medium' ? 'secondary' : 'outline'
                        }>
                          {ticket.priority}
                        </Badge>
                        <Badge variant={
                          ticket.status === 'resolved' ? 'default' :
                          ticket.status === 'in-progress' ? 'secondary' : 'destructive'
                        }>
                          {ticket.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{ticket.category}</span>
                <span>Updated {ticket.lastUpdate}</span>
              </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Knowledge Base</h2>
              <p className="text-muted-foreground">Find answers to common questions</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 w-80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeBase.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {article.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{article.views} views</span>
                    <span>Updated {article.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="chat" className="space-y-6">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/ai-avatar.png" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">AI Support Assistant</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Online • Avg response time: 30s
                    </CardDescription>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <HeadphonesIcon className="w-4 h-4 mr-2" />
                  Human Agent
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>
                          {msg.type === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`max-w-sm p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground ml-auto' 
                          : 'bg-muted'
                      }`}>
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && setChatMessage('')}
                    className="flex-1"
                  />
                  <Button onClick={() => setChatMessage('')}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Multiple ways to reach our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium">Emergency Hotline</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-green-600">24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Mail className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-muted-foreground">support@bankadmin.com</p>
                    <p className="text-sm text-muted-foreground">Response within 4 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <MessageCircle className="w-8 h-8 text-yellow-600" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-muted-foreground">Instant messaging</p>
                    <p className="text-sm text-green-600">Available now</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Contact Form</CardTitle>
                <CardDescription>Send us a message and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" />
                <Input placeholder="Subject" />
                <Textarea placeholder="How can we help you?" rows={4} />
                <Button className="w-full bg-gradient-to-r from-primary to-accent">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;