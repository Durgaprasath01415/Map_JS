let dictionary = new Map();
let num = 1;
let key = 0;
let count = 0;
for(let key = 1; key <=12; key++){
        dictionary.set(key,0);
}
while (count <= 50 ){
        num = Math.floor(Math.random()*(13-1)+1 );
        dictionary.set(num,dictionary.get(num)+1);
        count++;
}
for(let [key, value] of dictionary)
console.log("Month : " +key +" \nno of person having birthday on this month : " +value)