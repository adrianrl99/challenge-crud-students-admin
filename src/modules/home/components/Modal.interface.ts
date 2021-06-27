export interface ModalProps {
  children: (close: Fun) => JSX.Element | JSX.Element[];
  button: (close: Fun) => JSX.Element;
}

type Fun = () => void;
