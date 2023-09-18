const countdownText = document.getElementById('Countdown');
const currentEventText = document.getElementById('current-event');
const Events = 
[
    {
        name: "Shadow of Umbru",
        startDate: new Date(`${new Date().getFullYear()}-08-10T00:00:00+02:00`),
        endDate: new Date(`${new Date().getFullYear()}-08-20T00:00:00+02:00`)
    },

    {
        name: "Bloodmoon event",
        startDate: new Date(`${new Date().getFullYear()}-10-15T00:00:00+02:00`),
        endDate: new Date(`${new Date().getFullYear()}-11-10T00:00:00+02:00`)
    },
    {
        name: "Winter event",
        startDate: new Date(`${new Date().getFullYear()}-12-20T00:00:00+02:00`),
        endDate: new Date(`${new Date().getFullYear()}-01-31T00:00:00+02:00`)
    },
    {
        name: "Valentine event",
        startDate: new Date(`${new Date().getFullYear()}-02-12T00:00:00+02:00`),
        endDate: new Date(`${new Date().getFullYear()}-02-22T00:00:00+02:00`)
    },
    {
        name: "Rainy skies event",
        startDate: new Date(`${new Date().getFullYear()}-04-5T00:00:00+02:00`),
        endDate: new Date(`${new Date().getFullYear()}-04-30T00:00:00+02:00`)
    },
    {
        name: "Birthday event",
        startDate: new Date(`${new Date().getFullYear()}-07-20T00:00:00+02:00`),
        endDate: new Date(`${new Date().getFullYear()}-07-24T00:00:00+02:00`)
    }
];

let currentEvent = null;
let nextEvent = null;
function LeCountDown()
{
    const currentDate = new Date().getTime();
    for(const event of Events)
    {
        if(event.startDate <= currentDate && event.endDate >= currentDate)
        {
            currentEvent = event;
            console.log(currentEvent.name);
            break;
        }
    }
    
    if(currentEvent === null)
    {
        currentEventText.innerText = "no ongoing event";
    }
    
    else if (currentEvent != null)
    {
        const timeLeft = currentEvent.endDate - currentDate;
        const days = Math.floor(timeLeft/(1000*60*60*24));
        const hoursLeft = Math.floor(timeLeft%(1000*60*60*24)/ (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
        currentEventText.innerText = `current event: ${currentEvent.name}\n ${days} days, ${hoursLeft} hours, ${minutesLeft} minutes left, ${secondsLeft} sec`;
    }
    
    
    for(const event of Events) //we loop through the event list to check for an event
    {
        if(event.startDate > currentDate) 
        {
            nextEvent= event;
            console.log(nextEvent.name);
            break;
            //if startDate is "bigger" than today, it means it is next event
            //break as soon as an event is found
        }
    }
    if(nextEvent === null)
    {
        console.log("something went wrong, there should be an event")
    }
    
    else if (nextEvent != null)
    {
        const timeLeft = nextEvent.startDate - currentDate;
        const days = Math.floor(timeLeft/(1000*60*60*24));
        const hoursLeft = Math.floor(timeLeft%(1000*60*60*24)/ (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownText.innerText = `next event: ${nextEvent.name}\n in ${days} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} sec`;
    
    }
    else
    {
        console.log("something went wrong")
    }

}

setInterval(LeCountDown, 1000);
