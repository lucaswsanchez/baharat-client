import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart, CalendarDays, Package } from "lucide-react";

export default function Reportes() {
  const [fechaInicio, setFechaInicio] = useState<Date | undefined>(new Date());
  const [fechaFin, setFechaFin] = useState<Date | undefined>(new Date());
  const [stockLimite, setStockLimite] = useState<string>("10");

  const generarReporte = (tipoReporte: string) => {
    // Aquí iría la lógica para generar el reporte
    console.log(`Generando reporte de ${tipoReporte}`);
    console.log(`Fecha inicio: ${fechaInicio}, Fecha fin: ${fechaFin}`);
    if (tipoReporte === "Productos con bajo stock") {
      console.log(`Stock límite: ${stockLimite}`);
    }
  };

  return (
    <div className="w-full space-y-6 pb-4">
      <h1 className="text-3xl font-bold mb-6">Gestión de Reportes</h1>

      <Tabs defaultValue="mas-vendidos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="mas-vendidos">Productos más vendidos</TabsTrigger>
          <TabsTrigger value="bajo-stock">Productos con bajo stock</TabsTrigger>
          <TabsTrigger value="ventas-totales">Ventas totales</TabsTrigger>
        </TabsList>

        <TabsContent value="mas-vendidos">
          <Card>
            <CardHeader>
              <CardTitle>Productos más vendidos</CardTitle>
              <CardDescription>
                Genera un reporte de los productos más vendidos en un período
                específico.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fecha-inicio-vendidos">Fecha de inicio</Label>
                  <Calendar
                    mode="single"
                    selected={fechaInicio}
                    onSelect={setFechaInicio}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fecha-fin-vendidos">Fecha de fin</Label>
                  <Calendar
                    mode="single"
                    selected={fechaFin}
                    onSelect={setFechaFin}
                    className="rounded-md border"
                  />
                </div>
              </div>
              <Button
                onClick={() => generarReporte("Productos más vendidos")}
                className="w-full"
              >
                <BarChart className="mr-2 h-4 w-4" /> Generar Reporte
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bajo-stock">
          <Card>
            <CardHeader>
              <CardTitle>Productos con bajo stock</CardTitle>
              <CardDescription>
                Consulta los productos que están por debajo del límite de stock
                especificado.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stock-limite">Stock límite</Label>
                <Input
                  id="stock-limite"
                  type="number"
                  value={stockLimite}
                  onChange={(e) => setStockLimite(e.target.value)}
                  placeholder="Ingrese el límite de stock"
                />
              </div>
              <Button
                onClick={() => generarReporte("Productos con bajo stock")}
                className="w-full"
              >
                <Package className="mr-2 h-4 w-4" /> Consultar Productos
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ventas-totales">
          <Card>
            <CardHeader>
              <CardTitle>Ventas totales</CardTitle>
              <CardDescription>
                Genera un reporte de las ventas totales en un período
                específico.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fecha-inicio-ventas">Fecha de inicio</Label>
                  <Calendar
                    mode="single"
                    selected={fechaInicio}
                    onSelect={setFechaInicio}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fecha-fin-ventas">Fecha de fin</Label>
                  <Calendar
                    mode="single"
                    selected={fechaFin}
                    onSelect={setFechaFin}
                    className="rounded-md border"
                  />
                </div>
              </div>
              <Button
                onClick={() => generarReporte("Ventas totales")}
                className="w-full"
              >
                <CalendarDays className="mr-2 h-4 w-4" /> Generar Reporte
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
