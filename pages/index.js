import FormInput from "../components/FormInput/FormInput";
import InfoCard from "../components/InfoCard/InfoCard";

const HomePage = () => {
  const getIpInfoHandler = async (enteredIp) => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_jLdWqCECrDZ5WNMDQd7RSSkc4HHTF&ipAddress=${enteredIp}`
    ).then((response) => response.json());

    const data = response;

    const ipData = {
      ip: data.ip,
      location: data.location,
      isp: data.isp,
      timeZone: data.location.timezone,
    };

    console.log(ipData);
  };

  return (
    <>
      <h1 className="text-2xl bg-red-500 font-mono">IP Address Tracker</h1>
      <FormInput onSearchIp={getIpInfoHandler} />
      {/* pass ipData here */}
      <InfoCard />
    </>
  );
};

export default HomePage;
