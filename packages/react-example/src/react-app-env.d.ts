/// <reference types="react-scripts" />
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-manager": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >; // Normal web component
    }
  }
}

declare module "mock-manager-ui";
