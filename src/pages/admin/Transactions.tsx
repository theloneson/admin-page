import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Search, Filter, Download, CreditCard, ArrowUpDown, ArrowDown, ArrowUp, Building, AlertTriangle, CheckCircle, Clock, XCircle, Ban, Play, Pause, Shield, Eye, FileText } from "lucide-react";

const transactions = [
  { id: "TXN-001", user: "John Smith", email: "john.smith@email.com", type: "deposit", amount: 2500, status: "completed", date: "2024-01-15 09:30", account: "****4829", location: "New York, NY", riskLevel: "low", canControl: true },
  { id: "TXN-002", user: "Sarah Johnson", email: "sarah.j@email.com", type: "withdrawal", amount: 800, status: "pending", date: "2024-01-15 08:45", account: "****7362", location: "Los Angeles, CA", riskLevel: "medium", canControl: true },
  { id: "TXN-003", user: "Mike Wilson", email: "mike.w@email.com", type: "transfer", amount: 1200, status: "processing", date: "2024-01-15 07:20", account: "****9847", location: "Chicago, IL", riskLevel: "low", canControl: true },
  { id: "TXN-004", user: "Emily Davis", email: "emily.d@email.com", type: "deposit", amount: 3500, status: "failed", date: "2024-01-14 16:15", account: "****2847", location: "Houston, TX", riskLevel: "high", canControl: false },
  { id: "TXN-005", user: "David Brown", email: "david.b@email.com", type: "withdrawal", amount: 950, status: "completed", date: "2024-01-14 14:30", account: "****1847", location: "Phoenix, AZ", riskLevel: "low", canControl: false },
  { id: "TXN-006", user: "Lisa Garcia", email: "lisa.g@email.com", type: "transfer", amount: 2200, status: "pending", date: "2024-01-14 13:45", account: "****5847", location: "Philadelphia, PA", riskLevel: "medium", canControl: true },
  { id: "TXN-007", user: "James Martinez", email: "james.m@email.com", type: "deposit", amount: 4200, status: "processing", date: "2024-01-14 11:20", account: "****6847", location: "San Antonio, TX", riskLevel: "low", canControl: true },
  { id: "TXN-008", user: "Maria Rodriguez", email: "maria.r@email.com", type: "withdrawal", amount: 1800, status: "flagged", date: "2024-01-14 10:15", account: "****3847", location: "San Diego, CA", riskLevel: "high", canControl: true },
  { id: "TXN-009", user: "Robert Taylor", email: "robert.t@email.com", type: "transfer", amount: 5800, status: "blocked", date: "2024-01-14 09:30", account: "****7847", location: "Dallas, TX", riskLevel: "high", canControl: true },
  { id: "TXN-010", user: "Jennifer Wilson", email: "jennifer.w@email.com", type: "deposit", amount: 1200, status: "processing", date: "2024-01-14 08:15", account: "****8847", location: "Austin, TX", riskLevel: "medium", canControl: true },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "deposit": return <ArrowDown className="h-4 w-4 text-green-500" />;
    case "withdrawal": return <ArrowUp className="h-4 w-4 text-red-500" />;
    case "transfer": return <ArrowUpDown className="h-4 w-4 text-blue-500" />;
    default: return <CreditCard className="h-4 w-4" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed": return "default";
    case "pending": return "secondary";
    case "processing": return "default";
    case "failed": return "destructive";
    case "flagged": return "destructive";
    case "blocked": return "destructive";
    default: return "secondary";
  }
};

const getRiskColor = (riskLevel: string) => {
  switch (riskLevel) {
    case "high": return "text-red-500";
    case "medium": return "text-yellow-500";
    case "low": return "text-green-500";
    default: return "text-gray-500";
  }
};

export default function AdminTransactions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState("all");

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || transaction.type === typeFilter;
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter;
    const matchesRisk = riskFilter === "all" || transaction.riskLevel === riskFilter;
    
    return matchesSearch && matchesType && matchesStatus && matchesRisk;
  });

  const handleBlockTransaction = (transactionId: string) => {
    console.log(`Blocking transaction: ${transactionId}`);
  };

  const handleApproveTransaction = (transactionId: string) => {
    console.log(`Approving transaction: ${transactionId}`);
  };

  const handleFreezeAccount = (transactionId: string) => {
    console.log(`Freezing account for transaction: ${transactionId}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Advanced Transaction Control Center</h1>
          <p className="text-muted-foreground mt-1">Real-time monitoring and administrative control over all financial transactions</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
          <Button variant="outline" className="gap-2">
            <Shield className="h-4 w-4" />
            Risk Analysis
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Control Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">$2.4M</p>
                <p className="text-sm text-muted-foreground">Today's Volume</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/50 dark:to-yellow-900/50 border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">47</p>
                <p className="text-sm text-muted-foreground">Pending Control</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 border-red-200 dark:border-red-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <Ban className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-sm text-muted-foreground">Blocked Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">15</p>
                <p className="text-sm text-muted-foreground">High Risk</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">98.7%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Transaction Control Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Transaction Control Center
          </CardTitle>
          <CardDescription>Real-time transaction monitoring with administrative controls</CardDescription>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by user, transaction ID, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-36">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="deposit">Deposit</SelectItem>
                <SelectItem value="withdrawal">Withdrawal</SelectItem>
                <SelectItem value="transfer">Transfer</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
              </SelectContent>
            </Select>
            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger className="w-full md:w-36">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>User Details</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Date/Location</TableHead>
                <TableHead className="text-center">Admin Controls</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono font-medium">{transaction.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{transaction.user}</div>
                      <div className="text-sm text-muted-foreground">{transaction.email}</div>
                      <div className="text-xs text-muted-foreground">{transaction.account}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(transaction.type)}
                      <span className="capitalize">{transaction.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">
                    ${transaction.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadge(transaction.status)} className="capitalize">
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className={`flex items-center gap-1 ${getRiskColor(transaction.riskLevel)}`}>
                      <AlertTriangle className="h-3 w-3" />
                      <span className="text-sm font-medium capitalize">{transaction.riskLevel}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="text-muted-foreground">{transaction.date}</div>
                      <div className="text-xs text-muted-foreground">{transaction.location}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {transaction.canControl && (
                        <>
                          {(transaction.status === "pending" || transaction.status === "processing") && (
                            <div className="flex gap-1">
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                    <Ban className="h-3 w-3" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Block Transaction</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to block transaction {transaction.id}?
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleBlockTransaction(transaction.id)}>
                                      Block Transaction
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => handleApproveTransaction(transaction.id)}
                              >
                                <CheckCircle className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                          {transaction.riskLevel === "high" && (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="sm" className="h-8 w-8 p-0">
                                  <Pause className="h-3 w-3" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Freeze Account</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will freeze the account associated with this transaction.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleFreezeAccount(transaction.id)}>
                                    Freeze Account
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          )}
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </>
                      )}
                      {!transaction.canControl && (
                        <Badge variant="secondary" className="text-xs">
                          Final
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}