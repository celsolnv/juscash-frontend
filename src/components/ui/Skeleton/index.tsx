import { Skeleton as SkeletonRd, SkeletonProps } from "@radix-ui/themes";

type ISkeletonProps = SkeletonProps;

function Skeleton({ children, ...props }: Readonly<ISkeletonProps>) {
  return (
    <SkeletonRd data-testid="skeleton" {...props}>
      {children}
    </SkeletonRd>
  );
}

export { Skeleton };
export type { ISkeletonProps };
