import * as views from "./view";
export default st => `
${views[st.page](st)}
`;
