import { useState } from "react";
import { Shield, UserPlus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Perfil() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Usuario creado",
      description: "El nuevo usuario ha sido creado exitosamente.",
    });
    setNewUser({ username: "", email: "", password: "" });
  };

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Seccion mi perfil */}
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://scontent.fcnq1-1.fna.fbcdn.net/v/t39.30808-6/271890432_7552519748106760_5500137935410474387_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH-f94ZTN7PeZ5qzEe578P_ixujZT-66QCLG6NlP7rpAKRtxoEGEoBjXn1UXE6wOlpan0bNvynz2bw6GpbUW8_Z&_nc_ohc=j7dPHFPScfwQ7kNvgEHju4e&_nc_zt=23&_nc_ht=scontent.fcnq1-1.fna&_nc_gid=Ahgr0dglDenxphtUkKTpu5E&oh=00_AYAd1WHX2dvSJvESDNvgq1Gr_eM41CfL57qce7lUujgDXg&oe=672F3938" />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold">
                  Lucas Sanchez
                </CardTitle>
                <div className="flex items-center mt-1 text-muted-foreground">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>Administrador</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Formulario nuevo usuario */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <UserPlus className="w-5 h-5 text-primary" />
              <CardTitle>Crear Nuevo Usuario</CardTitle>
            </div>
            <CardDescription>
              Complete el formulario para dar de alta un nuevo usuario en el
              sistema.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Nombre de Usuario</Label>
                  <Input
                    id="username"
                    placeholder="Usuario"
                    value={newUser.username}
                    onChange={(e) =>
                      setNewUser({ ...newUser, username: e.target.value })
                    }
                    className="w-full"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="usuario@ejemplo.com"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    className="w-full"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                    className="w-full"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                <User className="w-4 h-4 mr-2" />
                Crear Usuario
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
