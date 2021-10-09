import ReactDOM from "react-dom";
import { Scenario } from "../Mock";

const global = window as any;
export const MockManagerUI = () => {
  return (
    <div>
      <select
        onChange={(e) => {
          console.log("EVENT", e);
          global.mockManager.changeScenario(e.target.value);
        }}
      >
        {global?.mockManager?.scenarios?.map((x: Scenario) => {
          return <option>{x.name}</option>;
        })}
      </select>
    </div>
  );
};

class WebComponentUI extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    console.log("hi", (window as any).mockManager.scenarios);
    ReactDOM.render(<MockManagerUI />, mountPoint);
  }
}
customElements.define("mock-manager", WebComponentUI);
