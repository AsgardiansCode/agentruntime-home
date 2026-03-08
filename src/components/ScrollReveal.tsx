import { ReactNode, CSSProperties } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "fade-in" | "scale-in";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
}

const variantStyles: Record<AnimationVariant, { hidden: CSSProperties; visible: CSSProperties }> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    hidden: { opacity: 0, transform: "translateX(-40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    hidden: { opacity: 0, transform: "translateX(40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "scale-in": {
    hidden: { opacity: 0, transform: "scale(0.92)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
};

const ScrollReveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className,
  as: Tag = "div",
  threshold = 0.15,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const styles = variantStyles[variant];

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={cn(className)}
      style={{
        ...(isVisible ? styles.visible : styles.hidden),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
