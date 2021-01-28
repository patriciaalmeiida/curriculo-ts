import React from "react";
import InterfaceExperiencia from "../../types/InterfaceExperiencia";



function PersonalExpItem(props: InterfaceExperiencia) {
  const { id, cargo, periodo, empresa, local, conteudo } = props

  return (
    <div className="experience-item">
      <div>
        <h4>{cargo}</h4>
        <span>{periodo}</span>

        <strong>{empresa}</strong>
        <span>{local}</span>
      </div>
      <p>{conteudo}</p>
    </div>
  );
}
export default PersonalExpItem;