import html from "html-literal";
export default () => html`
  <section id="dashboard">
    <div class="grid-item-dash">
      <h1></h1>
      <!-- <h2>upload a file</h2>
      <label for="">file upload</label>
      <input type="text" />
      <button>upload a file</button>
      <h2>FeedBack</h2>
      <button>Get feed FeedBack</button> -->
      <form
        action="/server/videos"
        id="dashvid"
        method="POST"
        enctype="multipart/form-data"
      >
        <input
          type="file"
          accept="video/*"
          id="input-tag"
          name="video"
          action="/contact"
        />
        <hr />
        <video controls id="video-tag">
          <source id="video-source" src="splashVideo" />
          Your browser does not support the video tag.
        </video>
        <button id="reset">reset</button>
        <button id="submit">Get Feedback</button>
      </form>
    </div>
  </section>
`;
