import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
};

type Props = BaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 shadow-sm";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-900 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-amber-500",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg focus-visible:outline-slate-900",
  ghost:
    "bg-white/70 text-slate-900 border border-slate-200 hover:bg-white hover:shadow-md backdrop-blur focus-visible:outline-amber-400",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
