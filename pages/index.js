import FormInput from "../components/FormInput/FormInput";
import InfoCard from "../components/InfoCard/InfoCard";
import { useState } from "react";

const HomePage = (props) => {
  const [trackerData, setTrackerData] = useState({});
  // convert to getserversideprops
  const getIpInfoHandler = async (enteredIp) => {
    // setTrackerData(ipData);
    // props.trackingData(ipData);
  };

  return (
    <>
      <h1 className="text-2xl bg-red-500 font-mono">IP Address Tracker</h1>
      <FormInput onSearchIp={getIpInfoHandler} />
      {/* pass ipData here */}
      {/* {trackerData} */}
      {/* <InfoCard trackingData={props.data} /> */}
    </>
  );
};

export default HomePage;

// get staticPRops

// export const getStaticProps = async () => {
//   const response = await fetch(
//     `https://geo.ipify.org/api/v2/country?apiKey=at_jLdWqCECrDZ5WNMDQd7RSSkc4HHTF&ipAddress=${"98.33.186.127"}`
//   );

//   const data = response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
