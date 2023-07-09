import React from "react";

interface ContainerProps {
  msg: string;
}

const StateLiftComponet: React.FC<ContainerProps> = ({ msg }) => {
  return <div>A mensagem é: {msg}</div>;
};

export default StateLiftComponet;
