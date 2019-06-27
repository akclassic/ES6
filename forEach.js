//before es6 using classical for lopp
/*
var games = ["PUBG PC","TAKEN", "DOTA 2", "MORTAL KOMBAT","PUBG MOBILE"];
for(var game = 0; game<games.length;game++){
    console.log(games[game]);
}

output: PUBG PC
        TAKEN
        DOTA 2
        MORTAL KOMBAT
        PUBG MOBILE
*/

//using forEach helper
const games = ["ROAD RASH","CONTRA", "VITRUA COP 2", "IGI","PRINCE OF PERSIA"];
games.forEach(game => console.log(game));

// output: 
// ROAD RASH
// CONTRA
// VITRUA COP 2
// IGI
// PRINCE OF PERSIA