import * as components from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

const router = new Navigo(window.location.origin);
dotenv.config();

router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    switch (page) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
          )
          .then(response => {
            state.Home.weather = {};
            // console.log(response, state.Home.weather);
            state.Home.weather.city = response.data.name;
            state.Home.weather.temp = response.data.main.temp;
            state.Home.weather.feelsLike = response.data.main.feels_like;
            state.Home.weather.humidity = response.data.main.humidity;
            state.Home.weather.description =
              response.data.weather[0]["description"];
            done();
          })
          .catch(err => console.log(err));
        break;
      default:
        done();
    }
  }
});
router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st, links = state.Links) {
  document.querySelector("#root").innerHTML = `
${components.Grid(st, links, components.Header(st), state.Home)}

  `;

  router.updatePageLinks();
  addEventListeners(st);
}
const videoSrc = document.querySelector("#video-source");
const videoTag = document.querySelector("#video-tag");
function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(st[event.target.title]);
    })
  );
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (st.page === "Dashboard") {
    console.log("hey");
    document.querySelector("#input-tag").addEventListener("click", event => {
      if (event.target.files && event.target.files[0]) {
        console.log("2nd hey");
        var reader = new FileReader();
        reader.onload = function(e) {
          videoSrc.src = e.target.result;
          videoTag.load();
        }.bind(this);

        reader.readAsDataURL(event.target.files[0]);
      }
    });
  }
}
