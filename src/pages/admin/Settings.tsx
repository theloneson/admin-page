import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Settings, Shield, Users, Bell, Database, Key, AlertTriangle, Clock, Save, Trash2, Plus, Edit } from "lucide-react";

const adminUsers = [
  { id: 1, name: "John Anderson", email: "john.anderson@nexusbank.com", role: "Super Admin", status: "Active", lastLogin: "2024-01-15 09:30" },
  { id: 2, name: "Sarah Mitchell", email: "sarah.mitchell@nexusbank.com", role: "Admin", status: "Active", lastLogin: "2024-01-15 08:45" },
  { id: 3, name: "Mike Rodriguez", email: "mike.rodriguez@nexusbank.com", role: "Fraud Analyst", status: "Active", lastLogin: "2024-01-14 16:20" },
  { id: 4, name: "Lisa Chen", email: "lisa.chen@nexusbank.com", role: "Compliance Officer", status: "Inactive", lastLogin: "2024-01-10 14:15" },
];

const systemLogs = [
  { timestamp: "2024-01-15 10:30:00", event: "Database backup completed", severity: "Info", user: "System" },
  { timestamp: "2024-01-15 09:15:00", event: "Failed login attempt detected", severity: "Warning", user: "Unknown" },
  { timestamp: "2024-01-15 08:00:00", event: "Maintenance mode disabled", severity: "Info", user: "john.anderson" },
  { timestamp: "2024-01-14 23:30:00", event: "Automated security scan completed", severity: "Info", user: "System" },
];

export function AdminSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
          <p className="text-muted-foreground mt-1">Configure system parameters and administrative controls</p>
        </div>
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full max-w-2xl">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="users">Admin Users</TabsTrigger>
          <TabsTrigger value="notifications">Alerts</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Application Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Application Configuration
                </CardTitle>
                <CardDescription>Core application settings and parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="app-name">Application Name</Label>
                  <Input id="app-name" defaultValue="NexusBank Admin Portal" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="NexusBank Financial Services" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input id="support-email" defaultValue="admin-support@nexusbank.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* System Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  System Controls
                </CardTitle>
                <CardDescription>Critical system operation controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Temporarily disable user access</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">New User Registration</Label>
                    <p className="text-sm text-muted-foreground">Allow new account creation</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Auto-Backup</Label>
                    <p className="text-sm text-muted-foreground">Daily automated backups</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Real-time Monitoring</Label>
                    <p className="text-sm text-muted-foreground">Live system health tracking</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transaction Limits */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction Limits & Controls</CardTitle>
              <CardDescription>Configure global transaction parameters and limits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Daily Transaction Limit</Label>
                  <Input defaultValue="$50,000" />
                </div>
                <div className="space-y-2">
                  <Label>Single Transaction Limit</Label>
                  <Input defaultValue="$10,000" />
                </div>
                <div className="space-y-2">
                  <Label>Fraud Detection Threshold</Label>
                  <Input defaultValue="$5,000" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Security Policies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Security Policies
                </CardTitle>
                <CardDescription>Authentication and access control settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Require 2FA for all admin users</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">IP Whitelist</Label>
                    <p className="text-sm text-muted-foreground">Restrict access by IP address</p>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-2">
                  <Label>Password Complexity</Label>
                  <Select defaultValue="high">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (8 characters)</SelectItem>
                      <SelectItem value="medium">Medium (12 characters + symbols)</SelectItem>
                      <SelectItem value="high">High (16 characters + mixed case + symbols)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Failed Login Attempts</Label>
                  <Select defaultValue="5">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 attempts</SelectItem>
                      <SelectItem value="5">5 attempts</SelectItem>
                      <SelectItem value="10">10 attempts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* API Keys */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  API Keys & Integrations
                </CardTitle>
                <CardDescription>Manage external service integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Fraud Detection API</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter API key" type="password" />
                    <Button variant="outline" size="sm">Test</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Payment Gateway API</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter API key" type="password" />
                    <Button variant="outline" size="sm">Test</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email Service API</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter API key" type="password" />
                    <Button variant="outline" size="sm">Test</Button>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Integration
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Administrative Users
              </CardTitle>
              <CardDescription>Manage admin user accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Input placeholder="Search admin users..." className="max-w-sm" />
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Admin User
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adminUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant={user.role === 'Super Admin' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Alert Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Alert Configuration
                </CardTitle>
                <CardDescription>Configure system alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">High-Risk Transaction Alerts</Label>
                    <p className="text-sm text-muted-foreground">Immediate notification for suspicious activity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">System Health Monitoring</Label>
                    <p className="text-sm text-muted-foreground">Server performance and uptime alerts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Daily Reports</Label>
                    <p className="text-sm text-muted-foreground">Automated daily summary reports</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label>Email Recipients</Label>
                  <Textarea 
                    placeholder="Enter email addresses separated by commas..."
                    defaultValue="admin@nexusbank.com, security@nexusbank.com"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Recent System Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent System Events
                </CardTitle>
                <CardDescription>Latest system activity and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemLogs.map((log, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        log.severity === 'Warning' ? 'bg-yellow-500' : 
                        log.severity === 'Error' ? 'bg-red-500' : 'bg-green-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{log.event}</p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <span>{log.timestamp}</span>
                          <span>•</span>
                          <span>{log.user}</span>
                        </div>
                      </div>
                      <Badge variant={log.severity === 'Warning' ? 'destructive' : 'secondary'} className="text-xs">
                        {log.severity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* System Information */}
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>Current system status and configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Application Version</span>
                  <Badge>v2.1.0</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Database Version</span>
                  <Badge variant="secondary">PostgreSQL 14.2</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Last Backup</span>
                  <span className="text-sm text-muted-foreground">2024-01-15 03:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">System Uptime</span>
                  <span className="text-sm text-muted-foreground">7 days, 14 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Active Sessions</span>
                  <span className="text-sm font-medium">247</span>
                </div>
              </CardContent>
            </Card>

            {/* System Maintenance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  System Maintenance
                </CardTitle>
                <CardDescription>Database and system maintenance tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" />
                  Run Database Cleanup
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Save className="h-4 w-4 mr-2" />
                  Create Manual Backup
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Clear System Cache
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Run Security Scan
                </Button>
                <div className="pt-4 border-t">
                  <Button variant="destructive" className="w-full">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Enable Maintenance Mode
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}