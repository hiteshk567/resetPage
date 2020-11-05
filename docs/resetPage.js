let resetPass = async () => {
  let randomString = document.querySelector("#resetString").value;
  let newPassword = document.querySelector("#newPassword").value;

  try {
    let response = await fetch("http://localhost:3000/api/user/newPassword", {
      method: "POST",
      body: JSON.stringify({
        resetString: randomString,
        password: newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let responseData = await response.json();
    alert(responseData.message);
  } catch (error) {
    alert("Could not change password");
  }
};
