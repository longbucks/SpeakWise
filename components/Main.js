import * as views from "./view";
export default st => `
<div class="grid-item-main">
<div class="grid-container-main">
${views[st.page](st)}
</div>
</div>
`;
