import html from "html-literal";

export default () => html`
  <section id="teacher"></section>
  <!-- <form id="getVideo">
    <h2>Enter Video id</h2>
    <label for="">Student id</label>
    <input type="text" name="videoId" id="videoId" />
    <button id="submit">Find Video</button>
    <video controls id="getVideo">
      <source
        id="videoSrc"
        type="video/mp4"
        src="http://localhost:4040/uploadVideo/e949a03f38b837830b99b3b587ba5208"
      />
    </video>
  </form> -->

  <form id="rubric">
    <label></label>
    <input type="range" min="0" max="10" />
    <input type="range" min="0" max="10" />
    <input type="range" min="0" max="10" />
    <input type="range" min="0" max="10" />
    <input type="range" min="0" max="10" />
    <button id="submit"></button>
  </form>
`;
