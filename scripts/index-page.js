//object list
const comments = [
    {
        name: "Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "02/17/2021",
        ID:2,
    },
    {
        name: "Emilie Beach",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "01/09/2021",
        ID:1
    },
    {
        name: "Miles Acosta",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "12/20/2020",
        ID:0
    }
]


//select form
const form = document.querySelector("form");
//select parent class
const Parentclass=document.querySelector(".comment-list");
//clear comments before printing out all the comment
comments.forEach((comment)=>{
    displaycomments(comment);
    });
    //function to add date to comment
    function gettodaydate() {
        let today = new Date();
        let tomorrow = new Date();
        
        let date = String(today.getDate());
        let month = String((today.getMonth()) + 1);
    
        let year = String(today.getFullYear());
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
        today = `${dayzero}${date}/${monthzero}${month}/${year}`
        return today;
    }

//add event listener submit
form.addEventListener("submit", (event) => {
    //prevent default
    event.preventDefault();
    //target event
    const form = event.target;
    //get name and comment
    const name = form.Name.value;
    const comment = form.Comment.value;
    
    
    //add new comment to comment array
    const newcommentobject = {
        name: name,
        comment: comment,
        date: gettodaydate(),
        ID:(comments.length)
    }
    //sort the comment by time order
Parentclass.innerHTML = "";
    comments.push(newcommentobject);
    const sortedcomments = comments.sort((a, b) => {
        return b.ID-a.ID;
    })
    //display all the comment in the array
    comments.forEach((comment)=>{
        displaycomments(comment);
        });
    console.log(comments)
})

//use for each to display each objects

//use DOM to append the objects

function displaycomments(comment){
//locate parent 


//clear out existing comments to add new ones

//create div for the whole comment
const Comment=document.createElement("div");
Comment.className=("comment");
//create div for comment context
const commentContent=document.createElement("div");
commentContent.className=("comment__content");
//create the img and add the img
const commentImg=document.createElement("img");
commentImg.src="./assets/Images/Mohan-muruge.jpg";
commentImg.classList.add('comment__image')
//create title box
const commentTitle=document.createElement("div");
commentTitle.className=("comment__title");
//create and fill text for username
const commentName=document.createElement("p");
commentName.className=("comment__username");
commentName.innerText=(comment.name);
//create and fill text for date
const commentDate=document.createElement("p");
commentDate.className=("comment__date");
commentDate.innerText=(comment.date);
//create and fill text for the text
const commentText=document.createElement("p");
commentText.className=("comment__text");
commentText.innerText=(comment.comment);
//append date and username to div title
commentTitle.appendChild(commentName);
commentTitle.appendChild(commentDate);
//append text to content
commentContent.appendChild(commentTitle);
//append title to content
commentContent.appendChild(commentText);
//APPEND img to comment
Comment.appendChild(commentImg);
//append content to comment
Comment.appendChild(commentContent);
//append comment to parten
Parentclass.appendChild(Comment);


}




