import { motion, type Transition, type SVGMotionProps } from "framer-motion";

interface Props extends SVGMotionProps<SVGSVGElement> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: Partial<SVGMotionProps<SVGLineElement>> | null;
}

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 2,
  color = "currentColor",
  transition,
  lineProps = null,
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 1.25 }
  };

  const center = {
    closed: { opacity: 1 },
    opened: { opacity: 0 }
  };

  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -1.25 }
  };

  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: transition || { type: "spring", stiffness: 260, damping: 20 },
    strokeLinecap: "round",
    ...lineProps
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0.75"
        y2="0.75"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="3.25"
        y2="3.25"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export { MenuButton };