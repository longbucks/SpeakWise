import html from "html-literal";
import * as components from ".";

export default (st, links) => html`
  <div class="grid-container">
    ${components.Nav(links)} ${components.Header(st)} ${components.Main(st)}
    ${components.Footer()}
  </div>
`;
