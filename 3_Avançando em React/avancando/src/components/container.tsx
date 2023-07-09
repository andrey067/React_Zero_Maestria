import React, { ReactNode } from "react";



interface ContainerProps {
    children: ReactNode;
    myValue:string
  }


  const Container: React.FC<ContainerProps> = ({ children, myValue }) => {
    return (
      <>
        <h2>Este é o título do container</h2>
        {children}

        <h2>Este é o valor do myValue: {myValue}</h2>

      </>
    );
  };
export default Container;
