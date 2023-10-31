document.getElementById("generateUser").addEventListener("click", async () => {
  const datos = await getUser();
  console.log(datos);
  addUserUI(datos);
});

async function getUser() {
  try {
    const data = await fetch("https://random-data-api.com/api/v2/users");
    return await data.json();
  } catch (err) {
    console.log("error: ", err);
  }
}

function addUserUI(user) {
  const userList = document.getElementById("user-container");
  const element = document.createElement("div");
  element.innerHTML = `
    <strong>ID: </strong> ${user.id}
    <strong>Name: </strong> ${user.first_name}
    <strong>Last name: </strong> ${user.last_name}
    <strong>Email: </strong> ${user.email}
  `;
  userList.appendChild(element);
}
