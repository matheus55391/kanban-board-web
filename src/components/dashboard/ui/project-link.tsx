import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Edit, Ellipsis, Pencil, Trash } from "lucide-react";

interface ProjectLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export default function ProjectLink({
  href,
  children,
  isActive = false,
}: ProjectLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 transition-all hover:bg-muted hover:text-primary justify-between ${
        isActive
          ? "bg-muted text-primary"
          : "text-muted-foreground hover:text-primary"
      }`}
    >
      {children}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="p-2">
            <Ellipsis className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          {/* Conteúdo do Popover, como links para editar ou deletar o projeto */}
          <div className="flex flex-col space-y-2">
            <Button className="text-sm  hover:underline">
              Edit
              <Pencil className="ml-2 h-4 w-4" />
            </Button>
            <Button className="text-sm text-red-600 ">
            
              <span>Delete</span>
              <Trash className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </Link>
  );
}
