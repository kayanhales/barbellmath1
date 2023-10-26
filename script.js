console.log("Hello. Welcome to Barbell Calculator...");

//let targetWeight = prompt("Enter target weight");
//let barbellWeight = prompt("Enter barbell weight (35lbs or 45lbs)");
//available plates
let plates = [55,45,35,15,10,5,2.5,1];
let targetWeight = 235;
let barbellWeight = 35;
let remainingWeight = targetWeight-barbellWeight;

console.log(targetWeight, barbellWeight, remainingWeight);

//getPlates(remainingWeight); 

function getPlates(weight){ 
    if (weight == 0){
        result = "You need no (more) plates. ";
        console.log(result);
        document.querySelector('#result').textContent += result;
        return weight;
    }
    else if (weight > 0){ 
        for (let i=0; i<plates.length; i++){
            if ((plates[i]*2) <= weight){
                result = "You need two "+plates[i]+" lbs plates. ";
                console.log(result);
                document.querySelector('#result').textContent += result;
                getPlates(weight-(plates[i]*2));
                break;
            }      
        }
    }
    else{
        return console.log("Oopsie...");
    }
}

function getPercentages(oneRepMax){
    return "60% = " +Math.floor(oneRepMax*0.6)+" lbs, 70% = " +Math.floor(oneRepMax*0.7)+ " lbs, 80% = " +Math.floor(oneRepMax*0.8)+ " lbs.";
}

function convertToKgs(pounds){
    return Math.floor(pounds/2.2)+" kgs.";
}

function convertToPounds(kgs){
    return Math.floor(kgs*2.2)+" lbs.";
}

function convertToLbs(){
    converttolbs = document.getElementById("converttolbs").value;
    document.querySelector('#result2').textContent = convertToPounds(converttolbs);
    return false;
}

function getPlatesMain(){
    target = document.getElementById("target").value;
    barbell = document.getElementById("barbell").value;
    getPlates(target-barbell);
    document.querySelector('#result').textContent += " | Percentages: "+getPercentages(target);
    document.querySelector('#result').textContent += " | Kgs: "+convertToKgs(target);
    return false;
  }
