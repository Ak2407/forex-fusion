import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

// export interface ResultBoxProps {
//   result: number;
// }

export interface SearchCurrencyProps {
  currency: string;
  setCurrency: (currency: string) => void;
}

export interface FilterProps {
  to: string;
  from: string;
  amount: number;
}

// export interface HeroProps {
//   searchParams: FilterProps;
// }
