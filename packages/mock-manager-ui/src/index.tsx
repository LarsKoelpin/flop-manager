import ReactDOM from "react-dom";
import { MockManagerUI } from "./MockManagerUI";

export const install = () => {
  class WebComponentUI extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement("span");
      this.attachShadow({ mode: "open" }).appendChild(mountPoint);
      ReactDOM.render(<MockManagerUI />, mountPoint);
    }
  }
  console.log("Registering Web Component");
  window.customElements.define("mock-manager", WebComponentUI);
};
