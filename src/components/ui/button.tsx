import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      onClick,
      type = "button",
    },
    ref
  ) => {
    const baseClasses = cn(
      "relative inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
      "transform hover:scale-[1.02] active:scale-[0.98] group"
    );

    const variants = {
      primary: cn(
        "bg-blue-800 text-white shadow-lg font-semibold",
        "focus-visible:ring-blue-500"
      ),
      secondary: cn(
        "bg-gray-100 text-gray-900 shadow-md",
        "focus-visible:ring-gray-500"
      ),
      outline: cn(
        "border-2 border-blue-500 bg-transparent text-blue-600 shadow-sm",
        "focus-visible:ring-blue-500"
      ),
      ghost: cn(
        "bg-transparent text-gray-700",
        "focus-visible:ring-gray-500"
      ),
      destructive: cn(
        "bg-red-500 text-white shadow-lg",
        "focus-visible:ring-red-500"
      ),
    };

    const sizes = {
      sm: "px-4 py-2 text-sm h-9",
      md: "px-6 py-3 text-base h-11",
      lg: "px-8 py-4 text-lg h-12",
      xl: "px-10 py-5 text-xl h-16",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={onClick}
        type={type}
      >
        {loading ? (
          <>
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {children}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
