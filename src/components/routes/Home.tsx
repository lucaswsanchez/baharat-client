import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  BarChart2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-3xl font-bold">
        Almacen Natural Baharat - Gestor de Inventario
      </h2>
      <p className="text-xl text-muted-foreground">
        Resumen de inventario y descubri las acciones más importantes.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Productos
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ventas del Mes
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">845</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Productos Agotados
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col h-[350px]">
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>
              Gestiona tu inventario de forma eficiente
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-around gap-6 flex-grow">
            <Button className="w-full p-6">
              <Package className="mr-2 h-4 w-4" />
              Añadir Producto
            </Button>
            <Button className="w-full p-6" variant="outline">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Registrar Venta
            </Button>
            <Button className="w-full p-6" variant="outline">
              <BarChart2 className="mr-2 h-4 w-4" />
              Generar Informe
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col h-[350px]">
          <CardHeader>
            <CardTitle>Productos Más Vendidos</CardTitle>
            <CardDescription>Top 5 productos del mes</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow justify-between px-4 ">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Producto</TableHead>
                  <TableHead className="text-right">
                    Unidades Vendidas
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="leading-relaxed">
                <TableRow>
                  <TableCell>Producto A</TableCell>
                  <TableCell className="text-right">120</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Producto B</TableCell>
                  <TableCell className="text-right">98</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Producto C</TableCell>
                  <TableCell className="text-right">85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Producto D</TableCell>
                  <TableCell className="text-right">72</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Producto E</TableCell>
                  <TableCell className="text-right">65</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
