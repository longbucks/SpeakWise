import html from "html-literal";

export default () => html`
  <section id="dashboard">
    <div class="grid-item-dash">
      <!-- <h2>upload a file</h2>
      <label for="">file upload</label>
      <input type="text" />
      <button>upload a file</button>
      <h2>FeedBack</h2>
      <button>Get feed FeedBack</button> -->
      <!-- <form action="#">
        <div class="file-field input-field">
          <div class="btn">
            <span>File</span>
            <input type="file" />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>
      </form> -->


      <form id="dashvid" method="post">
        <input type="file" accept="video/*" id="input-tag" name="video" />

        <hr />
        <video controls id="video-tag">
          <source id="video-source" src="splashVideo" />
          Your browser does not support the video tag.
        </video>
        <input type="reset" id="reset" value="Reset" />
        <input id="submit" type="submit" value="Submit" />
        <a href="$1" class="btn">Show Video</a>
        <a href="#" id="button" class="button">Click Me</a>
        <div class="bg-modal" >
	      <div class="modal-contents"  >
        <div class="close">+</div>
		    <img src="https://richardmiddleton.me/comic-100.png" alt="">
		    <div class="close">+</div>
      <p>lorem ispum is rebfiwbiufrubfiuwr fwrbfiunwbruibfirwb if wirb </p>
	</div>
</div>
      </div>
      </form>
    </div>
  </section>
`;
