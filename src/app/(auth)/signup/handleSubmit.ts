import toast from "react-hot-toast";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export const handleSubmit = async (e: React.FormEvent<HTMLFormElement> , router : AppRouterInstance) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const data = Object.fromEntries(fromData);
  console.log("data from handle Submit Page", data);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const text = await res.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      console.error("Non-JSON response:", text);
      throw new Error("Server error (not JSON)");
    }
   
    toast.success("resister Successfully")
    router.push('/')

    

  } catch (error: any) {
    console.error(error);
    alert(error.message || "something went wrong");
  }
};
