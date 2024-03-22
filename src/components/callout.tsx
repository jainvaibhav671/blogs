import { cn } from "@/lib/utils";

interface Props {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({ children, type, ...props }: Props) {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none",
        {
          "border-red-700 text-red-600 bg-red-200 prose dark:prose-invert":
            type === "danger",
          "border-yellow-700 text-yellow-600 bg-yellow-100 prose dark:prose-invert":
            type === "warning",
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
