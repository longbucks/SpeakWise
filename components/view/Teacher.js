import html from "html-literal";

export default () => html`
  <!-- <section id="teacher"></section>
  <form id="getVideo">
    <h2>Enter Video id</h2>
    <label for="">Student id</label>
    <input type="text" name="videoId" id="videoId" />
    <button id="submit">Find Video</button>
    <video controls id="getVideo">
      <source id="videoSrc" type="video/mp4" />
    </video>
  </form> -->

  <form id="rubric">
    <label></label>
    <input type="range" min="0" max="10" class="slider" />
    <label></label>
    <br />
    <input type="range" min="0" max="10" class="slider" />
    <label></label>
    <br />

    <input type="range" min="0" max="10" class="slider" />
    <label></label>
    <br />

    <input type="range" min="0" max="10" class="slider" />
    <label></label>
    <br />

    <input type="range" min="0" max="10" class="slider" />
    <button id="submit"></button>
  </form>
`;
// <!-- src="http://localhost:4040/uploadVideo/9dd222f878918a3a9d2248e544d10f61" -->
