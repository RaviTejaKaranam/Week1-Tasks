//Problem 0 part A

var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omblet"],
      weight: 8,
      furcolor: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3,
    },
  ],
};
// Add height and Weight to fluffy
cat.height = 10;
cat.weight = 5;
console.log(cat.height, cat.weight);

//Update fluffy name
cat.name = "Fluffyy";
console.log(cat.name);

//List all activities of Fluffyy's cat friends
console.log(cat.catFriends[0].activities);
console.log(cat.catFriends[1].activities);

//Print the cat friends names
console.log(cat.catFriends[0].name);
console.log(cat.catFriends[1].name);

//Print the total weight of cat friends
console.log(cat.catFriends[0].weight + cat.catFriends[1].weight);

//Print the total activities of all cats
console.log(
  cat.activities[0] + ',' + 
  cat.activities[1] + ',' + 
  cat.catFriends[0].activities[0] + ',' + 
  cat.catFriends[0].activities[1] + ',' + 
  cat.catFriends[1].activities[0] + ',' + 
  cat.catFriends[1].activities[1]
);


//Add two more activities to bar and foo cats
cat.catFriends[0].activities[2] = "being lazy"
cat.catFriends[0].activities[3] = "playing"

cat.catFriends[1].activities[2] = "being lazy"
cat.catFriends[1].activities[3] = "playing"

console.log(cat.catFriends)

//Update the fur color of bar
cat.catFriends[0].furcolor = "brown"
console.log(cat.catFriends)
