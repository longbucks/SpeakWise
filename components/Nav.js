import html from "html-literal";
import img from "../img/noun_Microphone_40029.svg";
export default (Links, header, home) => html`
  <div class="navContainer">
    <a href="/"> <img src="${img}"/></a>

    <i class="fas fa-bars"></i>
    <nav>
      <p>${header}</p>
      <ul class="hidden--mobile nav-links">
        ${Links.map(
          links =>
            `<li><a href="/${links.title}" data-navigo>${links.text}</a></li>`
        ).join("")}
      </ul>
    </nav>
  </div>
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
