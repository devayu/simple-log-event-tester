"use client";
import { useState } from "react";
import { useSimpleLogTracker } from "simple-log-sdk";

export const TestingButton = () => {
  const tracker = useSimpleLogTracker();
  const localStorageApiKey =
    window !== undefined ? localStorage.getItem("api_key") : "";
  const [apiKey, setApiKey] = useState(localStorageApiKey ?? "");
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
          window !== undefined && localStorage.setItem("api_key", apiKey);
          tracker.trackEvent("CLICK", { testing: "metadata" });
        }}
      >
        Trigger event
      </button>
    </div>
  );
};
