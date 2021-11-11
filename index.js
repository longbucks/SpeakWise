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

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
    })
  );
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  switch (st.page) {
    case "Teacher":
      const getVideo = document.querySelector("#submit");
      const source = document.querySelector("#videoSrc");
      const v = document.querySelector("#videoId");
      // getVideo.addEventListener("click", event => {
      //   console.log(v.value);
      //   fetch(`http://localhost:4040/uploadVideo/${v.value}`).then(res => {
      //     source.src = res.url;
      //   });
      //   event.preventDefault();
      // });
      break;

    case "Dashboard": {
      // assign query to variable
      const videoTag = document.querySelector("#video-tag");
      const reset = document.querySelector("#reset");
      const upload = document.querySelector("#submit");
      //adds class in style to query
      videoTag.classList.add("hidden");
      reset.classList.add("hidden");
      upload.classList.add("hidden");

      document.querySelector("#input-tag").addEventListener("change", st => {
        readVideo(st), videoTag.classList.remove("hidden");
        reset.classList.remove("hidden");
        upload.classList.remove("hidden");
        console.log(st.target.files);
      });

      reset.addEventListener("click", event => {
        event.preventDefault();
        upload.classList.add("hidden");
        videoTag.classList.add("hidden");
        reset.classList.add("hidden");
        render(state.Dashboard);
      });

      break;
    }
  }
}

function readVideo(event) {
  let formData = new FormData();
  const reset = document.querySelector("#reset");
  const upload = document.querySelector("#submit");
  const videoSrc = document.querySelector("#video-source");
  const videoTag = document.querySelector("#video-tag");
  if (event.target.files && event.target.files[0]) {
    console.log("2nd hey");
    var reader = new FileReader();
    reader.onload = function(e) {
      videoSrc.src = e.target.result;
      videoTag.load();
    }.bind(this);

    reader.readAsDataURL(event.target.files[0]);
  }
  formData.append("video", event.target.files[0]);

  upload.addEventListener("click", st => {
    st.preventDefault();
    videoTag.classList.add("hidden");
    reset.classList.add("hidden");
    upload.classList.add("hidden");
    const result = axios.post("http://localhost:4040/uploadVideo", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    alert("Your video was submitted successfully");
    return result.data;
  });
}
