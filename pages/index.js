import { use, useRef } from "react";

const HomePage = () => {
  const ipAddressRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const ipAddressRefValue = ipAddressRef.current.value;
    console.log(ipAddressRefValue);
    ipAddressRef.current.value = "";
  };

  return (
    <>
      <h1 className="text-2xl bg-red-500 font-mono">IP Address Tracker</h1>
      <form action="">
        <label htmlFor="Input IP Address" />
        <input
          type="text"
          ref={ipAddressRef}
          placeholder="Enter IP Address Here"
          className="bg-white text-black"
        />
        <button type="submit" className="btn" onClick={formSubmitHandler}>
          Submit
        </button>
      </form>
    </>
  );
};

export default HomePage;
