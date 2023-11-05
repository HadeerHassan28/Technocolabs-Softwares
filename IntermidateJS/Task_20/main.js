// Foursquare API Info
const clientId = "4YR2LPSPYGI02F5L0ORFMACBWVGSA2UXO3WYGFXYFCIJKP2U";
const clientSecret = "OTOPB4L4C2VZRLOCA0KPYSLZECH23EEWY0MRDWV0MHDM5TKD";
const url = "https://api.foursquare.com/v2/venues/explore?near=";

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

  const options = { method: "GET" };
  try {
    const response = await fetch(
      `https://api.foursquare.com/v3/places/search?near=${city}`,
      options
    );
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      //   const venues = jsonResponse.response.groups[0].items.map(
      //     (item) => item.venue
      //   );
      return venues;
    } else throw new Error("Req faild", response.status);
  } catch (error) {
    console.log(error);
  }
};

const getForecast = () => {};

// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = "";
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (day) => {
  // Add your code here:

  let weatherContent = "";
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
