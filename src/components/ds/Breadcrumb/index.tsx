import { Link } from "react-router-dom";

import { ChevronRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

interface IBreadcrumbDefaultProps {
  backURL: string;
  backText: string;
  currentText: string;
}
export function BreadcrumbDefault({
  backURL,
  backText,
  currentText
}: IBreadcrumbDefaultProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center gap-[10px] flex-wrap">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to={backURL}
              className="text-muted-foreground  text-sm leading-5"
            >
              {backText}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="w-6 h-6 text-muted-foreground" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <span className="text-foreground  text-sm leading-5">
            {currentText}
          </span>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
