import { TodoCard } from "../entity/todoCard";

export const uaCheck: boolean = !!(navigator.userAgent.match(/iPhone|Android.+Mobile/));

export const maxLen: number = 12;

export const spMaxLen: number = 10;

export const maxQty: number = 10;

export const emptyMessage: string = "タイトルを入力して下さい";

export const tooLongMessage: string = `${uaCheck ? spMaxLen : maxLen}文字以下で入力して下さい`;

export const maxQtyMessage: string = `カードは${maxQty}枚以上は、作れません`;

export const isEmpty = (str: string): boolean => !str.trim();

export const isTooLong = (str: string, maxLen: number): boolean => str.trim().length > maxLen;

export const isMaxCardQty = (array: TodoCard["todoCardList"], maxQty: number): boolean => array.length > maxQty;
