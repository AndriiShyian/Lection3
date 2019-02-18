console.log('List');
const list = ['хліб', 'сир', 'молоко', 'яйця', 'апельсини'];
function createList(list){
    for(let i = 0; i < list.length; i++){ 
        console.log(i + 1 +'. '+ bigLetter(list[i])+' '+countLetters(list[i]));
    }
}
function bigLetter(row){
const firstSymbol = row[0].toUpperCase();
return firstSymbol +row.substr(1);
} 
function countLetters(rew){
 return rew.length;
 
}
createList(list);
console.log(bigLetter('bread'));
console.log(countLetters('werf'))



// task3
// function sum(from =0,to=10){
//     let sum = 0;
//     if(from<to){
//     for(let counter = from; counter<=to;counter++){
//         sum+=counter;
//     }
//     return sum;
//     }
//     console.log('Nerealno');
// }
// console.log(sum());





// task 2
// function areaCircle(radius){
//     if(isNaN(+radius)){
//         return 'radius is not a number ';
//     }
//     return Math.PI * radius *radius;
//     }
//     console.log(areaCircle('thyju'));
// 


// 1 task 
// const age = 25;
// let counter = 1;
// console.log('For)');
// 1{
// for(counter; counter<=1000;counter++){
//     if(counter%age===0){
//     console.log('Numbers '+ counter);
//     }
// }
// console.log('do while');
// do{
//     if(counter % age ===0){
//      console.log('Numbers ' + counter);
//      }          

//  counter++
// }
// while(counter<=1000);

// while(counter <= 1000){
//     if(counter % age ===0){
//         console.log('Numbers ' + counter);
//     }
// counter++
// }
