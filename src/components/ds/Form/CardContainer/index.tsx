/* eslint-disable @typescript-eslint/no-explicit-any */

import { twMerge } from "tailwind-merge";

import { Flex } from "@/components/ui";

interface ICardContainerProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}
export function CardContainer({
  title,
  description,
  children,
  className
}: Readonly<ICardContainerProps>) {
  return (
    <div className="flex max-w-[1280px] px-6 py-6 flex-col items-start gap-6 w-full">
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex flex-col items-start w-full rounded-lg border border-border bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <Flex className={"p-6 items-start gap-2 w-full"}>
            <h2 className="  text-lg font-semibold leading-none tracking-tight -mx-0.5">
              {title}
            </h2>
            <p className="text-muted-foreground  text-sm font-normal leading-5">
              {description ||
                "Preencha os campos obrigatórios marcados com * (asterisco)."}
            </p>
          </Flex>

          <div
            className={twMerge(
              "w-full p-6 pt-0 gap-6 flex flex-col",
              className
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
