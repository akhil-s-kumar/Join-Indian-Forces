fetch("../downloadableData.json")
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
  var mainContainer = document.getElementById("accordion");
  for (var i = 0; i < data.length; i++) {
    var cardContainer = document.createElement("div");
    cardContainer.className = "card";
    var cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.id = `heading${data[i].id}`;
    var heading = document.createElement("h5");
    heading.className = "mb-0";
    var button = document.createElement("button");
    button.className = "btn btn-link collapsed";
    button.setAttribute("data-toggle", "collapse");
    button.setAttribute("data-target", `#collapse${data[i].id}`);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `collapse${data[i].id}`);
    button.innerHTML = data[i].sectionName;
    heading.appendChild(button);
    cardHeader.appendChild(heading);
    var expandArea = document.createElement("div");
    expandArea.id = `collapse${data[i].id}`;
    if (i == 0) {
      expandArea.className = "collapse show";
    } else {
      expandArea.className = "collapse";
    }
    expandArea.setAttribute("aria-labelledby", `heading${data[i].id}`);
    expandArea.setAttribute("data-parent", "#accordion");
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    //Video Items
    var downloadItem = document.createElement("div");
    downloadItem.className = "download-item";
    for (var j = 0; j < data[i].fileName.length; j++) {
      var darkLight = document.createElement("ul");
      if (j % 2 == 0) {
        darkLight.className = "dark";
      } else {
        darkLight.className = "light";
      }
      var list1 = document.createElement("li");
      var icon = document.createElement("i");
      icon.className = "fa fa-file-pdf-o lefticon";
      list1.appendChild(icon);
      var lessonTitle = document.createElement("a");
      lessonTitle.target = "_blank";
      lessonTitle.href = data[i].fileName[j].url;
      lessonTitle.innerHTML = data[i].fileName[j].title;
      list1.appendChild(lessonTitle);
      var list2 = document.createElement("li");
      var badge = document.createElement("span");
      badge.className = "badge badge-pages";
      badge.innerHTML = data[i].fileName[j].pages;
      list2.appendChild(badge);
      darkLight.appendChild(list1);
      darkLight.appendChild(list2);
      downloadItem.appendChild(darkLight);
    }
    cardBody.appendChild(downloadItem);
    expandArea.appendChild(cardBody);
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(expandArea);
    mainContainer.appendChild(cardContainer);
  }
}
