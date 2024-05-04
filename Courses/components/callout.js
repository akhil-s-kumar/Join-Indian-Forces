const calloutTemplate = document.createElement("template");
calloutTemplate.innerHTML = `
        
<style>
.callout {
    font-family: "Montserrat", sans-serif;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #eee;
    border-left-width: 6px;
    border-left-color: #f35f00;
    border-radius: 3px;
    background-color: #f5f7f9;
  }
.callout h6 {
    font-size: 15px;
  }
  
.callout a {
    text-decoration: none;
  }
</style>

<div class="callout callout-success">
    <h6 id="title"><b>History</b></h6>
</div>

`;

class CalloutTemplate extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(calloutTemplate.content.cloneNode(true));
    this.shadowRoot.getElementById("title").innerHTML =
      this.getAttribute("title");
  }
}

customElements.define("callout-component", CalloutTemplate);
