import { useRef } from "react";

const FormInput = (props) => {
  // add eorr handing for invalid IP
  const ipAddressRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const ipAddressRefValue = ipAddressRef.current.value;

    props.onSearchIp(ipAddressRefValue);

    ipAddressRef.current.value = "";
  };

  return (
    <>
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

export default FormInput;
