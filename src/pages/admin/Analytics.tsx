import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, TrendingDown, Users, DollarSign, Calendar, Download, AlertTriangle } from "lucide-react";
import { ProfessionalMetricCard } from "@/components/ProfessionalMetricCard";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: 'Jan', revenue: 45000, transactions: 1200, users: 850 },
  { month: 'Feb', revenue: 52000, transactions: 1350, users: 920 },
  { month: 'Mar', revenue: 48000, transactions: 1280, users: 890 },
  { month: 'Apr', revenue: 61000, transactions: 1520, users: 1040 },
  { month: 'May', revenue: 58000, transactions: 1480, users: 980 },
  { month: 'Jun', revenue: 67000, transactions: 1650, users: 1120 },
];

const transactionTypes = [
  { name: 'Deposits', value: 45, color: '#0066CC' },
  { name: 'Withdrawals', value: 30, color: '#FFB800' },
  { name: 'Transfers', value: 20, color: '#00AA44' },
  { name: 'Fees', value: 5, color: '#FF4444' },
];

const riskMetrics = [
  { category: 'High Risk', count: 23, trend: 'up', color: '#FF4444' },
  { category: 'Medium Risk', count: 127, trend: 'down', color: '#FFB800' },
  { category: 'Low Risk', count: 890, trend: 'up', color: '#00AA44' },
];

export function AdminAnalytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Reporting</h1>
          <p className="text-muted-foreground mt-1">Comprehensive business intelligence and performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="12months">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProfessionalMetricCard
          title="Total Revenue"
          value="$1,247,390"
          change="+12.5%"
          changeType="positive"
          icon={DollarSign}
          trend="up"
          subtitle="vs last month"
        />
        <ProfessionalMetricCard
          title="Active Users"
          value="24,847"
          change="+8.2%"
          changeType="positive"
          icon={Users}
          trend="up"
          subtitle="Monthly active"
        />
        <ProfessionalMetricCard
          title="Transaction Volume"
          value="89,432"
          change="-3.1%"
          changeType="negative"
          icon={BarChart3}
          trend="down"
          subtitle="This month"
        />
        <ProfessionalMetricCard
          title="Risk Score"
          value="2.3%"
          change="+0.8%"
          changeType="negative"
          icon={AlertTriangle}
          trend="up"
          subtitle="High risk rate"
        />
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="risk">Risk</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Trend */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Revenue Trend
                </CardTitle>
                <CardDescription>Monthly revenue performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                    <Line type="monotone" dataKey="revenue" stroke="#0066CC" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Transaction Distribution */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Transaction Distribution
                </CardTitle>
                <CardDescription>Breakdown by transaction type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={transactionTypes}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {transactionTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Risk Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Risk Analysis Dashboard
              </CardTitle>
              <CardDescription>Real-time risk monitoring and categorization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {riskMetrics.map((metric, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{metric.category}</h4>
                      {metric.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-red-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <div className="text-2xl font-bold mb-1" style={{ color: metric.color }}>
                      {metric.count}
                    </div>
                    <div className="text-xs text-muted-foreground">accounts flagged</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Revenue Analysis</CardTitle>
              <CardDescription>Comprehensive revenue breakdown and forecasting</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#0066CC" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Growth Analytics</CardTitle>
              <CardDescription>User acquisition and retention metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#FFB800" strokeWidth={3} name="Active Users" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Risk Trend Analysis</CardTitle>
                <CardDescription>Historical risk pattern tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="transactions" stroke="#FF4444" strokeWidth={2} name="Risk Events" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Mitigation Actions</CardTitle>
                <CardDescription>Automated and manual interventions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <span className="font-medium">Accounts Frozen</span>
                    <span className="text-xl font-bold text-red-500">47</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <span className="font-medium">Transactions Blocked</span>
                    <span className="text-xl font-bold text-yellow-500">238</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <span className="font-medium">Manual Reviews</span>
                    <span className="text-xl font-bold text-blue-500">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}