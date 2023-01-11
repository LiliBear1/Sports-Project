
//Making the Jumbotron Interactive
// Targeting the search box to retrieve the output of the user favorite football league
// Targeting the search box to retrieve the output of the user favorite team 
// Set some conditions to make sure the user input is within the API
// Setting up the historical search to enable the user to get back to it 
    // Idea 1 - We can have a dropdown for the historical search when the user clicks on the search box
    // idea 2 - Display the historical search below the search box
// Targeting the logo team to output the logo of the user's favorite team right away after his/her input

//Search variables
var btnSearchLeague = document.getElementById('searchLeague');
var btnSearchTeam = document.getElementById('#search-team');
var url = 'https://v3.football.api-sports.io/';


document.addEventListener('DOMContentLoaded', ()=>{
    


    //event for getting league table data
    btnSearchLeague.addEventListener('click', getDataTable);

})

function getDataTable(e) {
    var league = e.target.parentElement.querySelector('select').value;

    if(league!=='') {
        getLeagueTable(league);
    }
    else {
        showAlert();
    }
}

function showAlert() {
  alert  ("There is not an option selected!", "Please choose one.", "error");
}

async function getLeagueTable(league) {

    try {
        await fetch(`${url}competitions/${league}/standings?standingType=HOME`,{
            "method" : "GET",
            "headers" : {
                "X-Auth-Token" : "a1502fa515d558ee4e3c9d6a522dd435" //API key to be added
            }
        })
        .then(resp => resp.json())
        .then(result => {
            var teams = result.standings[0].table;
            console.log(teams);
            cleanHTML(leagueTableBody);
    
            teams.forEach(team => {
                var {position, team: {crestUrl, name, id}, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = team;
                var row = document.createElement('tr');
                var stringTemplate = `
                  <th scope="row">${position}</th>
                  <td class="align-self-center"><img src="${crestUrl}" class="image-team">  ${name}</td>
                  <td>${playedGames}</td>
                  <td>${won}</td>
                  <td>${draw}</td>
                  <td>${lost}</td>
                  <td>${goalsFor}</td>
                  <td>${goalsAgainst}</td>
                  <td>${goalDifference}</td>
                  <td>${points}</td>
                  <td><a href="team-schedule.html?id=${id}" class="text-dark">schedule <i class="fas fa-long-arrow-alt-right"></i></a></td>
                `;
    
                row.innerHTML = stringTemplate;
                btnSearchTeam.appendChild(row);
            });
        });
    }
    catch(error) {
        console.log(error);
    }

    
}


function cleanHTML(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}