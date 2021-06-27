import { MouseEventHandler } from "react";

export interface IconButtonProps {
  icon: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  color: string;
}
