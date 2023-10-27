export const appearingText = {
  hidden: { opacity: 0, x: -1000, scale: 0.3 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
};

export const appearingText2 = {
  hidden: { opacity: 0, x: -200, y: 20, scale: 0.5 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 1 } },
};
export const appearingText3 = {
  hidden: { opacity: 0, x: -1000, y: 300, scale: 0.5 },
  visible: { opacity: 1, x: 0, y: [100, 20, 0], scale: 1, transition: { duration: 1 } },
};
export const herotext = {
  hidden: { opacity: 0, x: -100, y: 20, scale: 0.5 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};
export const insightDots = {
  hidden: { opacity: 0, x: 200, scale: 0.5 },
  visible: {
    opacity: [0.2,0.3,0.5,0.8,1],
    x: 0,
    scale: [0.6,0.7,0.8,0.9,1],
    transition: { duration: 1 },
  },
};

export const insightText = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: [0.2,0.3,0.5,0.8,1],
    scale: [0.6,0.7,0.8,0.9,1],
    transition: { duration: 1 },
  },
};
export const witchIcon = {
  hidden: { opacity: 0, x:-100, y:50 },
  visible: {
    opacity: [0.2,0.3,0.5,0.8,1],
    transition: { duration: 1 },
    x: 0,
    y:0
  },
};
export const bubbleIcon = {
  hidden: { opacity: 0, x:600, y:-20 },
  visible: {
    opacity: [0.2,0.3,0.5,0.8,1],
    transition: { duration: 2 },
    x: 0,
    y:[0,5,0]
  },
};


