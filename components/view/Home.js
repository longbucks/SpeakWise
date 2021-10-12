import html from "html-literal";
export default st => html`
  <section id="jumbotron">
    <div class="grid-item-home">
      <h2>How to get started</h2>
      <h3>
        This is my api call Weather in ${st.weather.city}
        ${kelvinToFahrenheit(st.weather.temp)}F, feels like
        ${kelvinToFahrenheit(st.weather.feelsLike)}F
      </h3>
      <p>
        First you will need to record a video with speaking duration longer than
        1 min.
      </p>
      <p>We suggest you script and plan out your speech.</p>
      <p>Next, you navigate to the dashboard to upload file</p>
      <p>
        Then you will clcik upload file, and upload the speech you have
        recorderd.
      </p>
      <p>Notice it must be a mp4 or mp3 extension</p>
      <p>
        After a couple of minutes the file wpuld be processed and a rubric will
        be sent with how well you did in the speech.
      </p>
      <h2>Features we offer</h2>
      <p>
        SpeakWise will offer grading from certified speaking specialist to use a
        strong rubric to give effective feedback to the user. Coming Soon! We
        will offer technology such as Artificial intelligence to give feedback
        on based on the IELTS and CEFR scale. At SpeakWise we believe speech is
        life and the rest is just prep-time.
      </p>
    </div>
  </section>
`;
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

//   <h3>
//   This is my api call Weather in ${st.weather.city}
//   ${kelvinToFahrenheit(st.weather.temp)}F, feels like
//   ${kelvinToFahrenheit(st.weather.feelsLike)}F
// </h3>
