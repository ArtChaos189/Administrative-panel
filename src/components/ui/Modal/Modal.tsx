import style from "./Modal.module.scss";

type ModaProps = {
  active: boolean;
  setActive: (act: boolean) => void;
};

export const Modal: React.FC<ModaProps> = ({ active, setActive }) => {
  return (
    <div className={active ? style.modal.active : style.modal} onClick={() => setActive(false)}>
      <div className={style.modal__content} onClick={(event) => event.stopPropagation}></div>
    </div>
  );
};
