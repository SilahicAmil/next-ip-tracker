import FormInput from "../components/FormInput/FormInput";
import InfoCard from "../components/InfoCard/InfoCard";

const HomePage = () => {
  const getIpInfoHandler = async (enteredIp) => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_jLdWqCECrDZ5WNMDQd7RSSkc4HHTF&ipAddress=${enteredIp}`,
      {
        method: "GET",
      }
    );
    //  follow what I did in advice project
    // but for the data just for loop and create own object or array of data
    // so its easier to use
  };

  return (
    <>
      <h1 className="text-2xl bg-red-500 font-mono">IP Address Tracker</h1>
      <FormInput onSearchIp={getIpInfoHandler} />
      <InfoCard />
    </>
  );
};

export default HomePage;
