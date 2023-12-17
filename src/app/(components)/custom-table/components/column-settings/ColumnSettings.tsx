import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/ui-library/dropdown-menu";
import { Button } from "@/ui-library/button";

import { MoreHorizontal } from "lucide-react";

function ColumnSettings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center justify-center h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Lesson</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => console.log("click")}>
          Add to portfolio
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Statistics</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ColumnSettings;
