import { useState } from "react";
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
import { Eye, FileText, MoreHorizontal, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface SaleItem {
  product: Product;
  quantity: number;
}

const products: Product[] = [
  { id: "1", name: "Aceite de Coco Orgánico", price: 850.99 },
  { id: "2", name: "Miel Pura de Abeja", price: 499.99 },
  { id: "3", name: "Semillas de Chía", price: 250.0 },
];

export default function Pedidos() {
  const { toast } = useToast();
  const [cliente, setCliente] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  const [pedidosRecientes, setPedidosRecientes] = useState([
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
  ]);

  const handleAddToSale = () => {
    const product = products.find((p) => p.id === selectedProduct);
    if (product && quantity > 0) {
      setSaleItems((prevItems) => [...prevItems, { product, quantity }]);
      setSelectedProduct("");
      setQuantity(1);
    }
  };

  const handleRemoveItem = (index: number) => {
    setSaleItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return saleItems
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleFinalizeSale = () => {
    if (saleItems.length === 0 || !cliente) {
      toast({
        title: "Error",
        description:
          "Por favor, agregue productos y especifique un cliente antes de finalizar la venta.",
        variant: "destructive",
      });
      return;
    }

    const newSale = {
      id: `00${pedidosRecientes.length + 1}`,
      fecha: new Date().toISOString().split("T")[0],
      cliente: cliente,
      total: `$${calculateTotal()}`,
    };

    setPedidosRecientes((prevPedidos) => [newSale, ...prevPedidos]);

    toast({
      title: "Venta Finalizada",
      description: `Venta por $${calculateTotal()} realizada con éxito para ${cliente}.`,
    });

    // Limpiar el formulario y la lista de productos
    setCliente("");
    setSaleItems([]);
  };

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
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="cliente"
                >
                  Cliente
                </label>
                <Input
                  type="text"
                  id="cliente"
                  placeholder="Ingresar cliente"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  list="clientes"
                />
                <datalist id="clientes">
                  <option value="Lucas Sanchez" />
                  <option value="Martin Alvarez" />
                </datalist>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="producto"
                >
                  Producto
                </label>
                <Select
                  value={selectedProduct}
                  onValueChange={setSelectedProduct}
                >
                  <SelectTrigger id="producto">
                    <SelectValue placeholder="Seleccionar producto" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name} - ${product.price.toFixed(2)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="cantidad"
                >
                  Cantidad
                </label>
                <Input
                  type="number"
                  id="cantidad"
                  placeholder="Cantidad"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
            </div>
            <Button className="w-full" onClick={handleAddToSale}>
              <Plus className="mr-2 h-4 w-4" /> Agregar a la Venta
            </Button>
          </form>

          {saleItems.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">
                Productos en la venta:
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Producto</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Precio Unitario</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {saleItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.product.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>${item.product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 text-right">
                <strong>Total de la venta: ${calculateTotal()}</strong>
              </div>
              <Button className="w-full mt-4" onClick={handleFinalizeSale}>
                Finalizar Venta
              </Button>
            </div>
          )}
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
