import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2, User, Phone, Calendar, BookOpen, Download } from "lucide-react";

interface Lead {
  id: number;
  parentName: string;
  studentName: string;
  age: string;
  phone: string;
  program: string;
  status: string;
  date: string;
}

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const savedLeads = JSON.parse(localStorage.getItem("mock_leads") || "[]");
    setLeads(savedLeads);
  }, []);

  const deleteLead = (id: number) => {
    const updatedLeads = leads.filter(lead => lead.id !== id);
    setLeads(updatedLeads);
    localStorage.setItem("mock_leads", JSON.stringify(updatedLeads));
  };

  const exportData = () => {
    if (leads.length === 0) return;
    
    // Create CSV content
    const headers = ["Date", "Parent Name", "Student Name", "Age", "Phone", "Program", "Status"];
    const csvContent = [
      headers.join(","),
      ...leads.map(lead => [
        `"${lead.date}"`,
        `"${lead.parentName}"`,
        `"${lead.studentName}"`,
        `"${lead.age}"`,
        `"${lead.phone}"`,
        `"${lead.program}"`,
        `"${lead.status}"`
      ].join(","))
    ].join("\n");

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `strivers_academy_leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-heading text-4xl font-bold text-slate-900">Leads Dashboard</h1>
            <p className="text-muted-foreground">Manage your trial session bookings (Mockup Data)</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={exportData}
              disabled={leads.length === 0}
              className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{leads.length}</div>
                <div className="text-xs text-muted-foreground uppercase">Total Leads</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="border-none shadow-xl overflow-hidden">
          <CardHeader className="bg-white border-b border-slate-100">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Recent Registrations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Parent</TableHead>
                  <TableHead>Student (Age)</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-32 text-center text-muted-foreground italic">
                      No registrations found yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  leads.map((lead) => (
                    <TableRow key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="text-xs font-medium text-slate-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {lead.date}
                        </div>
                      </TableCell>
                      <TableCell className="font-bold text-slate-900">{lead.parentName}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{lead.studentName}</span>
                          <span className="text-xs text-muted-foreground">Age: {lead.age}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-3 h-3 text-slate-400" />
                          {lead.phone}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="capitalize flex items-center w-fit gap-1 bg-blue-50 text-blue-700 border-blue-100">
                          <BookOpen className="w-3 h-3" />
                          {lead.program}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => deleteLead(lead.id)}
                          className="text-red-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
