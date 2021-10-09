import { useState } from "react";
import ReactDOM from "react-dom";
import { Scenario } from "../Mock";

const global = window as any;
export const MockManagerUI = () => {
  const [active, setActive] = useState<string[]>([]);
  return (
    <div>
      {global?.mockManager?.getScenarios()?.map((x: Scenario) => {
        return (
          <span>
            <input
              type="checkbox"
              onChange={(e) => {
                global.mockManager.setActiveScenarios();
              }}
            />{" "}
            {x.name}
          </span>
        );
      })}
    </div>
  );
};

class WebComponentUI extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    console.log("hi", (window as any).mockManager.getScenarios());
    ReactDOM.render(<MockManagerUI />, mountPoint);
  }
}
customElements.define("mock-manager", WebComponentUI);
