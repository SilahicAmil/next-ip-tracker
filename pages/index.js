import FormInput from "../components/FormInput/FormInput";
import InfoCard from "../components/InfoCard/InfoCard";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = (props) => {
  const [trackerData, setTrackerData] = useState([]);
  // useEffect might be good here
  const getIpInfoHandler = useCallback(
    async (enteredIp) => {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=at_jLdWqCECrDZ5WNMDQd7RSSkc4HHTF&ipAddress=${enteredIp}`
      );
      const data = await response.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          data: data,
        });
      }

      setTrackerData(loadedData);
      console.log(trackerData);

      // const ipData = {
      //   ip: data.ip,
      //   location: data.location,
      //   isp: data.isp,
      //   timeZone: data.location.timezone,
      // };

      // setTrackerData(ipData);
      // console.log(trackerData);
    },
    [trackerData]
  );

  // useEffect(() => {
  //   getIpInfoHandler();
  // }, [getIpInfoHandler]);

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
