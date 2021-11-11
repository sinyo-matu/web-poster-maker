export type IMAGE_SIZE = "sm" | "md" | "lg";

const SM = 250;
const MD = 300;
const LG = 400;

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
