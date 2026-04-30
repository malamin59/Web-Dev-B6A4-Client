export const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const data = Object.fromEntries(fromData);
  console.log("data from handle Submit Page", data);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body : JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result)
    alert("user create successfully!")
  } catch (error) {
    console.error(error)
    alert("something went wrong")
  }
};
