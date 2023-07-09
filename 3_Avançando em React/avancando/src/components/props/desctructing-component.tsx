import React from "react";

interface ChildComponentProps {
  marca: string;
  km: string;
  color: string;
}

const DestructingComponent: React.FC<ChildComponentProps> = ({
  marca,
  km,
  color,
}) => {
  return (
    <div>
      <h2>Componente Filho</h2>
      <p>Marca: {marca}</p>
      <p>Quilometragem: {km}</p>
      <p>Cor: {color}</p>
    </div>
  );
};

export default DestructingComponent;
