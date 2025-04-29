"use client";
import { SimpleLogTrackerProvider } from "simple-log-sdk";
import { useRouter } from "next/navigation";

export function TrackerProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const getAPIKey = () => {
    return window !== undefined
      ? localStorage.getItem("api_key")
      : process.env.NEXT_PUBLIC_SIMPLE_API_KEY!!;
  };
  return (
    <SimpleLogTrackerProvider
      apiKey={getAPIKey() ?? process.env.NEXT_PUBLIC_SIMPLE_API_KEY!!}
      initOpts={{
        autoTrackRoutes: true,
        routeTrackingKey: "tracking_route",
        endpoint: process.env.NEXT_PUBLIC_SIMPLE_LOG_URL!!,
        router: router as any,
      }}
    >
      {children}
    </SimpleLogTrackerProvider>
  );
}
