const IMAGE_SM = 250;
const IMAGE_MD = 300;
const IMAGE_LG = 400;

export type IMAGE_SIZE = "sm" | "md" | "lg";

export const deriveImageSize = (size: IMAGE_SIZE) => {
  switch (size) {
    case "sm":
      return IMAGE_SM;
    case "md":
      return IMAGE_MD;
    case "lg":
      return IMAGE_LG;
  }
};

const WINDOW_SIZE = {
  MobileS: "320px",
  MobileM: "375px",
  MobileL: "425px",
  Tablet: "768px",
  Laptop: "1024px",
  LaptopL: "1440px",
  Desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${WINDOW_SIZE.MobileS})`,
  mobileM: `(min-width: ${WINDOW_SIZE.MobileM})`,
  mobileL: `(min-width: ${WINDOW_SIZE.MobileL})`,
  tablet: `(min-width: ${WINDOW_SIZE.Tablet})`,
  laptop: `(min-width: ${WINDOW_SIZE.Laptop})`,
  laptopL: `(min-width: ${WINDOW_SIZE.LaptopL})`,
  desktop: `(min-width: ${WINDOW_SIZE.Desktop})`,
  desktopL: `(min-width: ${WINDOW_SIZE.Desktop})`,
};
