import cn from "classnames";

import { ModaProps } from "./type";

import "./_modal.scss";

export const Modal: React.FC<ModaProps> = ({ active, setActive }) => {
  const className = cn("modal", { "modal.active": active });

  return (
    <div className={className} onClick={() => setActive(false)}>
      <div className="modal_content" onClick={(event) => event.stopPropagation}></div>
    </div>
  );
};
