import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  SubTitleTextType,
  TextGroupType,
  TitleTextType,
} from "../types/poster";

export const textsAtom = atom<string[]>([
  "由于老板出国旅游不管员工\n先全部清仓大甩卖，半价！半价！全部半价！",
  "本活动将持续到老板回来为止!!",
]);

export const titleAtom = atom("特价大优惠");

export const subTitleAtom = atom("半价！半价！全部半价！！");

const titleTextAtom = new TitleTextType(titleAtom);

const subTitleTextAtom = new SubTitleTextType(subTitleAtom);

const textGroupAtom = new TextGroupType(textsAtom);

export const contentsAtomsAtom = atom([
  titleTextAtom,
  subTitleTextAtom,
  textGroupAtom,
]);
