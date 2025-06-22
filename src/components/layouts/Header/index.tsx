import { Link } from "react-router-dom";

import { LogOut, Zap } from "lucide-react";

import { Flex, Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { useAppSelector } from "@/hooks/redux";
import { useSignOut } from "@/hooks/signout";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export function Header() {
  const { out } = useSignOut();
  const user = useAppSelector((state) => state.user);
  const avatarUrl = user?.picture
    ? import.meta.env.VITE_BASE_URL + user?.picture
    : "";
  const fallback = user?.name.slice(0, 2).toUpperCase();

  return (
    <div
      className="flex h-16 px-6 justify-between items-center 
      border border-border bg-[#FAFAF9] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
    >
      <div className="flex justify-end items-center flex-1 w-full">
        <div className="flex items-center justify-center gap-4">
          <Button
            asChild
            className="h-10 px-4 py-2 gap-2 rounded-md bg-primary hover:bg-primary/90"
          >
            <Link to="/plans">
              <Zap className="w-4 h-4" />
              <span className="text-[14px] font-medium ">Assinar Plano</span>
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Flex
                className="cursor-pointer hover:scale-105"
                direction="row"
                gap="3"
              >
                <Avatar className="w-[40px] h-[40px] items-center justify-center flex border border-border rounded-full">
                  <AvatarImage src={avatarUrl} className="rounded-full" />
                  <AvatarFallback className="text-lg not-only:">
                    {fallback}
                  </AvatarFallback>
                </Avatar>
              </Flex>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => out()}
              >
                <LogOut stroke="#c1c1c1" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
