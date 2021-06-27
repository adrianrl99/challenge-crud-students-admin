import { useState } from "react";
import { ModalProps } from "./Modal.interface";

export default function Modal({ button, children }: ModalProps) {
  const [state, setState] = useState(false);

  const onClose = () => {
    setState(false);
  };

  const onClick = () => {
    setState(true);
  };

  return (
    <>
      {state && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            {children(onClose)}
          </div>
        </div>
      )}
      {button(onClick)}
      <style jsx>{`
        .modal {
          display: flex;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: fit-content;
        }
        .close {
          color: #aaaaaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
