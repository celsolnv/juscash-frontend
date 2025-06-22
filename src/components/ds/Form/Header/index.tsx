import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

interface IHeaderFormProps {
  title?: string;
  description?: string;
  backTitle?: string;
  backUrl?: string;
}
export function HeaderForm({
  backTitle,
  backUrl,
  description,
  title
}: Readonly<IHeaderFormProps>) {
  return (
    <div className="flex p-6 flex-col items-center gap-6 w-full">
      <div className="flex max-w-[1280px] flex-col items-start gap-6 w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={backUrl}>{backTitle}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>
              <BreadcrumbLink href="#">{title}</BreadcrumbLink>
            </BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-start gap-6 w-full md:flex-row flex-col">
          <div className="flex flex-col items-start gap-2 flex-1">
            <h1 className="text-primary  text-3xl font-bold leading-9">
              {title}
            </h1>
            <p className="text-muted-foreground  text-base leading-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
