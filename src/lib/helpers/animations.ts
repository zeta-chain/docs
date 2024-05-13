interface GetRevealPropsArgs {
  y?: number;
  x?: number;
  delay?: number;
  opacity?: number;
  scale?: number;
  transitionType?: string;
  duration?: number;
}

export const getRevealProps = ({
  y = 24,
  x = 0,
  delay = 0.1,
  opacity = 1,
  scale = 1,
  transitionType = "spring",
}: GetRevealPropsArgs) => ({
  viewport: { once: true, margin: "-60px" },
  initial: "hidden",
  whileInView: "visible",
  variants: {
    hidden: {
      opacity: 0,
      y,
      x,
      scale,
    },
    visible: {
      opacity,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: transitionType,
        stiffness: 500,
        damping: 200,
        delay,
      },
    },
  },
});

// oposite of reveal props
export const getHideProps = ({
  y = 0,
  x = 0,
  delay = 0.1,
  opacity = 1,
  scale = 1,
  transitionType = "spring",
  duration = 0.3,
}: GetRevealPropsArgs) => ({
  viewport: { once: true, margin: "-60px" },
  initial: "visible",
  whileInView: "hidden",
  variants: {
    hidden: {
      opacity: 0,
      y,
      x,
      scale,
      transition: {
        type: transitionType,
        stiffness: 500,
        damping: 200,
        delay,
        duration,
      },
    },
    visible: {
      opacity,
      y: 0,
      x: 0,
      scale: 1,
    },
  },
});

export const getOscilateProps = ({ duration = 5 }: { duration?: number }) => ({
  animate: { opacity: [0.5, 1, 0.5], filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"] },
  transition: {
    repeat: Infinity,
    duration,
  },
});

export const getOscilateOpacityProps = ({ duration = 5 }: { duration?: number }) => ({
  animate: { opacity: [0.2, 1, 0.2] },
  transition: {
    repeat: Infinity,
    duration,
  },
});

export const getRotateProps = ({ duration = 5 }: { duration?: number }) => ({
  animate: { rotate: [0, 360] },
  transition: {
    repeat: Infinity,
    duration,
  },
});

export const animatePresenceVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 700 : -700,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 700 : -700,
      opacity: 0,
    };
  },
};
