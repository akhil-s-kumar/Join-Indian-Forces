fetch("../SSC-GD-2021-Mock-Test/tests.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("mainContainer");
  for (var i = 0; i < data.length; i++) {
    var colContainer = document.createElement("div");
    colContainer.className = "col-lg-4";
    var cardContainer = document.createElement("div");
    cardContainer.className = "card";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var heading = document.createElement("h5");
    heading.className = "card-title";
    var icon = document.createElement("i");
    icon.className = "fas fa-pen";
    heading.appendChild(icon);
    heading.innerHTML = data[i].TitleName;
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    var list1 = document.createElement("li");
    list1.innerHTML = `No: of Questions - ${data[i].noQ}`;
    cardText.appendChild(list1);
    var list2 = document.createElement("li");
    list2.innerHTML = `Maximum Score - ${data[i].maxS}`;
    cardText.appendChild(list2);
    var list3 = document.createElement("li");
    list3.innerHTML = `Difficulty Level - ${data[i].difL}`;
    cardText.appendChild(list3);
    var button = document.createElement("button");
    button.type = "button";
    button.setAttribute("onclick", `window.location.href='./Test-${data[i].id}'`);
    button.className = "btn btn-warning";
    button.innerHTML = "Take Test";
    cardBody.appendChild(heading);
    cardBody.appendChild(cardText);
    cardBody.appendChild(button);
    cardContainer.appendChild(cardBody);
    colContainer.appendChild(cardContainer);
    mainContainer.appendChild(colContainer);
  }
}
