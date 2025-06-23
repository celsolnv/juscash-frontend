import { Button } from "@/components/ui";
import { useSignOut } from "@/hooks/signout";

export function Header() {
  const { out } = useSignOut();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Rook Logo" className="h-5" />
            </div>
          </div>
          <Button onClick={out} variant="outline" size="sm">
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
