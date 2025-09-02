import { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Column {
  key: string;
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
}

interface ProfessionalDataTableProps {
  title?: string;
  description?: string;
  columns: Column[];
  data: Record<string, any>[];
  actions?: ReactNode;
  className?: string;
  emptyMessage?: string;
  renderCell?: (key: string, value: any, row: Record<string, any>) => ReactNode;
}

export function ProfessionalDataTable({
  title,
  description,
  columns,
  data,
  actions,
  className,
  emptyMessage = "No data available",
  renderCell
}: ProfessionalDataTableProps) {
  const defaultRenderCell = (key: string, value: any, row: Record<string, any>) => {
    if (renderCell) {
      const customRender = renderCell(key, value, row);
      if (customRender !== undefined) return customRender;
    }

    // Default status badge rendering
    if (key.toLowerCase().includes('status')) {
      const status = value?.toString().toLowerCase();
      return (
        <Badge
          variant={
            status === 'active' || status === 'completed' || status === 'approved' ? 'default' :
            status === 'pending' || status === 'processing' ? 'secondary' :
            status === 'suspended' || status === 'failed' || status === 'rejected' ? 'destructive' :
            'outline'
          }
          className="font-medium"
        >
          {value}
        </Badge>
      );
    }

    // Default currency formatting
    if (key.toLowerCase().includes('amount') || key.toLowerCase().includes('balance')) {
      const num = parseFloat(value?.toString().replace(/[^0-9.-]/g, '') || '0');
      return (
        <span className={cn(
          "font-mono font-semibold",
          num >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
        )}>
          ${Math.abs(num).toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </span>
      );
    }

    return value?.toString() || '—';
  };

  return (
    <Card className={cn("data-table", className)}>
      {(title || description || actions) && (
        <CardHeader className="border-b border-border/50">
          <div className="flex items-center justify-between">
            <div>
              {title && <CardTitle className="text-xl font-semibold">{title}</CardTitle>}
              {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
            </div>
            {actions}
          </div>
        </CardHeader>
      )}
      <CardContent className="p-0">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border/50">
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className={cn(
                      "font-semibold text-muted-foreground bg-muted/20 h-12",
                      column.align === "center" && "text-center",
                      column.align === "right" && "text-right"
                    )}
                    style={{ width: column.width }}
                  >
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-32 text-center text-muted-foreground"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-muted/30 transition-colors border-b border-border/30"
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column.key}
                        className={cn(
                          "py-4 font-medium",
                          column.align === "center" && "text-center",
                          column.align === "right" && "text-right"
                        )}
                      >
                        {defaultRenderCell(column.key, row[column.key], row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}