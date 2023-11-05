import { createVenueHTML, createWeatherHTML } from "./helpers.js";
// Foursquare API Info
const clientId = "4YR2LPSPYGI02F5L0ORFMACBWVGSA2UXO3WYGFXYFCIJKP2U";
const clientSecret = "OTOPB4L4C2VZRLOCA0KPYSLZECH23EEWY0MRDWV0MHDM5TKD";
// const url = "https://api.foursquare.com/v2/venues/explore?near=";
const url = "https://api.foursquare.com/v3/places/search?near=";
// OpenWeather Info
const openWeatherKey = "cd8aed358c38635eb5a9d5f6edd32375";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  //   const endpoint = "https://api.foursquare.com/v2/venues/explore";
  //   const params = {
  //     near: city,
  //     limit: 10,
  //     client_id: clientId,
  //     client_secret: clientSecret,
  //     v: "20220101",
  //   };
  //   const urlToFetch = `${endpoint}?${new URLSearchParams(params)}`;
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20220101`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "fsq3nFXcci3hCzrT8KOwCrR4aqo0Ef2Er3P/QM63cIBu7QQ= ",
    },
  };
  try {
    const response = await fetch(urlToFetch, options);
    // console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log("jsonResponse", jsonResponse);
      const venues = jsonResponse.results[0].location.admin_region; //CountryName
      //console.log("venues", venues);
      return venues;
    } else throw new Error("Req faild", response.status);
  } catch (error) {
    console.log(error);
  }
  renderVenues();
};

const getForecast = async () => {
  const city = $input.val();
  const urlToFetch = `${weatherUrl}?q=${city}&APPID=${openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    console.log("weather", response);
    if (response.ok) {
      const jsonResponse = response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
  renderForecast();
};

// Render functions

const renderVenues = (venue) => {
  const venueIcon = venue.categories[0].icon;
  const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
  const venueContent = createVenueHTML(venue);
  $venueDivs[0].append(venueContent);
  $destination.append(`<h2>${venue.location.city}</h2>`);
};

const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $venueDivs.forEach((venue) => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues();
  getForecast();
  return false;
};

$submit.click(executeSearch);
