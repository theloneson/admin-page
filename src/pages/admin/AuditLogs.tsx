import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, Calendar, Shield, User, Database, Settings, AlertTriangle, Eye, FileText } from "lucide-react";

const auditLogs = [
  {
    id: "ALD-001",
    timestamp: "2024-01-15 10:45:23",
    user: "john.anderson@nexusbank.com",
    action: "User Account Suspended",
    resource: "User ID: USR-4829",
    ipAddress: "192.168.1.100",
    severity: "High",
    description: "Suspended user account due to suspicious activity pattern",
    category: "User Management"
  },
  {
    id: "ALD-002",
    timestamp: "2024-01-15 10:30:15",
    user: "sarah.mitchell@nexusbank.com",
    action: "Transaction Blocked",
    resource: "Transaction ID: TXN-9847",
    ipAddress: "192.168.1.102",
    severity: "Medium",
    description: "Blocked high-risk transaction exceeding fraud threshold",
    category: "Fraud Prevention"
  },
  {
    id: "ALD-003",
    timestamp: "2024-01-15 09:15:47",
    user: "mike.rodriguez@nexusbank.com",
    action: "Risk Assessment Updated",
    resource: "User ID: USR-7362",
    ipAddress: "192.168.1.105",
    severity: "Low",
    description: "Updated user risk profile from Medium to Low",
    category: "Risk Management"
  },
  {
    id: "ALD-004",
    timestamp: "2024-01-15 08:22:31",
    user: "lisa.chen@nexusbank.com",
    action: "Security Settings Modified",
    resource: "System Configuration",
    ipAddress: "192.168.1.103",
    severity: "High",
    description: "Modified two-factor authentication requirements",
    category: "System Security"
  },
  {
    id: "ALD-005",
    timestamp: "2024-01-15 07:45:12",
    user: "john.anderson@nexusbank.com",
    action: "Database Backup Initiated",
    resource: "Production Database",
    ipAddress: "192.168.1.100",
    severity: "Low",
    description: "Manual database backup initiated for compliance requirements",
    category: "System Maintenance"
  },
  {
    id: "ALD-006",
    timestamp: "2024-01-14 23:30:44",
    user: "system@nexusbank.com",
    action: "Automated Security Scan",
    resource: "All User Accounts",
    ipAddress: "System",
    severity: "Low",
    description: "Completed automated security vulnerability scan",
    category: "Security Monitoring"
  },
  {
    id: "ALD-007",
    timestamp: "2024-01-14 18:15:29",
    user: "sarah.mitchell@nexusbank.com",
    action: "User Verification Approved",
    resource: "User ID: USR-1247",
    ipAddress: "192.168.1.102",
    severity: "Medium",
    description: "Manually approved user identity verification documents",
    category: "User Management"
  },
  {
    id: "ALD-008",
    timestamp: "2024-01-14 16:20:18",
    user: "mike.rodriguez@nexusbank.com",
    action: "Fraud Alert Investigated",
    resource: "Alert ID: FRA-5638",
    ipAddress: "192.168.1.105",
    severity: "High",
    description: "Investigated and resolved high-priority fraud alert",
    category: "Fraud Prevention"
  }
];

const getActionIcon = (category: string) => {
  switch (category) {
    case "User Management": return <User className="h-4 w-4" />;
    case "Fraud Prevention": return <Shield className="h-4 w-4" />;
    case "Risk Management": return <AlertTriangle className="h-4 w-4" />;
    case "System Security": return <Shield className="h-4 w-4" />;
    case "System Maintenance": return <Database className="h-4 w-4" />;
    case "Security Monitoring": return <Eye className="h-4 w-4" />;
    default: return <Settings className="h-4 w-4" />;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High": return "destructive";
    case "Medium": return "default";
    case "Low": return "secondary";
    default: return "secondary";
  }
};

export function AdminAuditLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || log.category === categoryFilter;
    const matchesSeverity = severityFilter === "all" || log.severity === severityFilter;
    
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Audit Logs</h1>
          <p className="text-muted-foreground mt-1">Complete administrative activity tracking and compliance monitoring</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Logs
          </Button>
        </div>
      </div>

      {/* Activity Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1,247</p>
                <p className="text-sm text-muted-foreground">Total Events Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 border-red-200 dark:border-red-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-sm text-muted-foreground">High Severity Events</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/50 dark:to-yellow-900/50 border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">89</p>
                <p className="text-sm text-muted-foreground">Security Actions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">15</p>
                <p className="text-sm text-muted-foreground">Active Admin Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Audit Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Administrative Activity Log
          </CardTitle>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs by action, user, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="User Management">User Management</SelectItem>
                <SelectItem value="Fraud Prevention">Fraud Prevention</SelectItem>
                <SelectItem value="Risk Management">Risk Management</SelectItem>
                <SelectItem value="System Security">System Security</SelectItem>
                <SelectItem value="System Maintenance">System Maintenance</SelectItem>
                <SelectItem value="Security Monitoring">Security Monitoring</SelectItem>
              </SelectContent>
            </Select>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">{log.id}</TableCell>
                  <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                  <TableCell className="text-sm">{log.user}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getActionIcon(log.category)}
                      <span className="font-medium">{log.action}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{log.resource}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {log.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getSeverityColor(log.severity)} className="text-xs">
                      {log.severity}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{log.ipAddress}</TableCell>
                  <TableCell className="max-w-xs truncate text-sm text-muted-foreground">
                    {log.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredLogs.length === 0 && (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium text-muted-foreground">No audit logs found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Compliance Footer */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Compliance & Audit Trail</h3>
              <p className="text-sm text-muted-foreground">
                All administrative actions are logged and stored for regulatory compliance. 
                Logs are retained for 7 years and are immutable once recorded.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}