import { atom } from "recoil";

export const codeAtom = atom({
  key: "codeAtom",
  default: "//Enter your code here",
});

export const testCaseAtom = atom({
  key: "testCaseAtom",
  default: "Enter you input here",
});

export const testCaseOutputAtom = atom({
  key: "testCaseOutputAtom",
  default: "",
});

export const languageAtom = atom({
  key: "languageAtom",
  default: "C++",
});
