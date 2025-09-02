import { 
  Users, 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  AlertTriangle,
  Shield,
  Clock,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from "lucide-react";
import { ProfessionalMetricCard } from "@/components/ProfessionalMetricCard";
import { ProfessionalDataTable } from "@/components/ProfessionalDataTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

// Enhanced sample data
const transactionVolumeData = [
  { time: "00:00", transactions: 45, amount: 125000 },
  { time: "04:00", transactions: 32, amount: 89000 },
  { time: "08:00", transactions: 189, amount: 456000 },
  { time: "12:00", transactions: 267, amount: 678000 },
  { time: "16:00", transactions: 234, amount: 589000 },
  { time: "20:00", transactions: 156, amount: 345000 },
];

const revenueData = [
  { category: "Retail Banking", amount: 2840000, percentage: 45 },
  { category: "Corporate Banking", amount: 1892000, percentage: 30 },
  { category: "Investment Services", amount: 946000, percentage: 15 },
  { category: "Digital Services", amount: 632000, percentage: 10 },
];

const riskAlerts = [
  {
    id: "ALT-001",
    type: "High Risk Transaction",
    description: "Large wire transfer to sanctioned country",
    severity: "critical",
    time: "2 min ago",
    amount: "$45,000"
  },
  {
    id: "ALT-002", 
    type: "Unusual Activity",
    description: "Account access from 15+ different locations",
    severity: "high",
    time: "15 min ago",
    user: "john.doe@email.com"
  },
  {
    id: "ALT-003",
    type: "Compliance Alert",
    description: "Missing KYC documentation for corporate account",
    severity: "medium",
    time: "1 hour ago",
    account: "ACC-7892"
  }
];

const recentTransactions = [
  {
    id: "TXN-45821",
    user: "Sarah Johnson",
    type: "Wire Transfer",
    amount: 25000,
    status: "completed",
    time: "2 min ago",
    risk: "low"
  },
  {
    id: "TXN-45820",
    user: "Mike Chen",
    type: "ACH Transfer", 
    amount: 1250,
    status: "pending",
    time: "5 min ago",
    risk: "low"
  },
  {
    id: "TXN-45819",
    user: "Corporate LLC",
    type: "International Wire",
    amount: 75000,
    status: "under_review",
    time: "12 min ago",
    risk: "high"
  }
];

const transactionColumns = [
  { key: "id", label: "Transaction ID", width: "140px" },
  { key: "user", label: "User", width: "200px" },
  { key: "type", label: "Type", width: "150px" },
  { key: "amount", label: "Amount", width: "120px", align: "right" as const },
  { key: "status", label: "Status", width: "120px" },
  { key: "risk", label: "Risk", width: "100px" },
  { key: "time", label: "Time", width: "120px" }
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Critical Alerts Banner */}
      <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/20">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <CardTitle className="text-lg text-red-800 dark:text-red-200">Critical Alerts</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-700 dark:text-red-300">
            3 high-priority alerts require immediate attention. 
            <Button variant="link" className="p-0 ml-2 text-red-600 hover:text-red-800">
              View All Alerts →
            </Button>
          </p>
        </CardContent>
      </Card>

      {/* Executive Summary Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProfessionalMetricCard
          title="Total Assets"
          value="$847.2M"
          change="+12.5% YoY"
          changeType="positive"
          trend="up"
          subtitle="Under Management"
          icon={DollarSign}
        />
        <ProfessionalMetricCard
          title="Active Accounts"
          value="28,647"
          change="+8.2% this month"
          changeType="positive"
          trend="up"
          subtitle="Verified Users"
          icon={Users}
        />
        <ProfessionalMetricCard
          title="Transaction Volume"
          value="$12.4M"
          change="+15.7% today"
          changeType="positive"
          trend="up"
          subtitle="Daily Processing"
          icon={Activity}
        />
        <ProfessionalMetricCard
          title="Risk Score"
          value="2.3"
          change="-0.8 this week"
          changeType="positive"
          trend="down"
          subtitle="Low Risk Profile"
          icon={Shield}
        />
      </div>

      {/* Real-time Monitoring */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Transaction Flow */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Real-time Transaction Flow</CardTitle>
                <CardDescription>Live transaction volume and amounts over 24 hours</CardDescription>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={transactionVolumeData}>
                <defs>
                  <linearGradient id="transactionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="time" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="transactions"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fill="url(#transactionGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Risk Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Risk Alerts
            </CardTitle>
            <CardDescription>Critical items requiring attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {riskAlerts.map((alert) => (
              <div key={alert.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant={alert.severity === 'critical' ? 'destructive' : 
                            alert.severity === 'high' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {alert.severity.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{alert.type}</h4>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                {alert.amount && (
                  <p className="text-sm font-mono font-semibold mt-1 text-red-600">
                    {alert.amount}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Revenue Analytics */}
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-xl">Revenue by Business Line</CardTitle>
            <CardDescription>Quarterly revenue breakdown and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="category" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip
                  formatter={(value: number) => [`$${(value / 1000000).toFixed(2)}M`, 'Revenue']}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="amount" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Performance KPIs</CardTitle>
            <CardDescription>Key operational metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Processing Speed</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">1.2s</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">System Uptime</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">99.9%</span>
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.9%' }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Fraud Detection</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">98.7%</span>
                  <Shield className="h-4 w-4 text-blue-500" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '98.7%' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <ProfessionalDataTable
        title="Recent High-Value Transactions"
        description="Latest transactions requiring review or monitoring"
        columns={transactionColumns}
        data={recentTransactions}
        actions={
          <Button variant="outline" size="sm">
            View All Transactions
          </Button>
        }
        renderCell={(key, value, row) => {
          if (key === 'risk') {
            return (
              <Badge 
                variant={value === 'high' ? 'destructive' : value === 'medium' ? 'secondary' : 'outline'}
                className="text-xs"
              >
                {value.toUpperCase()}
              </Badge>
            );
          }
          if (key === 'status') {
            return (
              <Badge
                variant={value === 'completed' ? 'default' : 
                        value === 'pending' ? 'secondary' : 'destructive'}
                className="text-xs"
              >
                {value.replace('_', ' ').toUpperCase()}
              </Badge>
            );
          }
        }}
      />
    </div>
  );
}