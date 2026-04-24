
export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData);
  //  const userData = {
  //   UserEmail : data.email,
  //   userPassword : data.password
  //  }
    // const { email , password} = data
    console.log("data from login Submit Page" , data);
  };

