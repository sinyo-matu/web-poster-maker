import { atom, PrimitiveAtom } from "jotai";
import {
  ImageProperty,
  ImageType,
  SubTitleProperty,
  SubTitleTextType,
  TextGroupProperty,
  TextGroupType,
  TitleProperty,
  TitleTextType,
} from "../types/poster";
import { atomWithStorage, random } from "./utility";

const textsKey = `texts-init`;
export const textsAtom = atomWithStorage<TextGroupProperty>(textsKey, {
  content:
    "由于老板出国旅游不管员工\n先全部清仓大甩卖，半价！半价！全部半价！\n\n本活动将持续到老板回来为止!!",
});
const titleKey = `title-init`;
export const titleAtom = atomWithStorage<TitleProperty>(titleKey, {
  content: "特价大优惠",
});
const subTitleKey = `subTitle-init`;
export const subTitleAtom = atomWithStorage<SubTitleProperty>(subTitleKey, {
  content: "半价！半价！全部半价！！",
});

const titleText = new TitleTextType(titleKey, titleAtom);
export const showSavedModalAtom = atom(false);

const subTitleText = new SubTitleTextType(subTitleKey, subTitleAtom);

const textGroup = new TextGroupType(textsKey, textsAtom);

function parseContentKeys(
  contentKeys: string[]
): (TitleTextType | SubTitleTextType | TextGroupType | ImageType)[] {
  return contentKeys.map((key) => {
    const keyPrefix = key.split("-")[0];
    switch (keyPrefix) {
      case "title":
        const titleRaw = localStorage.getItem(key);
        const titleAtom: PrimitiveAtom<TitleProperty> = atomWithStorage(
          key,
          JSON.parse(titleRaw ? titleRaw : " ")
        );
        return new TitleTextType(key, titleAtom);
      case "subTitle":
        const subTitleRaw = localStorage.getItem(key);
        const subTitleAtom: PrimitiveAtom<SubTitleProperty> = atomWithStorage(
          key,
          JSON.parse(subTitleRaw ? subTitleRaw : " ")
        );
        return new SubTitleTextType(key, subTitleAtom);
      case "texts":
        const textsRaw = localStorage.getItem(key);
        const textsAtom: PrimitiveAtom<TextGroupProperty> = atomWithStorage(
          key,
          JSON.parse(textsRaw ? textsRaw : " ")
        );
        return new TextGroupType(key, textsAtom);
      case "image":
        const imageRaw = localStorage.getItem(key);
        const imageAtom: PrimitiveAtom<ImageProperty> = atomWithStorage(
          key,
          JSON.parse(imageRaw ? imageRaw : " ")
        );
        return new ImageType(key, imageAtom);
      default:
        const defaultAtom: PrimitiveAtom<TitleProperty> = atomWithStorage(
          key,
          JSON.parse(localStorage.getItem(key)!)
        );
        return new TitleTextType(key, defaultAtom);
    }
  });
}

export const contentsAtomsAtom = atomWithStorage<
  (TitleTextType | SubTitleTextType | TextGroupType | ImageType)[]
>("atoms", [titleText, subTitleText, textGroup], {
  setItem: (key, newValue) => {
    const contentKeys = newValue.map((type) => {
      return type.key;
    });
    localStorage.setItem(key, JSON.stringify(contentKeys));
  },
  getItem: (key) => {
    const contentKeys: string[] = JSON.parse(localStorage.getItem(key)!);
    return parseContentKeys(contentKeys);
  },
});

export const setContentsAtomsAtom = atom(
  (get) => get(contentsAtomsAtom),
  (_, set, posterTitle: string) => {
    const posterContent: { [index: string]: string } = JSON.parse(
      localStorage.getItem(posterTitle)!
    );
    const contentKeys = Object.keys(posterContent);
    for (const [contentKey, content] of Object.entries(posterContent)) {
      localStorage.setItem(contentKey, content);
    }
    set(contentsAtomsAtom, parseContentKeys(contentKeys));
  }
);

export const savedPosterAtom = atomWithStorage<string[]>("savedPosters", []);

export const addToSavedPosterAtom = atom(
  (get) => get(savedPosterAtom),
  (get, set, posterTitle: string) => {
    const savedPosters = get(savedPosterAtom);
    if (savedPosters.includes(posterTitle)) {
      posterTitle = `${posterTitle}_${random(8)}`;
    }
    let posterContent: { [index: string]: string } = {};
    let contentKeys: string[] = JSON.parse(localStorage.getItem("atoms")!);
    for (const contentKey of contentKeys) {
      const content = localStorage.getItem(contentKey)!;
      posterContent[contentKey] = content;
    }
    localStorage.setItem(posterTitle, JSON.stringify(posterContent));
    set(savedPosterAtom, [...savedPosters, posterTitle]);
  }
);

export const remoteFromSavedPosterAtom = atom(
  (get) => get(savedPosterAtom),
  (get, set, posterTitle: string) => {
    const savedPosters = get(savedPosterAtom);
    const index = savedPosters.indexOf(posterTitle);
    if (index !== -1) {
      savedPosters.splice(index, 1);
    }
    localStorage.removeItem(posterTitle);
    set(savedPosterAtom, [...savedPosters]);
  }
);

export const posterTitleAtom = atom<string>((get) => {
  const titleTypes = get(contentsAtomsAtom).filter(
    (type): type is TitleTextType => type.kind === "titleText"
  );
  if (titleTypes.length === 0) {
    return `poster`;
  }
  const firstTitle = get(titleTypes[0].atom);
  if (firstTitle.content.length === 0) {
    return `poster`;
  }
  return `${firstTitle.content}`;
});
