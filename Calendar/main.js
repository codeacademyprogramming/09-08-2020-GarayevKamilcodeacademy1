const date = new Date();
const rendercalendar = ()=>{
    const Monthdays = document.querySelector(".days");
    const lastday = new Date(date.getFullYear(),date.getMonth() + 1,0 ).getDate();
    const prevLastDay= new Date(date.getFullYear(),date.getMonth(),0 ).getDate();
    const firstdayindex= date.getDay();
    const lastdayindex = new Date(date.getFullYear(),date.getMonth() + 1,0 ).getDay();
    const months = [
        "January",
        "February",
        "March",
        "April ",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    document.querySelector(".month h1").innerText = months[date.getMonth()];
    
    let days= "";
    
    for( let x= firstdayindex; x>0 ;x--){
        days+=`<div class="prev-day">${prevLastDay-x}</div>`
    }
    
    for( let i =1; i<=lastday;i++){
        days+=`<div>${i}</div>`;
    }
    
    for(let j=1; j< 7-lastdayindex; j++ ){
        days+=`<div class="next-day">${j}</div>`;
        Monthdays.innerHTML=days;
    
    }
}


document.querySelector("span.left").addEventListener("click",()=>{

    date.setMonth(date.getMonth()-1);
    rendercalendar();

});
document.querySelector("span.right").addEventListener("click",()=>{
    date.setMonth(date.getMonth()+1);
    rendercalendar();
    

});
rendercalendar();