function User(infoString) {
    var attributesArray = infoString.split(",").trim();
    var first = attributesArray[0];
    var last = attributesArray[1];
    var casual = attributesArray[2];
    var newComer = attributesArray[3];
    var platforms = attributesArray[4].split(" ");
    var skillSet = attributesArray[5].split(" ");
    var lookingFor = attributesArray[6].split(" ");
    var bio = attributesArray[7];

    this.first = first;
    this.last = last;
    this.casual = casual;
    this.newComer = newComer;
    this.platforms = platforms;
    this.skillSet = skillSet;
    this.lookingFor = lookingFor;
    this.bio = bio;
    this.compatibility = 0;
}

var binarySearch = function (array, key, min, max) {
    while (min <= max) {
        var mid = (min + max) / 2;
        if (array[mid] == key) {
            return true;
        } else if (array[mid] > key) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return false;
};

var compatibilityTest = function (user, potentialMatch) {
    var temp = user.filter(function (n) {
        return potentialMatch.indexOf(n) != -1
    });
    return temp.length;
}

var filterUsers = function (newUser, oldUsers) {
    var filteredArray = oldUsers.filter(function (user) {
        return newUser.casual == user.casual &&
            newUser.newComer == user.newComer &&
            (newUser.platforms[0] == user.platforms[0] ||
                newUser.platforms[1] == user.platforms[1] ||
                newUser.platforms[2] == user.platforms[2]);
    });
    return filteredArray;
}

var createMatches = function (attributeString, users) {


    var newUser = new User(attributeString);
    newUser.skillSet.sort();
    newUser.lookingFor.sort();
    if (users !== null) {
        var filteredArray = filterUsers(newUser, users);

        var matches = [];
        for (var i = 0; i < filteredArray.length; i++) {
            var score1 = compatibilityTest(newUser.skillSet, filteredArray[i].lookingFor);
            var score2 = compatibilityTest(filteredArray[i].skillSet, newUser.lookingFor);
            filteredArray[i].compatibility = score1 + score2;
            matches.push(filteredArray[i]);

        }
        matches.sort(function (user1, user2) {
            if (user1.compatibility > user2.compatibility) {
                return -1;
            } else if (user2.compatibility > user1.compatibility) {
                return 1;
            } else {
                return 0;
            }
        });
        return matches;
    } else {
        users.push(newUser);
    }


}

var sushi = new User("Sushi,Yamamoto,true,true,false false true,JS Python Ruby,Android IOS Objective-C,whatever");
sushi.skillSet.sort();
sushi.lookingFor.sort();

var jason = new User("Jason,Friso,true,true,false false true,C Ruby Android,Python IOS Objective-C,whatever");
jason.skillSet.sort();
jason.lookingFor.sort();

var brian = new User("Brian,Daddo,true,true,false false true,C Python,Python Jango,whatever");
brian.skillSet.sort();
brian.lookingFor.sort();

var users = [sushi, brian, jason];
var dave = "David,Tamrazov,true,true,true true true,Objective-C IOS,Ruby Android,whatever";

var matchedArray = createMatches(dave, users);
console.log(matchedArray);
