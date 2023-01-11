//Function for searching team using  

document.querySelector('#teamSearch').addEventListener('click',  function teamSearch(){
    document.querySelector('.section-teamResume').innerHTML= ''

    var teamName = document.querySelector('#teamName').value
	
	fetch(`API URL=${teamName}`).then
    (res => res.json()).then(data =>{
		for (let i = 0 ; i < data.teams.length; i++){
            var logo = document.createElement('img')
            var name = document.createElement('h2')
            var league = document.createElement('p')
            var sport = document.createElement('p')
            var id = document.createElement('p')
            
            logo.setAttribute('src', data.teams[i].strTeamBadge)
            logo.setAttribute('class', 'logo-img')
            name.append(data.teams[i].strTeam)
            league.append(data.teams[i].strLeague)
            sport.append(data.teams[i].strSport)
            id.append(data.teams[i].idTeam);    
            id.setAttribute('id', data.teams[i].idTeam)

            //Pick up the id to pass as function stop-meter teamDetails
            var index = data.teams[i].idTeam

            var div = document.createElement('div')
            div.setAttribute('class', 'teamInfo')
            div.setAttribute (`onclick`,` teamDetails(${index})`)

            div.append(logo, name, league, sport, id)

            document.querySelector('.section-teamResume').append(div)
            document.querySelector('.section-teamDetails').innerHTML = ''
        }
       
	})
})

//Function for searching  teamDetails using  
function teamDetails(index){
	fetch(` URL API=${index}`).then
    (res => res.json()).then(details =>{
        
        var logo = document.createElement('img')
        var name = document.createElement('h2')
        var league = document.createElement('p')
        var sport = document.createElement('p')
        var stadiumName = document.createElement('p')
        var stadiumDesc = document.createElement('p')
        var stadiumImg = document.createElement('img')
        var stadiumCapacity = document.createElement('p')
        var teamCity = document.createElement('p')
        var teamDesc = document.createElement('p')
        var country = document.createElement('p')
        var jerseyImg = document.createElement('img')
        var fanart1Img = document.createElement('img')
        var fanart2Img = document.createElement('img')
        var fanart3Img = document.createElement('img')
        var fanart4Img = document.createElement('img')
        var bannerImg = document.createElement('img')
        var youtube = document.createElement('a')
        var facebook = document.createElement('a')
        var twitter = document.createElement('a')
        var instagram = document.createElement('a')

        logo.setAttribute('src', details.teams[0].strTeamBadge)
        logo.setAttribute('class', 'logo-img-details')
        name.append(details.teams[0].strTeam)
        league.append(details.teams[0].strLeague)
        sport.append(details.teams[0].strSport)

        //Dealing with nulls
        if (details.teams[0].strStadium != null){  
            stadiumName.innerHTML = ('<h3>Stadium name</h3>')
            stadiumName.append(details.teams[0].strStadium)

        }if(details.teams[0].strStadiumDescription != null){
            stadiumDesc.innerHTML = ('<h3>Stadium description </h3>')
            stadiumDesc.append(details.teams[0].strStadiumDescription)

        }if(details.teams[0].strStadiumThumb != null){
            stadiumImg.setAttribute('src', details.teams[0].strStadiumThumb)

        }if(details.teams[0].intStadiumCapacity != null){
            stadiumCapacity.innerHTML = ('<h3>Stadium capacity</h3>')
            stadiumCapacity.append(details.teams[0].intStadiumCapacity)

        }if(details.teams[0].strStadiumLocation != null){
            teamCity.innerHTML = ('<h3>Local stadium</h3>')
            teamCity.append(details.teams[0].strStadiumLocation)

        }if(details.teams[0].strDescriptionEN != null){
            teamDesc.innerHTML = ('<h3>Team description</h3>')
            teamDesc.append(details.teams[0].strDescriptionEN)

        }if(details.teams[0].strCountry != null){
            country.innerHTML = ('<h3>Team country</h3>')
            country.append(details.teams[0].strCountry)

        }if(details.teams[0].strTeamJersey != null){
            jerseyImg.setAttribute('src', details.teams[0].strTeamJersey)

        }if(details.teams[0].strTeamFanart1 != null){
            fanart1Img.setAttribute('src', details.teams[0].strTeamFanart1)

        }if(details.teams[0].strTeamFanart2 != null){
            fanart2Img.setAttribute('src', details.teams[0].strTeamFanart2)

        }if(details.teams[0].strTeamFanart3 != null){
            fanart3Img.setAttribute('src', details.teams[0].strTeamFanart3)

        }if(details.teams[0].strTeamFanart4 != null){
            fanart4Img.setAttribute('src', details.teams[0].strTeamFanart4)

        }if(details.teams[0].strTeamBanner != null){
            bannerImg.setAttribute('src', details.teams[0].strTeamBanner)

        }if(details.teams[0].strYoutube != ''){
            youtube.setAttribute('href', `https://${details.teams[0].strYoutube}`)
            youtube.innerHTML = ('<img src="./youtube.png" alt="Youtube">')

        }if(details.teams[0].strFacebook != null){
            facebook.setAttribute('href', `https://${details.teams[0].strFacebook}`)
            facebook.innerHTML = ('<img src="./facebook.png" alt="Facebook">')

        }if(details.teams[0].strTwitter != null){
            twitter.setAttribute('href', `https://${details.teams[0].strTwitter}`)
            twitter.innerHTML = ('<img src="./twitter.png" alt="Twitter">')

        }if(details.teams[0].strInstagram != null){
            instagram.setAttribute('href', `https://${details.teams[0].strInstagram}`)
            instagram.innerHTML = ('<img src="./instagram.png" alt="Instagram">')

        }if (details.teams[0].strYoutube == ''){
            youtube.innerHTML = ("<p> The team does not contain YouTube links</p>")
        }

        var divTeam = document.createElement('div')
        divTeam.setAttribute('class', 'teamDetails')
        divTeam.append(logo, name, league, sport, stadiumName, stadiumDesc, stadiumImg,
        stadiumCapacity, teamCity, teamDesc, country, jerseyImg, fanart1Img, fanart2Img,
        fanart3Img, fanart4Img, bannerImg, youtube, facebook, twitter,instagram)
        document.querySelector('.section-teamDetails').append(divTeam)

        document.querySelector('.section-teamResume').innerHTML = ''
        
    } )
}

