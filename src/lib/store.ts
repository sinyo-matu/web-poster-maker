import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  SubTitleTextType,
  TextGroupType,
  TitleTextType,
} from "../types/poster";

export const textsAtom = atomWithStorage<string[]>("texts-init", [
  "由于老板出国旅游不管员工\n先全部清仓大甩卖，半价！半价！全部半价！",
  "本活动将持续到老板回来为止!!",
]);

export const titleAtom = atomWithStorage("title-init", "特价大优惠");

export const subTitleAtom = atomWithStorage(
  "subTitle-nit",
  "半价！半价！全部半价！！"
);

const titleTextAtom = new TitleTextType(titleAtom);

const subTitleTextAtom = new SubTitleTextType(subTitleAtom);

const textGroupAtom = new TextGroupType(textsAtom);

export const contentsAtomsAtom = atomWithStorage("atoms", [
  titleTextAtom,
  subTitleTextAtom,
  textGroupAtom,
]);
