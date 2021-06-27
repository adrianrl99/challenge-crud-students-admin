import { AppColors } from "app";
import { MessageProps } from "./Message.interface";

export default function Message({ message }: MessageProps) {
  return (
    <>
      {message && <h4>{message}</h4>}
      <style jsx>{`
        h4 {
          width: 90%;
          background-color: ${AppColors.warning.main};
          color: ${AppColors.warning.on};
          padding: 20px 10px;
          margin: 0;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}
