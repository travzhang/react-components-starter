import type { CSSProperties, HTMLAttributes } from "react";

type Style = CSSProperties | false | null | undefined;

function flattenStyle(
  style?: Style | Style[],
): CSSProperties | undefined {
  if (!style) {
    return undefined;
  }

  if (Array.isArray(style)) {
    return Object.assign(
      {},
      ...style.map((item) => flattenStyle(item)).filter(Boolean),
    );
  }

  return style;
}

export const StyleSheet = {
  create<T extends Record<string, CSSProperties>>(styles: T): T {
    return styles;
  },
  flatten(style?: Style | Style[]): CSSProperties | undefined {
    return flattenStyle(style);
  },
};

export type ViewProps = HTMLAttributes<HTMLDivElement> & {
  style?: Style | Style[];
};

export function View({ style, children, ...props }: ViewProps) {
  return (
    <div style={StyleSheet.flatten(style)} {...props}>
      {children}
    </div>
  );
}

export type TextProps = HTMLAttributes<HTMLSpanElement> & {
  style?: Style | Style[];
};

export function Text({ style, children, ...props }: TextProps) {
  return (
    <span style={StyleSheet.flatten(style)} {...props}>
      {children}
    </span>
  );
}
