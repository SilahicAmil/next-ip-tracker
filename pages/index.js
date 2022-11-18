import FormInput from "../components/FormInput/FormInput";
import InfoCard from "../components/InfoCard/InfoCard";
import { useState } from "react";

const HomePage = (props) => {
  const [trackerData, setTrackerData] = useState([
    {
      ip: "111.1.111.123",
      location: { country: "US", region: "Texas", timezone: "-6:00" },
      isp: "Comcast Cable",
    },
  ]);
  // useEffect might be good here
  const getIpInfoHandler = async (enteredIp) => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_jLdWqCECrDZ5WNMDQd7RSSkc4HHTF&ipAddress=${enteredIp}`
    );
    const data = await response.json();

    // console.log(data);

    // const arrData = Object.entries(data);

    setTrackerData(data);
    console.log(trackerData);

    // const ipData = {
    //   ip: data.ip,
    //   location: data.location,
    //   isp: data.isp,
    //   timeZone: data.location.timezone,
    // };

    // setTrackerData(ipData);
    // console.log(trackerData);
  };

  return (
    <>
      <h1 className="text-2xl bg-red-500 font-mono">IP Address Tracker</h1>
      <FormInput onSearchIp={getIpInfoHandler} />
      {/* pass ipData here */}
      {/* {trackerData} */}
      <InfoCard trackingData={trackerData} />
    </>
  );
};

export default HomePage;
