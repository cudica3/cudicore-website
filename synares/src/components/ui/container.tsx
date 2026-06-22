import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export { Container };