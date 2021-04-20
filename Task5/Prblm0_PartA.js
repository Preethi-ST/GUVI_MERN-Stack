console.log("**********DISPLAYING OUTPUT FOR Problem0_PartA**********");
let cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
         {
          name: "bar",
          activities: ["be grumpy", "eat bread omblet"],
          weight: 8,
          furcolor: "white"
         }, 
         {
          name: "foo",
          activities: ["sleep", "pre-sleep naps"],
          weight: 3
         }
    ]
}
   console.log(cat);
   console.log("Adding height and weight property to Fluffy..");
   cat.height = 30;
   cat.weight = 10;
   console.log(cat);

   console.log("Updating Cat name ...");
   cat.name ="Fluffyy";
   console.log(cat);

   console.log("Listing all activities of Fluffy's friends...");
   cat.catFriends.map(val=>val.activities.map(val=>console.log(val)));

   console.log("Printing cat Friend's names...");
   cat.catFriends.map(val => console.log(val.name));

   console.log("Total weight of cat friends ...");
   console.log(cat.catFriends.reduce((acc,val) => {return acc+val.weight;},0));

   console.log("Printing total activities of all cats...");
   cat.activities.map(val => console.log(val));
   cat.catFriends.map(val=>val.activities.map(val=>console.log(val)));

   console.log("Adding 2 more activities to bar and foo ...");
   cat.catFriends[0].activities[cat.catFriends[0].activities.length] = "eating meat";
   cat.catFriends[0].activities[cat.catFriends[0].activities.length] = "running";
   cat.catFriends[1].activities[cat.catFriends[1].activities.length] = "Drinking milk";
   cat.catFriends[1].activities[cat.catFriends[1].activities.length] = "playing with ball";
   console.log(cat);
   console.log("Updating fur color of bar ...");
   cat.catFriends.map(val => {
       if(val.name === "bar")
         {
             val.furcolor = "brown";
         }
   })
   console.log(cat);

