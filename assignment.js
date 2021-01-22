// https://github.com/akramulratul/assignment
// kilometer to meter

function kilometerToMeter(kelometer) {

    if(kelometer<0)
    {
        kelometer = 0;
    }

    var calculateMeter =kelometer * 1000;
        return calculateMeter;

}

var meter = kilometerToMeter(29);
console.log(meter);// writes “meter”


// budget valvulator
function budgetCalculator(watch, phone, laptop) {

    if(watch<0)
    {
        watch = 0;
    }
    if(phone<0)
    {
        phone = 0;
    }
    if(laptop<0)
    {
        laptop = 0;
    }
   
    var totalAmount = ((watch * 50) + (phone * 100) + (laptop * 500));

    return totalAmount;
}


var totalBudget = budgetCalculator(3,4,5);
console.log(totalBudget);// writes “totalBudget”


//hotel cost
function hotelCost(day) {

    day = Math.ceil(day);
   

    if (day <= 10 && day > 0) {
        var cost = day * 100;
        return cost;
    }
    else if (day > 10 && day <= 20) {
       var cost = (10 * 100) + ((day - 10) * 80);
        return cost;
    }
    else {
       var cost = (10 * 100) + (10 * 80) + ((day - 20) * 50);
        return cost;

    }

}

var totalCost = hotelCost(15);
console.log(totalCost);// writes “totalCost”



//mega friend

function megaFriend(name) {

    var bigName, max = 0;
    for (var i = 0; i < name.length; i++) {
        if (max < name[i].length) {
            bigName = i;
            max= name[i].length;

        }
    }

    return name[bigName];

}

var biggestName = megaFriend(["Akramul", "klamuddin jahanggir", "tanvir", "pasa vai"]);
console.log(biggestName);// writes “biggestName”