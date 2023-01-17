import "./_modal.scss";
import cn from "classnames";

type ModaProps = {
  active: boolean;
  setActive: (act: boolean) => void;
};

export const Modal: React.FC<ModaProps> = ({ active, setActive }) => {
  const className = cn("modal", { "modal.active": active });

  return (
    <div className={className} onClick={() => setActive(false)}>
      <div className="modal_content" onClick={(event) => event.stopPropagation}></div>
    </div>
  );
};