//Function for the script to run after the page using using  
function onLoadFunct(){

//Function searching for player
document.getElementById('playersSearch').addEventListener('click', function playersSearch(){
    document.querySelector('.section-playerResume').innerHTML= ''

    var playerName = document.getElementById('playerName').value
	
	fetch(` URL API=${playerName}`).then
    (res => res.json()).then(data =>{
		for (let i = 0 ; i < data.player.length; i++){
            var playerImg = document.createElement('img')
            var playerName = document.createElement('h2')
            var playerTeam = document.createElement('p')
            var playerId = document.createElement('p')
            
            playerName.append(data.player[i].strPlayer)
            playerTeam.append(data.player[i].strTeam)
            playerId.append(data.player[i].idPlayer);    
            playerId.setAttribute('id', data.player[i].idPlayer)
           

            //Get player photo
            if (data.player[i].strCutout != null){
                playerImg.setAttribute('class', 'player-logo-img')
                playerImg.setAttribute('src', data.player[i].strCutout)
                
            }else{
                playerImg = document.createElement('p')
                playerImg.innerHTML = ("Picture not available")
            }

            //Pick up the id to pass as function stop-meter playerDetails
            var indexPlayer = data.player[i].idPlayer

            var div = document.createElement('div')
            div.setAttribute('class', 'playerInfo')
            div.setAttribute (`onclick`,` playerDetails(${indexPlayer})`)

            div.append(playerImg, playerName, playerTeam, playerId)

            document.querySelector('.section-playerResume').append(div)
            document.querySelector('.section-playerDetails').innerHTML = ''
        }
	})
})
}

