import html from "html-literal";
export default () => html`
  <section id="dashboard">
    <div class="grid-item-dash">
      <h1></h1>
      <h2>upload a file</h2>
      <label for="">file upload</label>
      <input type="text" />
      <button>upload a file</button>
      <h2>FeedBack</h2>
      <button>Get feed FeedBack</button>
      <input type="file" accept="video/*,.mp4" id="input-tag" />
      <hr />
      <video controls id="video-tag">
        <source id="video-source" src="splashVideo" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
`;
