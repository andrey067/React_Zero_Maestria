import MyComponent from "./my-component";

const TemplateExpression = () => {
  const name = "Audrey";

  return (
    <div>
      <h1>{name}</h1>
      <h1>{3 + 3}</h1>
      <MyComponent></MyComponent>
    </div>
  );
};

export default TemplateExpression;
