const performances=[
    {DATE:"Mon Sept 06 2021",
    VENUE:"Ronald Lane",
    LOCATION:"San Francisco, CA"
    },
    {DATE:"Tue Sept 21 2021",
     VENUE:"Pier 3 East",
     LOCATION:"San Francisco, CA" 
    },
    {DATE:"Fri Oct 15 2021",
        VENUE:"View Lounge",
        LOCATION:"San Francisco, CA"
    },
    {DATE:"Sat Nov 06 2021",
        VENUE:"Hyatt Agency",
        LOCATION:"San Francisco, CA"
    },
    {   DATE:"Fri Nov 26 2021",
        VENUE:"Moscow Center",
        LOCATION:"San Francisco, CA"
    },
    {
        DATE:"Wed Dec 15 2021",
        VENUE:"Press Club",
        LOCATION:"San Francisco, CA"
    }

] 
  
performances.forEach((performance)=>{
    displayshow(performance)
})
function displayshow(performance){

    // {
    //     DATE:"Wed Dec 15 2021",
    //     VENUE:"Press Club",
    //     LOCATION:"San Francisco, CA"
    // }
//   <div class="main__date-div">
//     <p class="main__date">DATE</p>
//     <p class="main__date--detail">Wed Dec 15 2021</p>
//  </div>
//  <div>
//     <p class="main__venue">VENUE</p>
//     <P class="main__venue--detail">Press Club</P>
//  </div>
//  <div>
//     <P class="main__location">LOCATION</P>
//     <p class="main__location--detail">San Francisco, CA</p>
//   </div>
//     <button class="main__button">BUY TICKETS</button>
//  

// select the parent class
const parentclass=document.querySelector(".main");
//create div for first show
const showOneDivClass=document.createElement("div");
showOneDivClass.className=("main__show-one-div");
// date
const datedivclass=document.createElement("div");
datedivclass.className=("main__date-div");

// create DATE (p) tag
const Date=document.createElement("p");
Date.className="main__date";
Date.innerText="DATE";

const Datedetail=document.createElement("p");
Datedetail.className="main__date--detail";
Datedetail.innerText=performance.DATE;
//append p tag to  date div
datedivclass.appendChild(Date);
datedivclass.appendChild(Datedetail);
//append the date div to show div
showDivClass.appendChild(datedivclass);
//append showone div to mainparentclass.appendChild(showDivClass);
//venue div
const venuedivclass=document.createElement("div");
venuedivclass.className=("main__venue-div");
//venue
const Venue=document.createElement("p");
Venue.className="main__venue";
Venue.innerText="VENUE";
//venue detail
const Venuedetail=document.createElement("p");
Venuedetail.className="main__venue--detail";
Venuedetail.innerText=performance.VENUE;
//append p tag to div
venuedivclass.appendChild(Venue);
venuedivclass.appendChild(Venuedetail);
//append venue div to show div
showDivClass.appendChild(venuedivclass);

//location div
const locationdivclass=document.createElement("div");
locationdivclass.className="main__location-div";
//location
const Location=document.createElement("p");
Location.className=("main__location");
Location.innerText=("LOCATION");
//location detail
const Locationdetail=document.createElement("p");
Locationdetail.className=("main__location--detail");
Locationdetail.innerText=(performance.LOCATION)
//append location to locationdiv
locationdivclass.appendChild(Location);
locationdivclass.appendChild(Locationdetail);
//append to showdiv
showDivClass.appendChild(locationdivclass);
//append to main
parentclass.appendChild(showDivClass);

}



    
