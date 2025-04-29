"use client";
import { useState } from "react";
import { useSimpleLogTracker } from "simple-log-sdk";

export const TestingButton = () => {
  const tracker = useSimpleLogTracker();
  const [apiKey, setApiKey] = useState(localStorage.getItem("api_key") ?? "");
  return (
    <div>
      <input
        value={apiKey}
        onChange={(e) => {
          setApiKey(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          localStorage.setItem("api_key", apiKey);
          tracker.trackEvent("CLICK", { testing: "metadata" });
        }}
      >
        Trigger event
      </button>
    </div>
  );
};
