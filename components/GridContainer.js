import html from "html-literal";
import * as components from ".";

export default (st, links, header, home) => html`
  <div class="grid-container">
    ${components.Nav(links, header, home)} ${components.Main(st)}
    ${components.Footer()}
  </div>
`;
