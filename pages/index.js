import FormInput from "../components/FormInput/FormInput";
import InfoCard from "../components/InfoCard/InfoCard";

const HomePage = () => {
  return (
    <>
      <h1 className="text-2xl bg-red-500 font-mono">IP Address Tracker</h1>
      <FormInput />
      <InfoCard />
    </>
  );
};

export default HomePage;
