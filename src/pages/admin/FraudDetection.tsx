import { useState } from "react";
import { Shield, AlertTriangle, Eye, Ban, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Sample fraud detection data
const suspiciousActivities = [
  {
    id: "FRD001",
    user: "John Doe",
    userId: "USR005",
    activity: "Multiple failed login attempts",
    riskLevel: "high",
    amount: 0,
    timestamp: "2024-12-20 15:30:00",
    status: "flagged"
  },
  {
    id: "FRD002", 
    user: "Jane Smith",
    userId: "USR006",
    activity: "Large withdrawal - $5000",
    riskLevel: "medium",
    amount: 5000,
    timestamp: "2024-12-20 14:15:00", 
    status: "reviewing"
  },
  {
    id: "FRD003",
    user: "Mike Johnson", 
    userId: "USR007",
    activity: "Unusual transfer pattern",
    riskLevel: "high",
    amount: 2500,
    timestamp: "2024-12-20 13:45:00",
    status: "flagged"
  },
  {
    id: "FRD004",
    user: "Sarah Wilson",
    userId: "USR008", 
    activity: "Off-hours transaction",
    riskLevel: "low",
    amount: 300,
    timestamp: "2024-12-20 02:30:00",
    status: "resolved"
  }
];

const frozenAccounts = [
  {
    userId: "USR009",
    name: "Robert Brown",
    reason: "Suspected money laundering", 
    frozenDate: "2024-12-19",
    amount: 15000
  },
  {
    userId: "USR010",
    name: "Lisa Davis",
    reason: "Identity verification failed",
    frozenDate: "2024-12-18", 
    amount: 750
  }
];

export default function FraudDetection() {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);

  const getRiskBadge = (level: string) => {
    const variants = {
      high: "bg-destructive text-destructive-foreground",
      medium: "bg-warning text-warning-foreground",
      low: "bg-blue-500 text-white"
    };
    return variants[level as keyof typeof variants] || "bg-muted text-muted-foreground";
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      flagged: "bg-destructive text-destructive-foreground",
      reviewing: "bg-warning text-warning-foreground", 
      resolved: "bg-success text-success-foreground"
    };
    return variants[status as keyof typeof variants] || "bg-muted text-muted-foreground";
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "high": return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "medium": return <Clock className="h-4 w-4 text-warning" />;
      case "low": return <CheckCircle className="h-4 w-4 text-success" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Fraud Detection Center</h2>
        <p className="text-muted-foreground">Monitor and manage security threats and suspicious activities</p>
      </div>

      {/* Alert Banner */}
      <Alert className="border-destructive bg-destructive/10">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <AlertDescription className="text-destructive">
          <strong>3 high-risk alerts</strong> require immediate attention. Review flagged activities below.
        </AlertDescription>
      </Alert>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard
          title="Active Alerts"
          value="7"
          change="+2 from yesterday"
          changeType="negative"
          icon={AlertTriangle}
        />
        <MetricCard
          title="Frozen Accounts" 
          value="2"
          change="No change"
          changeType="neutral"
          icon={Ban}
        />
        <MetricCard
          title="Resolved Today"
          value="12"
          change="+4 from yesterday" 
          changeType="positive"
          icon={CheckCircle}
        />
        <MetricCard
          title="Risk Score"
          value="Medium"
          change="Stable"
          changeType="neutral"
          icon={Shield}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Suspicious Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Suspicious Activities
            </CardTitle>
            <CardDescription>
              Recent flagged activities requiring review and action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Alert ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suspiciousActivities.map((activity) => (
                  <TableRow 
                    key={activity.id}
                    className={selectedAlert === activity.id ? "bg-muted/50" : ""}
                  >
                    <TableCell className="font-mono text-sm">
                      {activity.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{activity.user}</div>
                        <div className="text-sm text-muted-foreground">{activity.userId}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-48">
                        <div className="text-sm">{activity.activity}</div>
                        {activity.amount > 0 && (
                          <div className="text-xs text-muted-foreground">
                            Amount: ${activity.amount.toLocaleString()}
                          </div>
                        )}
                        <div className="text-xs text-muted-foreground">
                          {new Date(activity.timestamp).toLocaleString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getRiskIcon(activity.riskLevel)}
                        <Badge className={getRiskBadge(activity.riskLevel)}>
                          {activity.riskLevel}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(activity.status)}>
                        {activity.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        {activity.status === "flagged" && (
                          <Button size="sm" variant="outline" className="text-destructive">
                            <Ban className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Frozen Accounts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ban className="h-5 w-5 text-destructive" />
              Frozen Accounts
            </CardTitle>
            <CardDescription>
              Accounts currently under security hold
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {frozenAccounts.map((account) => (
              <div key={account.userId} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{account.name}</h4>
                    <p className="text-sm text-muted-foreground">{account.userId}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Frozen: {account.frozenDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-destructive">${account.amount.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">{account.reason}</p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                  <Button size="sm" variant="outline" className="text-success">
                    Unfreeze
                  </Button>
                </div>
              </div>
            ))}
            
            {frozenAccounts.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Ban className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No frozen accounts at this time</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary-hover">
              <Shield className="mr-2 h-4 w-4" />
              Generate Security Report
            </Button>
            <Button variant="outline">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Configure Alert Rules
            </Button>
            <Button variant="outline">
              <CheckCircle className="mr-2 h-4 w-4" />
              Bulk Resolve
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}