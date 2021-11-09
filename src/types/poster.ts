import { textsAtom, titleAtom, subTitleAtom } from "../lib/store";
export interface PosterContent {}

export class TitleTextType implements PosterContent {
  constructor(content: typeof titleAtom) {
    this.kind = "titleText";
    this.atom = content;
  }
  kind: "titleText";
  atom: typeof titleAtom;
}

export class SubTitleTextType implements PosterContent {
  constructor(content: typeof subTitleAtom) {
    this.kind = "subTitleText";
    this.atom = content;
  }
  kind: "subTitleText";
  atom: typeof subTitleAtom;
}

export class TextGroupType implements PosterContent {
  constructor(content: typeof textsAtom) {
    this.kind = "textGroup";
    this.atom = content;
  }
  kind: "textGroup";
  atom: typeof textsAtom;
}
