import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Card className="z-10 w-11/12 grid grid-cols-1 text-sm md:max-w-4xl md:grid-cols-2 overflow-hidden">
        <div className="hidden md:block">
          <img
            alt="Inventory management"
            className="object-cover w-full h-full"
            height="100%"
            src="https://www.ideostock.com/admin/upload/pourquoi-utiliser-logiciel-gestion-de-stock.jpg"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="100%"
          />
        </div>
        <div className=" p-4 py-8 space-y-6 flex flex-col justify-center items-center md:p-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Gestor de Inventario</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Ingresa a tu cuenta para administrar tu inventario
            </p>
          </div>
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button className="w-full" type="submit">
              Iniciar sesión
            </Button>
          </form>
        </div>
      </Card>
      <GridPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
