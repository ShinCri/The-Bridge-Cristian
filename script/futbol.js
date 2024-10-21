const teams_number = 20;
let liga =[];


for(i=1;i<=teams_number;i++){
  liga.push(i);
}



function jornadas(n){
  return ((n-1)+((n-2)/2)*(n-1));
}

const calc = jornadas(teams_number);
let variableLiga = liga;
let jornadaMatches = [];

for(x=1;x<calc;x++){
let matches = [];
  for(y=0;y<variableLiga.length/2;y++){

    const teamA = ;
    const teamB=
    matches.push(teamA +"-"+teamB);
  }
jornadaMatches.push(matches);
}

console.log(jornadaMatches);

