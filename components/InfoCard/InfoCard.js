const InfoCard = (props) => {
  //  map over data here not sure how vertical bars will effect it but YOLO
  return (
    <>
      {/* {props.trackingData.map((data) => {
        return <h1 key={data}>{data}</h1>;
      })} */}
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
    </>
  );
};

export default InfoCard;