//Function player information using using  
function playerDetails(indexPlayer){
	fetch(`  URL APId=${indexPlayer}`).then
    (res => res.json()).then(detail =>{
        document.querySelector('.section-playerDetails').innerHTML = ''

        var playerImg = document.createElement('img')
        var playerName = document.createElement('h2')
        var playerCutoutImg = document.createElement('img')
        var playerRenderImg = document.createElement('img')
        var playerBannerImg = document.createElement('img')
        var playerFanart1Img = document.createElement('img')
        var playerFanart2Img = document.createElement('img')
        var playerFanart3Img = document.createElement('img')
        var playerFanart4Img = document.createElement('img')
        var playerInstagram = document.createElement('a')
        var playerFacebook = document.createElement('a')
        var playerTwitter = document.createElement('a')
        var playerHeight = document.createElement('p')
        var playerWeight = document.createElement('p')
        var playerPosition = document.createElement('p')
        var playerDesc = document.createElement('p')
        var playerLocation = document.createElement('p')
        var playerKit = document.createElement('iframe')
        var playerBorn = document.createElement('p')
        var playerNationality = document.createElement('p')
        var playerTeam = document.createElement('p')
        var kitPlayer = detail.players[0].strKit
        
        playerName.append(detail.players[0].strPlayer)
        playerTeam.innerHTML = ('<h3>Time</h3>')
        playerTeam.append(detail.players[0].strTeam)
    

        //Dealing with nulls
        if (detail.players[0].strThumb != null){  
            playerImg.setAttribute('src', detail.players[0].strThumb)

        }if(detail.players[0].strDescriptionEN != null){
            playerDesc.innerHTML = ('<h3>Description</h3>')
            playerDesc.append(detail.players[0].strDescriptionEN)

        }if(detail.players[0].strPosition != null){
            playerPosition.innerHTML = ('<h3>Position</h3>')
            playerPosition.append(detail.players[0].strPosition)

        }if(detail.players[0].strBirthLocation != null){
            playerLocation.innerHTML = ('<h3>PLACE OF BIRTH]</h3>')
            playerLocation.append(detail.players[0].strBirthLocation)

        }if(detail.players[0].strHeight != null){
            playerHeight.innerHTML = ('<h3>HEIGHT</h3>')
            playerHeight.append(detail.players[0].strHeight)

        }if(detail.players[0].strWeight != null){
            playerWeight.innerHTML = ('<h3>Weight</h3>')
            playerWeight.append(detail.players[0].strWeight)

        }if(detail.players[0].dateBorn != null){
            playerBorn.innerHTML = ('<h3>Date of birth</h3>')
            playerBorn.append(detail.players[0].dateBorn)

        }if(detail.players[0].strNationality != null){
            playerNationality.innerHTML = ('<h3>Nationality</h3>')
            playerNationality.append(detail.players[0].strNationality)

        }if(detail.players[0].strCutout != null){
            playerCutoutImg.setAttribute('src', detail.players[0].strCutout)

        }if(detail.players[0].strRender != null){
            playerRenderImg.setAttribute('src', detail.players[0].strRender)

        }if(detail.players[0].strBanner != null){
            playerBannerImg.setAttribute('src', detail.players[0].strBanner)

        }if(detail.players[0].strFanart1 != null){
            playerFanart1Img.setAttribute('src', detail.players[0].strFanart1)

        }if(detail.players[0].strFanart2 != null){
            playerFanart2Img.setAttribute('src', detail.players[0].strFanart2)

        }if(detail.players[0].strFanart3 != null){
            playerFanart3Img.setAttribute('src', detail.players[0].strFanart3)

        }if(detail.players[0].strFanart4 != null){
            playerFanart4Img.setAttribute('src', detail.players[0].strFanart4)

        }if(detail.players[0].strFacebook != null){
            playerFacebook.setAttribute('href', `https://${detail.players[0].strFacebook}`)
            playerFacebook.innerHTML = ('<img src="./facebook.png" alt="Facebook">')

        }if(detail.players[0].strTwitter != null){
            playerTwitter.setAttribute('href', `https://${detail.players[0].strTwitter}`)
            playerTwitter.innerHTML = ('<img src="./twitter.png" alt="Twitter">')

        }if(detail.players[0].strInstagram != null){
            playerInstagram.setAttribute('href',`https://${detail.players[0].strInstagram}`)
            playerInstagram.innerHTML = ('<img src="./instagram.png" alt="Instagram">')


        }

        var divPlayer = document.createElement('div')
        divPlayer.setAttribute('class', 'playerDetails')
        divPlayer.append(playerName, playerTeam, playerImg, playerCutoutImg, playerRenderImg, playerBannerImg,
        playerFanart1Img, playerFanart2Img, playerFanart3Img, playerFanart4Img, playerHeight, playerWeight, 
        playerPosition, playerDesc, playerLocation, playerBorn, playerNationality, playerTeam, playerKit, playerInstagram, 
        playerFacebook, playerTwitter)

        document.querySelector('.section-playerDetails').append(divPlayer)

        document.querySelector('.section-playerResume').innerHTML = ''
        
    })
}