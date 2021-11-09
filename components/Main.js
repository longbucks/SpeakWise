import * as views from "./view";
export default st => `
<div class="grid-item-main">

${views[st.page](st)}

</div>
`;
