var btnSearch = document.getElementById('search');
var leagueTableBody = document.getElementById('table');
var url = 'https://api.football-data.org/v2/';
window.sr = ScrollReveal();

document.addEventListener('DOMContentLoaded', ()=>{
    
    //scroll animations
    sr.reveal('header', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('#form-container', {
        duration: 3000,
        origin: 'right',
        distance: '-100px'
    });

    sr.reveal('#container-table', {
        duration: 3000
    })

    //event for getting league table data
    btnSearch.addEventListener('click', getDataTable);

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
    swal("There is not an option selected!", "Please choose one.", "error");
}

async function getLeagueTable(league) {

    try {
        await fetch(`${url}competitions/${league}/standings?standingType=HOME`,{
            "method" : "GET",
            "headers" : {
                "X-Auth-Token" : "fb158dbd69914356b52d87836a01a36f"
            }
        })
        .then(resp => resp.json())
        .then(result => {
            var teams = result.standings[0].table;
            console.log(teams);
            cleanHTML(leagueTableBody);
    
            teams.forEach(team => {
                let {position, team: {crestUrl, name, id}, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = team;
                let row = document.createElement('tr');
                let stringTemplate = `
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
                leagueTableBody.appendChild(row);
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

