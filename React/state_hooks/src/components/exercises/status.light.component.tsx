import React from "react";

const OnlineTextStyle = {
  color: "green",
  fontWeight: "bold",
};

const OfflineTextStyle = {
  color: "red",
  fontWeight: "bold",
};

type StatusLightProps = {
  isOnline: boolean;
};

const StatusLight: React.FC<StatusLightProps> = ({ isOnline }) => {
  console.log(isOnline);

  return (
    <div style={isOnline ? OnlineTextStyle : OfflineTextStyle}>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      <p>
        {isOnline
          ? "You are connected, Welcome!✅."
          : "You are not connected. Please log in⚠️."}
      </p>
    </div>
  );
};

function StatusLightComponent() {
  const isOnline = true;

  return (
    <div className="">
      <h1>Status Light</h1>
      <StatusLight isOnline={isOnline} />
    </div>
  );
}

export default StatusLightComponent;
