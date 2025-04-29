import { TestingButton } from "@/app/TestingButton";
import { cookies } from "next/headers";

export default async function Home() {
  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        const apiKey = formData.get("api") as string;
        (await cookies()).set("apiKey", apiKey ?? "");
      }}
    >
      <div>
        <input
          type="text"
          name="api"
          defaultValue={(await cookies()).get("apiKey")?.value}
        ></input>
        <button>Set key</button>
        <TestingButton></TestingButton>
      </div>
    </form>
  );
}
