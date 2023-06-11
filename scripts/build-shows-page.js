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
// select the parent class
const parentclasshidden=document.querySelector(".main__title-hidden");
//create a div for tablet and desktop, doesnot display in mobile;
const hiddendiv=document.createElement("div");
hiddendiv.className=("main__div--hidden");
const hiddendate=document.createElement("p");
hiddendate.className=("main__div-date--hidden");
hiddendate.innerText=("DATE");
const hiddenvenue=document.createElement("p")
hiddenvenue.className=("main__div-venue--hidden");
hiddenvenue.innerText=("VENUE");
const hiddenlocation=document.createElement("p");
hiddenlocation.className=("main__div-location--hidden");
hiddenlocation.innerText=("LOCATION");
hiddendiv.appendChild(hiddendate);
hiddendiv.appendChild(hiddenvenue);
hiddendiv.appendChild(hiddenlocation);
parentclasshidden.appendChild(hiddendiv);
performances.forEach((performance)=>{
    displayshow(performance)
})
function displayshow(performance){

 
// select the parent class
const parentclass=document.querySelector(".main");


//create div for first show
const showDivClass=document.createElement("div");
showDivClass.className=("main__show-div");
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
//create button div
const buttonDiv=document.createElement("div");
buttonDiv.className=("main__button-div")
//create button
const button=document.createElement("button");
button.className=("main__button");
button.innerText=("BUY TICKETS");   
//append button to buttondiv
buttonDiv.appendChild(button);
showDivClass.appendChild(buttonDiv);
//append to main
parentclass.appendChild(showDivClass);

}



    
