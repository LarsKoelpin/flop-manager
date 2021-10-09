import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Scenario } from "../model/Mock";
import { MockManager } from "../out/web/initializeApi";

const global = window as any;

export const MockManagerUI = () => {
  const mockManager: MockManager = global.mockManager;
  const [active, setActive] = useState<string[]>([]);

  useEffect(() => {
    mockManager.addEventListener("active-scenario-changed", (x: string[]) => {
      setActive(x);
    });
  }, []);

  return (
    <div>
      {global?.mockManager?.getScenarios()?.map((x: Scenario) => {
        return (
          <span>
            <input
              checked={mockManager.getActiveScenariosNames().includes(x.name)}
              type="checkbox"
              onChange={(e) => {
                const scenaries = e.target.checked
                  ? [...mockManager.getActiveScenariosNames(), x.name]
                  : mockManager
                      .getActiveScenariosNames()
                      .filter((y) => !y.includes(x.name));
                global.mockManager.setActiveScenarios(scenaries);
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
    ReactDOM.render(<MockManagerUI />, mountPoint);
  }
}
customElements.define("mock-manager", WebComponentUI);
