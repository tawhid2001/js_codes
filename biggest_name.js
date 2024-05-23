var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let max = friends[0].length;
let index = 0;

for (let i = 1; i<friends.length; i++)
    {
        let temp = friends[i].length;
        if(max < temp){
            index = i;
        }
    }

console.log(friends[index])