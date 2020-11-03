let resetPass = async () => {
  let randomString = document.querySelector("#resetString").value;
  let newPassword = document.querySelector("#newPassword").value;
  let email = document.querySelector("#email").value;

  try {
    let response = await fetch(
      "https://resetpassworddbase.herokuapp.com/user/newPassword",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          resetString: randomString,
          password: newPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let responseData = await response.json();
    alert(responseData.message);
  } catch (error) {
    console.log(error);
  }
};
