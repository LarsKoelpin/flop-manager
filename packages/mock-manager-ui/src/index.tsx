import ReactDOM from "react-dom";
import { MockManagerUI } from "./MockManagerUI";

class WebComponentUI extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);
    ReactDOM.render(<MockManagerUI />, mountPoint);
  }
}
console.log("Registering Web Component");
window.customElements.define("mock-manager", WebComponentUI);
