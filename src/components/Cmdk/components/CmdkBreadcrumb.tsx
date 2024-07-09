import clsx from "clsx";

interface CommandShortcutProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "default" | "breadcrumb";
}

export const CmdkBreadcrumb = ({ className, children, onClick, type = "default" }: CommandShortcutProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "cursor-default px-1.5 py-0.5 rounded text-xs [&:not(:last-child)]:hover:cursor-pointer",
        "justify-end",
        type === "breadcrumb"
          ? "text-foreground-muted"
          : "bg-overlay-hover text-foreground-muted [&:not(:last-child)]:hover:bg-selection last:bg-selection last:text-foreground-muted",
        className
      )}
    >
      {children}
    </button>
  );
};
