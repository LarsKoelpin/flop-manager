import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Scenario } from "../model/Mock";
import { MockManager } from "../outbound/web/initializeApi";

export const MockManagerUI = () => {
  const mockManager: MockManager = (window as any).mockManager;
  const [, setActive] = useState<string[]>([]);

  useEffect(() => {
    mockManager.addEventListener("active-scenario-changed", (x: string[]) => {
      setActive(x);
    });
  }, [mockManager]);

  return (
    <div>
      {mockManager?.getScenarios()?.map((x: Scenario) => {
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
                mockManager.setActiveScenarios(scenaries);
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
    if (process.env.NODE_ENV === "development") {
      ReactDOM.render(<MockManagerUI />, mountPoint);
    }
  }
}
customElements.define("mock-manager", WebComponentUI);
