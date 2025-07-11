import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, Settings, LogOut, Shield, ArrowLeft } from "lucide-react";

interface AdminHeaderProps {
  title?: string;
  showBackButton?: boolean;
  backTo?: string;
  admin?: {
    nome: string;
    email: string;
    avatar?: string;
  };
}

export default function AdminHeader({
  title,
  showBackButton = false,
  backTo = "/admin",
  admin = {
    nome: "Admin Sistema",
    email: "admin@homeflip.com",
    avatar: "",
  },
}: AdminHeaderProps) {
  const handleLogout = () => {
    console.log("Admin logout");
    // Implementar lógica de logout
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Link
                to={backTo}
                className="flex items-center gap-2 text-gray-600 hover:text-homeflip-purple transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar
              </Link>
            )}
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-homeflip-purple" />
              <span className="text-xl font-bold text-homeflip-purple">
                HomeFlip
              </span>
              <Badge variant="destructive" className="ml-2">
                <Shield className="w-3 h-3 mr-1" />
                Admin
              </Badge>
              {title && (
                <>
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-700 font-medium">{title}</span>
                </>
              )}
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={admin.avatar} />
                  <AvatarFallback>
                    {admin.nome
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:block">{admin.nome}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Administração</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
