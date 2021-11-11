export type IMAGE_SIZE = "sm" | "md" | "lg";

const SM = 100;
const MD = 150;
const LG = 200;

export const deriveImageSize = (size: IMAGE_SIZE) => {
  switch (size) {
    case "sm":
      return SM;
    case "md":
      return MD;
    case "lg":
      return LG;
  }
};
