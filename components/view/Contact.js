import html from "html-literal";
export default () => html`
  <section id="contact">
    <div class="grid-contact-container">
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/{form_id}"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label for="first-name">First Name</label>
          <input
            type="text"
            name="name"
            id="first-name"
            placeholder="First Name"
            required=""
          />
          <fieldset id="fs-frm-inputs">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            name="name"
            id="last-name"
            placeholder="Last Name"
            required=""
          />
          <label for="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
          />
          <label for="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="ex: I am having a problem with your website dude"
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  </section>
`;
