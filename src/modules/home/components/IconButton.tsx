import { IconButtonProps } from "./IconButton.interface";
import Icon from "@mdi/react";

export default function IconButton({ icon, onClick, color }: IconButtonProps) {
  return (
    <>
      <button className="button" onClick={onClick}>
        <div className="icon">
          <Icon path={icon} size={1} />
        </div>
      </button>
      <style jsx>{`
        .icon {
          display: flex;
          margin: 5px;
        }

        .button {
          display: flex;
          color: ${color};
          background: transparent;
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
