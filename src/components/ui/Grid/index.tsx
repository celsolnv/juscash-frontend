import { Grid as GridRd, GridProps } from "@radix-ui/themes";

type IGridProps = GridProps;

function Grid({ children, ...props }: IGridProps) {
  return <GridRd {...props}>{children}</GridRd>;
}

export { Grid };
export type { IGridProps };
