import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, FileText, MoreHorizontal, Plus } from "lucide-react";

export default function Pedidos() {
  const pedidosRecientes = [
    { id: "001", fecha: "2023-10-19", cliente: "Juan Pérez", total: "$150.00" },
    {
      id: "002",
      fecha: "2023-10-18",
      cliente: "María García",
      total: "$230.50",
    },
    {
      id: "003",
      fecha: "2023-10-17",
      cliente: "Carlos López",
      total: "$75.25",
    },
  ];

  return (
    <div className="w-full space-y-6 pb-4">
      <h1 className="text-3xl font-bold mb-6">Gestión de Pedidos</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-medium">
            Generar Nueva Venta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="cliente"
                >
                  Cliente
                </label>
                <Select>
                  <SelectTrigger id="cliente">
                    <SelectValue placeholder="Seleccionar cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="juan">Juan Pérez</SelectItem>
                    <SelectItem value="maria">María García</SelectItem>
                    <SelectItem value="carlos">Carlos López</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="producto"
                >
                  Producto
                </label>
                <Select>
                  <SelectTrigger id="producto">
                    <SelectValue placeholder="Seleccionar producto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prod1">Producto 1</SelectItem>
                    <SelectItem value="prod2">Producto 2</SelectItem>
                    <SelectItem value="prod3">Producto 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium  mb-1"
                  htmlFor="cantidad"
                >
                  Cantidad
                </label>
                <Input
                  type="number"
                  id="cantidad"
                  placeholder="Cantidad"
                  min="1"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="precio"
                >
                  Precio Unitario
                </label>
                <Input
                  type="number"
                  id="precio"
                  placeholder="Precio"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Agregar a la Venta
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium">
            Pedidos Recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nº Pedido</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidosRecientes.map((pedido) => (
                <TableRow key={pedido.id}>
                  <TableCell>{pedido.id}</TableCell>
                  <TableCell>{pedido.fecha}</TableCell>
                  <TableCell>{pedido.cliente}</TableCell>
                  <TableCell>{pedido.total}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" title="Ver Ticket">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Ver Factura">
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Más Detalles">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
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
