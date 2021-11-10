import { textsAtom, titleAtom, subTitleAtom } from "../lib/store";
interface PosterContent {}
export interface TitleProperty {
  content: string;
}
export interface SubTitleProperty {
  content: string;
}
export interface TextGroupProperty {
  content: string;
}

export class TitleTextType implements PosterContent {
  constructor(key: string, content: typeof titleAtom) {
    this.kind = "titleText";
    this.key = key;
    this.atom = content;
  }
  kind: "titleText";
  key: string;
  atom: typeof titleAtom;
}

export class SubTitleTextType implements PosterContent {
  constructor(key: string, content: typeof subTitleAtom) {
    this.kind = "subTitleText";
    this.key = key;
    this.atom = content;
  }
  kind: "subTitleText";
  key: string;
  atom: typeof subTitleAtom;
}

export class TextGroupType implements PosterContent {
  constructor(key: string, content: typeof textsAtom) {
    this.kind = "textGroup";
    this.key = key;
    this.atom = content;
  }
  kind: "textGroup";
  key: string;
  atom: typeof textsAtom;
}
