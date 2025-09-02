import { useState } from "react";
import { Search, Filter, Eye, Ban, CheckCircle, MoreHorizontal, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample user data
const users = [
  {
    id: "USR001",
    name: "Alice Johnson",
    email: "alice@email.com",
    status: "active",
    balance: 2450.00,
    joinDate: "2024-01-15",
    verified: true,
  },
  {
    id: "USR002", 
    name: "Bob Smith",
    email: "bob@email.com",
    status: "suspended",
    balance: 890.50,
    joinDate: "2024-02-20",
    verified: true,
  },
  {
    id: "USR003",
    name: "Carol Davis",
    email: "carol@email.com", 
    status: "active",
    balance: 5670.25,
    joinDate: "2024-01-08",
    verified: false,
  },
  {
    id: "USR004",
    name: "David Wilson",
    email: "david@email.com",
    status: "unverified",
    balance: 0.00,
    joinDate: "2024-12-20",
    verified: false,
  }
];

export default function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-success text-success-foreground",
      suspended: "bg-destructive text-destructive-foreground", 
      unverified: "bg-warning text-warning-foreground"
    };
    return variants[status as keyof typeof variants] || "bg-muted text-muted-foreground";
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">User Management</h2>
          <p className="text-muted-foreground">Manage and monitor user accounts</p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover">
          <Download className="mr-2 h-4 w-4" />
          Export Users
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or user ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="unverified">Unverified</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users ({filteredUsers.length})</CardTitle>
          <CardDescription>
            A list of all users in the system with their current status and account details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Verified</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                      <div className="text-xs text-muted-foreground">{user.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    ${user.balance.toFixed(2)}
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>
                    {user.verified ? (
                      <Badge className="bg-success text-success-foreground">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Verified
                      </Badge>
                    ) : (
                      <Badge variant="outline">Pending</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </DropdownMenuItem>
                        {!user.verified && (
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Verify User
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem 
                          className={user.status === "suspended" ? "text-success" : "text-destructive"}
                        >
                          <Ban className="mr-2 h-4 w-4" />
                          {user.status === "suspended" ? "Unsuspend" : "Suspend"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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