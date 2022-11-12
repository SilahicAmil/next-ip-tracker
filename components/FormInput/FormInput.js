import { useRef } from "react";

const FormInput = (props) => {
  const ipAddressRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const ipAddressRefValue = ipAddressRef.current.value;
    console.log(ipAddressRefValue);
    ipAddressRef.current.value = "";
  };
  return (
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
  );
};

export default FormInput;
