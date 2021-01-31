var today;
var yesterday;
var tomorrow;

function getData(){
    var date = new Date();
    today = getDateInUs(date);

    date.setDate(date.getDate() - 1);
    yesterday = getDateInUs(date);

    date.setDate(date.getDate() + 2);
    tomorrow = getDateInUs(date);

    displayContainerByDate();


    fetch("https://autotask.site:3000/api/games", {
        "method": "GET",
        headers: {
            "labuenakey": "sienfermitotengolakey1289643120941",
        },
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        json.data.forEach(game => {
            var nbaGames;
            var day;

            if(game.date == yesterday){
                nbaGames = document.getElementById("nbaGamesYesterday");
                day = "Yesterday";
                loadData(game, nbaGames, day);
            } else if(game.date == today){
                nbaGames = document.getElementById("nbaGamesToday");
                day = "Today";
                loadData(game, nbaGames, day);
            } else if(game.date == tomorrow){
                nbaGames = document.getElementById("nbaGamesTomorrow");
                day = "Tomorrow";
                loadData(game, nbaGames, day);
            } else{
            }

        });
    })
    .catch(err => {
        console.log(err);
    });
}

function loadData(game, nbaGames, day){
    if(game.status == "NS" || game.status == "POST" || game.status == "CANC"){
        //game not played
        nbaGames.innerHTML = nbaGames.innerHTML + `
        <div class="nbaGame">
            <div class="homeTeamContainer">
                <img src=" `+ game.homeLogo +`" width="32px"></img>
                <span class="homeTeamName">`+ game.homeName +`</span>
            </div>

            <div class="gameInfoContainer">
            <span class="gameDay">`+ day +`</span>
                <span class="gameTime">`+ game.time +`</span>
            </div>

            <div class="awayTeamContainer">
                <span class="awayTeamName">`+ game.awayName +`</span>
                <img src=" `+ game.awayLogo +`" width="32px"></img>
            </div>
        </div>`;
    } else if (game.status == "FT" || game.status == "AOT"){
        //game finished
        nbaGames.innerHTML = nbaGames.innerHTML + `
        <div class="nbaGame">
            <div class="homeTeamContainer">
            <img src=" `+ game.homeLogo +`" width="32px"></img>
                <span class="homeTeamName">`+ game.homeName +`</span>
            </div>

            <div class="gameInfoContainer">
            <span class="gameTime">Game Finished</span>
                <span class="gameDay">`+ day +`</span>
                <div class="gameScore">
                    <span class="homeScore">`+ game.homeScore +`</span>
                    <span>-</span>
                    <span class="awayScore">`+ game.awayScore +`</span>
                </div>
            </div>

            <div class="awayTeamContainer">
                <span class="awayTeamName">`+ game.awayName +`</span>
                <img src=" `+ game.awayLogo +`" width="32px"></img>
            </div>
        </div>`;
    } else {
        //game being played
        nbaGames.innerHTML = nbaGames.innerHTML + `
        <div class="nbaGame">
            <div class="homeTeamContainer">
            <img src=" `+ game.homeLogo +`" width="32px"></img>
                <span class="homeTeamName">`+ game.homeName +`</span>
            </div>

            <div class="gameInfoContainer">
            <span class="gameInPlay">In Play</span>
                <div class="gameScore">
                    <span class="homeScore">`+ game.homeScore +`</span>
                    <span>-</span>
                    <span class="awayScore">`+ game.awayScore +`</span>
                </div>
            </div>

            <div class="awayTeamContainer">
                <span class="awayTeamName">`+ game.awayName +`</span>
                <img src=" `+ game.awayLogo +`" width="32px"></img>
            </div>
        </div>`;
    }
}

function getDateInUs(date){
    date = date.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'})
    date = date.split(',')[0]

    var month = date.split('/')[0]
    var day = date.split('/')[1]
    var year = date.split('/')[2]

    if (month < 10){
        month = 0 + month
    }

    if (day < 10){
        day = 0 + day
    }
    
    return (year + "-" + month + "-" + day)
}

var pageIndex = 1

function dateArrowLeftClick(){
    if(pageIndex > 0){
        pageIndex -= 1;
        displayContainerByDate();
    }
}

function dateArrowRightClick(){
    if(pageIndex < 2){
        pageIndex += 1;
        displayContainerByDate();
    }
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function displayContainerByDate(){
    var dateText1 = document.getElementById("dateText1")
    var dateText2 = document.getElementById("dateText2")
    
    var yesterdayDate = monthNames[(parseInt(yesterday.split('-')[1]) - 1)]+ " " + yesterday.split('-')[2] + ", " + yesterday.split('-')[0];
    
    var todayDate = monthNames[(parseInt(today.split('-')[1]) - 1)]+ " " + today.split('-')[2] + ", " + today.split('-')[0];
    
    var tomorrowDate = monthNames[(parseInt(tomorrow.split('-')[1]) - 1)]+ " " + tomorrow.split('-')[2] + ", " + tomorrow.split('-')[0];

    
    switch (pageIndex) {
        case 0:
            nbaGamesYesterday.classList.remove("hidden")
            nbaGamesToday.classList.add("hidden")
            nbaGamesTomorrow.classList.add("hidden")

            dateText1.innerHTML = yesterdayDate
            dateText2.innerHTML = yesterdayDate
            
            //hide left arrow
            document.getElementById("dateArrowLeftTop").classList.add("hidden")
            document.getElementById("dateArrowLeftBottom").classList.add("hidden")
            break;
        case 1:
            nbaGamesYesterday.classList.add("hidden")
            nbaGamesToday.classList.remove("hidden")
            nbaGamesTomorrow.classList.add("hidden")

            dateText1.innerHTML = todayDate
            dateText2.innerHTML = todayDate

            //show all arrows
            document.getElementById("dateArrowLeftTop").classList.remove("hidden")
            document.getElementById("dateArrowLeftBottom").classList.remove("hidden")
            document.getElementById("dateArrowRightTop").classList.remove("hidden")
            document.getElementById("dateArrowRightBottom").classList.remove("hidden")
            break;
        case 2:
            nbaGamesYesterday.classList.add("hidden")
            nbaGamesToday.classList.add("hidden")
            nbaGamesTomorrow.classList.remove("hidden")

            dateText1.innerHTML = tomorrowDate
            dateText2.innerHTML = tomorrowDate

            //hide right arrow
            document.getElementById("dateArrowRightTop").classList.add("hidden")
            document.getElementById("dateArrowRightBottom").classList.add("hidden")
            break;
        default:

          break;
      }
}

function toggleHamburger() {
    var hamburgerOpenMenu = document.getElementById("hamburgerOpenMenu");
  
    if (hamburgerOpenMenu.classList.contains("hidden")) {
      // open hamburger
      hamburgerOpenMenu.classList.remove("hidden");
    } else {
      // close hamburger
      hamburgerOpenMenu.classList.add("hidden");
    }
  }