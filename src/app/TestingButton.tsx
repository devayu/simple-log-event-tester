"use client";
import { useState } from "react";
import { useSimpleLogTracker } from "simple-log-sdk";

export const TestingButton = () => {
  const tracker = useSimpleLogTracker();
  return (
    <button
      type="button"
      onClick={() => {
        tracker.trackEvent("CLICK", { testing: "metadata" });
      }}
    >
      Trigger event
    </button>
  );
};
