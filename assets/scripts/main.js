document.getElementById("switch").onclick = () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.getElementById("switch").src = "assets/images/moon.webp";
  } else {
    document.body.classList.add("dark-mode");
    document.getElementById("switch").src = "assets/images/sun.webp";
  }
};
let someUserData = document.getElementById("my-data");
let data = "";
fetch(`https://api.github.com/users/saadahmed18`)
  .then((response) => response.json())
  .then((userData) => {
    data = `
      <div class = "my-info">
        <div class = "image">
          <img src = "${userData.avatar_url}" alt = "User Image"/>
          <p>${userData.name}</p>
        </div>
        <div class = "info">
          <h3> Bio: <p>${userData.bio}</p></h3>
          <h3> UserName: <p>${userData.login}</p></h3>
          <a href = "${userData.html_url} target="_blank">GitHib Profile</a>
        </div>
      </div>
      <div class = "profile-info">
        <div><p><span>Fllowers: ${userData.followers} </span></p></div>
        <div><p><span>Fllowing: ${userData.following}</span></p></div>
        <div><p><span>Repositories: ${userData.public_repos}</span></p></div>
      </div>
      <div class = "repos">
      <ol type = "1" id = "ol"></ol>
      </div>
      `;
    someUserData.innerHTML = data;
  });
fetch(`https://api.github.com/users/saadahmed18/repos`)
  .then((response) => response.json())
  .then((userData) => {
    let repos = ``;
    for (let i = 0; i < userData.length; i++) {
      repos += `
          <li>
            <h3>${userData[i].name}</h3>
            <div>
              <a href = "${userData[i].html_url}" target = "_blank">Code</a>
              <a href = "${userData[i].homepage}" target = "_blank">Home Page</a></div>
          </li>
          
        `;
    }
    document.getElementById("ol").innerHTML = repos;
  });
