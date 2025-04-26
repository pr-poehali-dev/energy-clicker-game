import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeGreenVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-green-600 text-white hover:bg-green-600/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeGreenProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeGreenVariants> {}

function BadgeGreen({ className, variant, ...props }: BadgeGreenProps) {
  return (
    <div className={cn(badgeGreenVariants({ variant }), className)} {...props} />
  );
}

export { BadgeGreen, badgeGreenVariants };
