import { ButtonProps } from "./Button.interface";
import Icon from "@mdi/react";

export default function Button({
  icon,
  text,
  onClick,
  color,
  backgroundColor,
}: ButtonProps) {
  return (
    <>
      <button className="button" onClick={onClick}>
        {icon && (
          <div className="icon">
            <Icon path={icon} size={1} />
          </div>
        )}
        {text}
      </button>
      <style jsx>{`
        .icon {
          display: flex;
          margin-right: 5px;
        }

        .button {
          display: flex;
          background-color: ${backgroundColor};
          color: ${color};
          border: none;
          padding: 5px 10px;
          margin: 0 5px;
          align-items: center;
          font-size: 15px;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}
