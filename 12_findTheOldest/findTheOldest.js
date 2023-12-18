const findTheOldest = function(people) {
    const currentYear =new Date().getFullYear() ;
    const older = people.sort((a,b) =>{
        if(b.yearOfDeath == undefined){
            console.log("hello")
            const lastGuy = a.yearOfDeath - a.yearOfBirth;
            const nextGuy = currentYear - b.yearOfBirth;
            console.log(nextGuy);
            return lastGuy > nextGuy ? -1:1; 
            
        } else if (a.yearOfDeath == undefined){
            console.log("goodbye")
            const lastGuy = currentYear- a.yearOfBirth;
            const nextGuy = b.yearOfDeath- b.yearOfBirth;
            return lastGuy > nextGuy ? -1:1; 
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - a.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    return older[0];
};

// Do not edit below this line
module.exports = findTheOldest;
