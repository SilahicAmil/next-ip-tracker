import { useRef } from "react";

const FormInput = (props) => {
  const ipAddressRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const ipAddressRefValue = ipAddressRef.current.value;

    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_jLdWqCECrDZ5WNMDQd7RSSkc4HHTF&ipAddress=${ipAddressRefValue}`,
      {
        method: "GET",
      }
    );
    const data = response.json();

    console.log(data);

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
