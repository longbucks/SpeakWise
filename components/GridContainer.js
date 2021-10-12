import html from "html-literal";
import * as components from ".";

export default (st, links) => html`
  <div class="grid-container">
    ${components.Nav(links)} ${components.Header(st)}
    <div class="grid-container-main" class="grid-item-main">
      ${components.Main(st)}
    </div>
    ${components.Footer()}
  </div>
`;
