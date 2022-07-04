const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

<style>
.card{
    border: none;
    border-radius: 15px;
    background-color: #FBFBFF;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
.card .card-body .career-head h2{
    font-size: 18px;
    font-weight: 600;
  }
  
.card .card-body .career-head i{
    font-size: 15px;
    margin-right: 20px;
  }
  
.card .card-body .career-head p{
    font-size: 15px;
    font-weight: 500;
  }
  
.card .card-body .career-otherDetails h3{
    font-size: 15px;
    font-weight: 600;
  }
  
.card .card-body .career-otherDetails i{
    font-size: 20px;
    margin-right: 15px;
    color: #f35f00;
  }
  
.card .card-body .career-otherDetails p{
    opacity: 0.8;
    font-size: 15px;
    font-weight: 500;
  }
</style>

<div class="card shadow">
    <div class="card-body">
        <div class="career-head">
            <div class="d-flex justify-content-between">
                <h2 id="jobTitle"></h2>
                <p><span class="badge badge-warning" id="type"></span></p>
            </div>
            <p id="qualification"></p>
            <p id="experience"></p>
        </div>
        <hr>
        <div class="career-otherDetails">
            <div class="d-flex justify-content-between">
                <h3><i class="fa fa-map-marker"></i>Location</h3>
                <p id="location"></p>
            </div>
            <div class="d-flex justify-content-between">
                <h3><i class="fa fa-clock-o"></i>Apply Before</h3>
                <p id="applyBefore">30-07-2022</p>
            </div>
        </div>
    </div>
</div>
`;
class CardTemplate extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    this.shadowRoot.getElementById("jobTitle").innerHTML =
      this.getAttribute("jobTitle");
    this.shadowRoot.getElementById("type").innerHTML =
      this.getAttribute("type");
    this.shadowRoot.getElementById("qualification").innerHTML =
      '<i class="fa fa-graduation-cap"></i>' +
      this.getAttribute("qualification");
    this.shadowRoot.getElementById("experience").innerHTML =
      '<i class="fa fa-suitcase"></i>' + " " + this.getAttribute("experience");
    this.shadowRoot.getElementById("location").innerHTML =
      this.getAttribute("location");
    this.shadowRoot.getElementById("applyBefore").innerHTML =
      this.getAttribute("applyBefore");
  }
}

customElements.define("card-component", CardTemplate);
