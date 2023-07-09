const Events = () => {
  const handleMyEvent = (e: any) => {
    console.log(e);
    console.log("Click");
  };

  return (
    <>
      <div>
        <div>
          <button onClick={handleMyEvent}> click aqui</button>
        </div>
      </div>

      <div>
        <div>
          <button onClick={() => console.log("Clicado")}>
            click aqui Tambem
          </button>
        </div>
      </div>
    </>
  );
};

export default Events;
