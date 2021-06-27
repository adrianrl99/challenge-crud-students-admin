import { MouseEventHandler } from "react";

export interface ButtonProps {
  icon?: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  color: string;
  backgroundColor: string;
}
