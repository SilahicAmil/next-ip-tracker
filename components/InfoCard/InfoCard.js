const InfoCard = (props) => {
  // useState here to update the state from prop.IpTracker()
  return (
    <div className="flex gap-4 bg-white h-32 items-center justify-center">
      <h1>IP HERE</h1>
      {/* vertical bar */}
      <div className="divider divider-horizontal"></div>
      <h1>Location HERE</h1>
      <div className="divider divider-horizontal"></div>
      <h1>TimeZone HERE</h1>
      <div className="divider divider-horizontal"></div>
      <h1>ISP HERE</h1>
    </div>
  );
};

export default InfoCard;
