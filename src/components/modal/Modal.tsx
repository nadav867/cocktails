import classes from "./Modal.module.css";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
