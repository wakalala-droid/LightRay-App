import React from "react";
import LightRays from "./LightRays";

function App() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.4}
        lightSpread={1.4}
        rayLength={4.4}
        followMouse={true}
        mouseInfluence={0.8}
        noiseAmount={0.1}
        distortion={0.0}
        className="custom-rays"
      />
    </div>
  );
}

export default App;  