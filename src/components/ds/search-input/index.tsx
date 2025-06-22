import { useCallback } from "react";

import clsx from "clsx";
import { Search } from "lucide-react";

import { debounce } from "@/utils/func";
import { sanitize } from "@/utils/text";

interface ISearchInputProps {
  handleChange: (query: string) => void;
  className?: string;
  placeholder?: string;
}

export function SearchInput({
  handleChange,
  className,
  placeholder
}: Readonly<ISearchInputProps>) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((param: string) => {
      const query = sanitize(param);
      handleChange(query);
    }, 300),
    []
  );
  return (
    <div
      className={clsx(
        className,
        "flex h-10 px-3 py-2 items-center gap-2 w-full rounded-md border border-border bg-white"
      )}
    >
      <Search className="w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        placeholder={placeholder || "Buscar"}
        className="flex-1 text-muted-foreground  text-sm bg-transparent border-none outline-none"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
