import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Component = "section", container = true, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("py-16 md:py-24", className)}
        {...props}
      >
        {container ? (
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Section.displayName = "Section";

export { Section };