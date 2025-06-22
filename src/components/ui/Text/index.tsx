import { Skeleton } from "../Skeleton";

import { Text as TextRd, TextProps } from "@radix-ui/themes";

type ITextProps = TextProps & {
  children: React.ReactNode;
  loading?: boolean;
};

function Text({ children, loading = false, ...props }: ITextProps) {
  return (
    <TextRd size="3" {...props}>
      <Skeleton loading={loading}>{children}</Skeleton>
    </TextRd>
  );
}

export { Text };
export type { ITextProps };
