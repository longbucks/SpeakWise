import html from "html-literal";

export default Links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${Links.map(
        links =>
          `<li><a href="/${links.title}" data-navigo>${links.text}</a></li>`
      ).join("")}
    </ul>
  </nav>
`;

{
  /* <li><a href="#jumbotron">Home</a></li>
//
<li><a href="#about">About</a></li>
//
<li><a href="#dashboard">Dashboard</a></li>
//
<li><a href="#contact">Contact</a></li>
//
<li><a href="#teacher">Teacher</a></li> */
}
