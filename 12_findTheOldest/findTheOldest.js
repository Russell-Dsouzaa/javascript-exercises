const findTheOldest = function(people) {
    var result = 0;
    var deathYear = 0;

    function getAge(birth,death) {
        if (!death) {
            deathYear = new Date().getFullYear();
            return deathYear - birth;
        }
        
        return death - birth;
    }

    let p = {
        name: "",
    }

    for (person of people) {
        var age = getAge(person.yearOfBirth,person.yearOfDeath);
        if (result < age) {
            if (!person.yearOfDeath) {
                result = deathYear - person.yearOfBirth;
                p = person;
            } else {
                result = person.yearOfDeath - person.yearOfBirth;
                p = person;
            }
        }
    }

    return p;
};

// Do not edit below this line
module.exports = findTheOldest;
