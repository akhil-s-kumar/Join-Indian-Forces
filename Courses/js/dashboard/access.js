const login = () => {
  var password = document.querySelector('input[id="InputPassword"]').value;
  fetch("./registeredCandidates.json", {
    cache: "no-store",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].RollNumber === password && data[i].isActive === "true") {
          var date = new Date();
          date.setDate(date.getDate() + 7)
          localStorage.setItem("password", password);
          localStorage.setItem(
            "Name",
            data[i].FirstName + " " + data[i].LastName
          );
          localStorage.setItem("expiry", date);
          location.reload();
          break;
        } else if (i == data.length - 1) {
          if (data[i].RollNumber != password) {
            alert("Sorry, You are not registered for this course");
            location.reload();
          }
        }
      }
    });
  return false;
};

const logout = () =>{
    localStorage.clear();
    location.reload();
}

const mainContainer = document.getElementById("main");
const uname = localStorage.getItem("Name");
const password = localStorage.getItem("password");
const expiry = localStorage.getItem("expiry");
if (uname == null || password == null || expiry == null) {
  const login = `
    <div class="container login d-flex justify-content-center">
      <div class="row align-items-center" style="min-height: 100vh">
        <div class="col-lg-12">
          <h1>Login</h1>
          <p>Use the password provided by the admin!</p>
          <form class="form-inline" onsubmit="return login()">
            <div class="form-row">
              <div class="col">
                <input type="password" required name="password" class="form-control" autocomplete="on" id="InputPassword" placeholder="Password">
              </div>
              <div class="col">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    `;
  mainContainer.innerHTML = login;
} else {
  const name = localStorage.getItem("Name");
  const sections = `
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="head">
            <div class="d-flex justify-content-between">
                <div>
                    <h5>${name.split(" ")[0]}, <span id="lblGreetings"></span></h5>
                    <p>Keep your learning streaks high.</p>
                </div>
                <div>
                    <button onclick="logout()" class="btn btn-primary">Logout</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row cardcontainer">
        <div class="col-lg-4">
          <div class="card shadow card1">
            <a href="./Curriculum" style="text-decoration: none">
              <div class="card-body">
                <h3><i class="fa fa-file-video-o"></i>Curriculum</h3>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card shadow card2">
            <a href="./Downloads" style="text-decoration: none">
              <div class="card-body">
                <h3><i class="fa fa-cloud-download"></i>Downloads</h3>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card shadow card3">
            <a onclick="discussion()" style="text-decoration: none">
              <div class="card-body">
                <h3><i class="fa fa-comments"></i>Discussion</h3>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card shadow card4">
            <a href="./Mock-Test/" style="text-decoration: none">
              <div class="card-body">
                <h3><i class="fa fa-check-square-o"></i>Mock Tests</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    `;
  mainContainer.innerHTML = sections;
}
