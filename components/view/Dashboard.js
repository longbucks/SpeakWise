import html from "html-literal";

export default () => html`
  <section id="dashboard">
    <div class="grid-item-dash">
      <form id="dashvid" method="post">
        <input type="file" accept="video/*" id="input-tag" name="video" />
        <hr />
        <video controls id="video-tag">
          <source id="video-source" src="splashVideo" />
          Your browser does not support the video tag.
        </video>
        <br />
        <input type="reset" id="reset" value="Reset" />

        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  </section>
`;
