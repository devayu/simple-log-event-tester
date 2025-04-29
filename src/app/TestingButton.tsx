"use client";
import { useState } from "react";
import { useSimpleLogTracker } from "simple-log-sdk";

export const TestingButton = () => {
  const tracker = useSimpleLogTracker();
  const [eventName, setEventName] = useState("click");
  return (
    <div>
      <input
        type="name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      ></input>
      <button
        type="button"
        onClick={() => {
          tracker.trackEvent(eventName, { testing: "metadata" });
        }}
      >
        Trigger event
      </button>
    </div>
  );
};
