import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@repo/utils/helpers";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-md font-medium disabled:pointer-events-none disabled:opacity-50 font-poppins",
  {
    variants: {
      variant: {
        default: "bg-primary text-black font-bold",
        secondary: "bg-secondary text-black font-bold",
        destructive: "bg-primary text-destructive font-bold",
        muted: "bg-muted text-black font-bold",
      },
      size: {
        default: "h-10 px-8 py-2",
        sm: "h-9 px-6",
        lg: "h-12 px-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
