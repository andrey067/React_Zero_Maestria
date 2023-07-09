import DestructingComponent from "./desctructing-component";
import FilhoComponent from "./filho-component";

const PaiComponent = () => {
  return (
    <>
      <div>
        <FilhoComponent name="Audrey" />
      </div>

      <div>
        <DestructingComponent marca="Marca" km="kms" color="red" />
      </div>
    </>
  );
};

export default PaiComponent;
