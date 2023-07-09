

interface ContainerProps {
  onExecute: () => void;
}

const FunctionContainerProps: React.FC<ContainerProps> = ({ onExecute }) => {
  return (
    <>
      <div>Execute Function</div>
      <button onClick={onExecute}>Execute</button>
    </>
  );
};

export default FunctionContainerProps;
