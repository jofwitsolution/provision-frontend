import React from "react";

const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="USA Office"
          id="gmap_canvas"
          width={"100%"}
          height={"100%"}
          src="https://www.google.com/maps/embed/v1/place?q=31+Hazelville+Road,+Birmingham,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
