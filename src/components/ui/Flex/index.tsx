import { Flex as FlexRd, FlexProps } from "@radix-ui/themes";

type IFlexProps = FlexProps & {
  children?: React.ReactNode;
};
function Flex({ children, ...props }: IFlexProps) {
  return (
    <FlexRd direction="column" {...props}>
      {children}
    </FlexRd>
  );
}
export { Flex };
export type { IFlexProps };
