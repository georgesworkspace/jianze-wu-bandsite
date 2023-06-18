const baseUrl = "https://project-1-api.herokuapp.com/";
const apiKey = "d9d7bc3f-4bdb-4e5f-bf65-1a3f4e8ec716 ";
//get API key only used once
// function fetchKey() {
//     // prettier-ignore
//     axios
//       .get(`${baseUrl}register`)
//       .then(
//         (response) => {
//           console.log(response);
//         }
//       )
//       .catch(
//         (error) => {
//           console.error(error);
//         }
//       );
//   }
// fetchKey();
// const performances = [
//     {
//         DATE: "Mon Sept 06 2021",
//         VENUE: "Ronald Lane",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Tue Sept 21 2021",
//         VENUE: "Pier 3 East",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Fri Oct 15 2021",
//         VENUE: "View Lounge",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Sat Nov 06 2021",
//         VENUE: "Hyatt Agency",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Fri Nov 26 2021",
//         VENUE: "Moscow Center",
//         LOCATION: "San Francisco, CA"
//     },
//     {
//         DATE: "Wed Dec 15 2021",
//         VENUE: "Press Club",
//         LOCATION: "San Francisco, CA"
//     }

// ]
function getshow() {
  axios
    .get(`${baseUrl}showdates?api_key=${apiKey}`)
    .then((response) => {
      console.log(response);
      const performances = response.data;
      performances.forEach((performance) => {
        performance.date=gettodaydate(performance.date)
        displayshow(performance);
      });
    })

    .catch((error) => {
      console.error(error);
    });
}
// select the parent class
const parentclasshidden = document.querySelector(".main__title-hidden");
//create a div for tablet and desktop, doesnot display in mobile;
const hiddendiv = document.createElement("div");
hiddendiv.className = "main__heading";
//create each p tag
const hiddendate = document.createElement("p");
hiddendate.className = "heading__text";
hiddendate.innerText = "DATE";
const hiddenvenue = document.createElement("p");
hiddenvenue.className = "heading__text";
hiddenvenue.innerText = "VENUE";
const hiddenlocation = document.createElement("p");
hiddenlocation.className = "heading__text";
hiddenlocation.innerText = "LOCATION";
//append each p tag to the div
const hiddenPlaceholder = document.createElement("p");
hiddenPlaceholder.className = "heading__text"
hiddendiv.appendChild(hiddendate);
hiddendiv.appendChild(hiddenvenue);
hiddendiv.appendChild(hiddenlocation);
hiddendiv.appendChild(hiddenPlaceholder)
//append the div to main
parentclasshidden.appendChild(hiddendiv);
//call the function to display the shows
getshow();
function displayshow(performance) {
  // select the parent class
  const parentclass = document.querySelector(".main");

  //create div for first show
  const showDivClass = document.createElement("div");
  showDivClass.className = "main__show-div";

  showDivClass.addEventListener('click', () => {

    document.querySelectorAll('.main__show-div').forEach(el => {
      el.classList.remove('clicked')
    })


    showDivClass.classList.add('clicked')

  })


  // date
  const datedivclass = document.createElement("div");
  datedivclass.className = "main__date-div";

  // create DATE (p) tag
  const Date = document.createElement("p");
  Date.className = "main__date";
  Date.innerText = "DATE";

  const Datedetail = document.createElement("p");
  Datedetail.className = "main__date--detail";
  Datedetail.innerText = performance.date;
  //append p tag to  date div
  datedivclass.appendChild(Date);
  datedivclass.appendChild(Datedetail);
  //append the date div to show div
  showDivClass.appendChild(datedivclass);
  //append showone div to mainparentclass.appendChild(showDivClass);
  //venue div
  const venuedivclass = document.createElement("div");
  venuedivclass.className = "main__venue-div";
  //venue
  const Venue = document.createElement("p");
  Venue.className = "main__venue";
  Venue.innerText = "VENUE";
  //venue detail
  const Venuedetail = document.createElement("p");
  Venuedetail.className = "main__venue--detail";
  Venuedetail.innerText = performance.place;
  //append p tag to div
  venuedivclass.appendChild(Venue);
  venuedivclass.appendChild(Venuedetail);
  //append venue div to show div
  showDivClass.appendChild(venuedivclass);

  //location div
  const locationdivclass = document.createElement("div");
  locationdivclass.className = "main__location-div";
  //location
  const Location = document.createElement("p");
  Location.className = "main__location";
  Location.innerText = "LOCATION";
  //location detail
  const Locationdetail = document.createElement("p");
  Locationdetail.className = "main__location--detail";
  Locationdetail.innerText = performance.location;
  //append location to locationdiv
  locationdivclass.appendChild(Location);
  locationdivclass.appendChild(Locationdetail);
  //append to showdiv
  showDivClass.appendChild(locationdivclass);
  //create button div
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "main__button-div";
  //create button
  const button = document.createElement("button");
  button.className = "main__button";
  button.innerText = "BUY TICKETS";
  //append button to buttondiv
  buttonDiv.appendChild(button);
  showDivClass.appendChild(buttonDiv);
  //append to main
  parentclass.appendChild(showDivClass);
}
//convert timestamp to date
function gettodaydate(today) {
  exactdate = new Date(today);
  let monthlist=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
  let weekdaylist=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  let date = String(exactdate.getDate());
  let month = monthlist[exactdate.getMonth()];
  let weekday=weekdaylist[exactdate.getDay()];
  let year = String(exactdate.getFullYear());
  let dayzero = "";
  let monthzero = "";
 
  if (Number(date) < 10) {
    dayzero = "0";
  }
  if (Number(date) < 10 && Number(month) < 10) {
    dayzero = "0";
    monthzero = "0";
  }
  if (Number(month) < 10) {
    monthzero = "0";
  }
  exactdate = `${weekday} ${monthzero}${month} ${dayzero}${date} ${year}`;

  return exactdate;
}
