/* eslint-disable no-use-before-define */

export interface GenericTableProps<T extends { id: string }> {
  data?: T[];
  columns: Column<T>[];
  onRowClick?: (id: string) => void;
  actions: {
    title: string;
    icon: "edit" | "delete" | "view" | "inactivate";
    onClick: (item: T) => void;
    disabled?: (item: T) => boolean;
  }[];
}

export type Keys<T> = Extract<keyof T, string>;

// This is a simplified definition since we don't have the full components definition
// You can expand this as needed
export const components = {
  text: "text",
  badge: "badge",
  avatar: "avatar",
  actions: "actions"
} as const;

export type DefaultTheme = Record<string, unknown>;

export type Image<T> = {
  type: "avatar" | "thumbnail";
  dataIndex?: Keys<T>;
  url?: (item: T) => string;
  fallback?: string;
  alt?: (item: T) => string;
};

export type Column<T extends { id: string }> = {
  title: string;
  width?: string;
  dataIndex: Keys<T>;
  fixed?: "left" | "right";
  lineType?: keyof typeof components;
  format?: (item: T) => string | number | JSX.Element; // Updated to allow JSX.Element
  image?: Image<T>;
  tooltip?: {
    title: (item: T) => string;
    style?: (item: T, theme: DefaultTheme) => React.CSSProperties;
  };
  textStyle?: (item: T, theme: DefaultTheme) => React.CSSProperties;
};
