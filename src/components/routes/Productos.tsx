import { useState } from "react";
import { Plus, Search, ChevronLeft, ChevronRight } from "lucide-react";
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

type Producto = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
};

const productosIniciales: Producto[] = [
  {
    id: 1,
    nombre: "Aceite de Coco Orgánico",
    categoria: "Alimentos",
    precio: 850.99,
    stock: 40,
  },
  {
    id: 2,
    nombre: "Miel Pura de Abeja",
    categoria: "Alimentos",
    precio: 499.99,
    stock: 25,
  },
  {
    id: 3,
    nombre: "Harina de Almendra",
    categoria: "Alimentos",
    precio: 750.5,
    stock: 60,
  },
  {
    id: 4,
    nombre: "Semillas de Chía",
    categoria: "Alimentos",
    precio: 250.0,
    stock: 150,
  },
  {
    id: 5,
    nombre: "Shampoo Natural de Romero",
    categoria: "Higiene Personal",
    precio: 450.75,
    stock: 80,
  },
  {
    id: 6,
    nombre: "Jabón Artesanal de Avena",
    categoria: "Higiene Personal",
    precio: 120.0,
    stock: 200,
  },
  {
    id: 7,
    nombre: "Cápsulas de Jengibre",
    categoria: "Suplementos",
    precio: 350.99,
    stock: 90,
  },
  {
    id: 8,
    nombre: "Té Verde Orgánico",
    categoria: "Alimentos",
    precio: 320.0,
    stock: 70,
  },
  {
    id: 9,
    nombre: "Crema Facial con Aloe Vera",
    categoria: "Higiene Personal",
    precio: 550.49,
    stock: 45,
  },
  {
    id: 10,
    nombre: "Proteína Vegana en Polvo",
    categoria: "Suplementos",
    precio: 1200.99,
    stock: 30,
  },
  {
    id: 11,
    nombre: "Aceite Esencial de Lavanda",
    categoria: "Higiene Personal",
    precio: 299.99,
    stock: 65,
  },
  {
    id: 12,
    nombre: "Almendras Orgánicas",
    categoria: "Alimentos",
    precio: 680.0,
    stock: 100,
  },
  {
    id: 13,
    nombre: "Crema Corporal de Karité",
    categoria: "Higiene Personal",
    precio: 450.0,
    stock: 50,
  },
  {
    id: 14,
    nombre: "Galletas de Avena y Miel",
    categoria: "Alimentos",
    precio: 150.0,
    stock: 120,
  },
  {
    id: 15,
    nombre: "Multivitamínico Natural",
    categoria: "Suplementos",
    precio: 950.75,
    stock: 75,
  },
];

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>(productosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 5;

  // Filtrar productos por nombre o categoría
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Calcular el número total de páginas y los productos de la página actual
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const productosPaginados = productosFiltrados.slice(
    indiceInicial,
    indiceInicial + productosPorPagina
  );

  // Calcular totales
  const totalProductos = productos.length;
  const valorTotalInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );
  const stockPromedio =
    productos.reduce((total, producto) => total + producto.stock, 0) /
    totalProductos;

  const cambiarPagina = (pagina: number) => {
    setPaginaActual(pagina);
  };

  return (
    <div className="w-full space-y-6 pb-4">
      <h1 className="text-3xl font-bold mb-6">Gestión de Productos</h1>

      {/* Totales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Productos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProductos}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor Total Inventario
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${valorTotalInventario.toFixed(2)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Stock Promedio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stockPromedio.toFixed(0)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Añadir nuevo producto */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-medium">
            Añadir Nuevo Producto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium  mb-1"
                  htmlFor="nombre"
                >
                  Nombre del Producto
                </label>
                <Input id="nombre" placeholder="Nombre del producto" />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium  mb-1"
                  htmlFor="categoria"
                >
                  Categoría
                </label>
                <Select>
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="suplementos">Suplementos</SelectItem>
                    <SelectItem value="higienePersonal">
                      Higiene Personal
                    </SelectItem>
                    <SelectItem value="alimentos">Alimentos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="precio"
                >
                  Precio
                </label>
                <Input
                  type="number"
                  id="precio"
                  placeholder="Precio"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="stock"
                >
                  Stock Inicial
                </label>
                <Input
                  type="number"
                  id="stock"
                  placeholder="Stock inicial"
                  min="0"
                />
              </div>
            </div>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Añadir Producto
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Tabla de productos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium">
            Lista de Productos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <Table className="leading-10">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productosPaginados.map((producto) => (
                <TableRow key={producto.id}>
                  <TableCell>{producto.id}</TableCell>
                  <TableCell>{producto.nombre}</TableCell>
                  <TableCell>{producto.categoria}</TableCell>
                  <TableCell>${producto.precio.toFixed(2)}</TableCell>
                  <TableCell>{producto.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Paginación */}
          <div className="flex items-center justify-center space-x-2 pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            <div className="text-sm font-medium">
              Página {paginaActual} de {totalPaginas}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas}
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}