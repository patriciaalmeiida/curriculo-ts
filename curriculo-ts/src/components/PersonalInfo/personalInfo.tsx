import React, { useState } from "react";
import InterfaceContatos from "../../types/InterfaceContatos";
import { InterfacePerfil } from "../../types/InterfacePerfil";

function PersonalInfo(props: InterfacePerfil) {

  
  const { contatos, educacao } = props

  
  const [mostrarContatos, setMostraContatos] = useState(false);

  
  const toggleContatos = () => {
    console.log("hahaha")
    setMostraContatos(!mostrarContatos);
  };

  return (
    
    <aside>
      <div className="sidebar">
        <h3>Contatos</h3>

        <button onClick={() => toggleContatos()}>Mostrar Contatos</button>
        {mostrarContatos && (
          <div className="lista-de-contatos">
            {contatos.map((item: InterfaceContatos) => {
              return <li key={item.id}>
                <div className="item-contato">
                  <h4>{item.tipo}</h4>
                  <p>{item.contato}</p>
                </div>
              </li>;
            })}
          </div>
        )}
      </div>
      <div className="sidebar">
        <h3>Educação</h3>
        <div className="lista-de-formacao">
          <li>
            <h4>Campinas Tech Talents</h4>
            <p>Front-end developer 2021 - 2021</p>
          </li>
          <li>
            <h4>UNIP</h4>
            <p>Marketing 2020 - 2022</p>
          </li>
        </div>
      </div>
    </aside>
  );
}

export default PersonalInfo;
