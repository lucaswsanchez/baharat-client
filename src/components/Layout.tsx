import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  User,
  LogOut,
  MenuIcon,
  Leaf,
  ShoppingCart,
  Package,
  Slash,
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const MENU_ITEMS = [
  { to: "/productos", icon: ShoppingCart, label: "Productos" },
  { to: "/pedidos", icon: Package, label: "Pedidos" },
];

const Sidebar = React.memo(() => (
  <aside className="fixed inset-y-0 left-0 z-40 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
        <Link
          to="/"
          className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Leaf className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Baharat - Gestor de Inventario</span>
        </Link>
        {MENU_ITEMS.map(({ to, icon: Icon, label }) => (
          <Tooltip key={to}>
            <TooltipTrigger asChild>
              <Link
                to={to}
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Icon />
                <span className="sr-only">{label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  </aside>
));

const MobileMenu = React.memo(() => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="icon" variant="ghost" className="sm:hidden">
        <MenuIcon />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="sm:max-w-xs p-3.5">
      <nav className="flex flex-col gap-8 text-md font-medium">
        <SheetClose asChild>
          <Link to="/" className="text-sm">
            <span>Baharat - Gestor de Inventario</span>
          </Link>
        </SheetClose>
        {MENU_ITEMS.map(({ to, icon: Icon, label }) => (
          <SheetClose asChild key={to}>
            <Link to={to} className="flex items-center gap-4 text-xl">
              <Icon className="h-6 w-6" />
              {label}
            </Link>
          </SheetClose>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
));

const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  return useMemo(() => {
    return pathname
      .split("/")
      .filter(Boolean)
      .map((name, index, arr) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        routeTo: `/${arr.slice(0, index + 1).join("/")}`,
        isLast: index === arr.length - 1,
      }));
  }, [pathname]);
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const breadcrumbs = useBreadcrumbs();

  const headerContent = useMemo(
    () => (
      <div className="flex items-center gap-4">
        <ModeToggle />
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Usuario Logeado
          </span>
          <span className="block text-xs">Empleado</span>
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://scontent.fcnq1-1.fna.fbcdn.net/v/t39.30808-6/271890432_7552519748106760_5500137935410474387_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH-f94ZTN7PeZ5qzEe578P_ixujZT-66QCLG6NlP7rpAKRtxoEGEoBjXn1UXE6wOlpan0bNvynz2bw6GpbUW8_Z&_nc_ohc=Zkm8IKcQ5hcQ7kNvgHTTB-c&_nc_zt=23&_nc_ht=scontent.fcnq1-1.fna&_nc_gid=A3nU2BzHjH7ZOaZN9GTQfVt&oh=00_AYDI9PIeq1_93B0sl9XO-cuBaWsSzgj2oXuH8JLIFncslg&oe=6719B0B8" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to="/profile">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar Sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
    []
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:pl-14">
        <header className="w-full sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 sm:static sm:px-6 sm:py-9">
          <div className="flex items-center">
            <MobileMenu />
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Baharat - Gestor de Inventario</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map(({ name, routeTo, isLast }) => (
                  <React.Fragment key={routeTo}>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{name}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={routeTo}>{name}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          {headerContent}
        </header>
        <main className="max-w-screen-2xl w-full mx-auto grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default React.memo(Layout);
