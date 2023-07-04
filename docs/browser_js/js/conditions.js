// if (){
// }else if(){
// }else{}

let first = 1;
let second = 4 ; 

if (first < 10){
    console.log(`Mano?`);
}else if (first > second){
    console.log(`${first}>${second}`)
}else {console.log(`second : ${second}`);}

// == (값만비교) vs === (data type까지 비교) 
let third = `4`;
first = 4;

// third == first
// true
// third === first
// false

// 삼항연산자 (=if문의 연산자.)
// if (참인 조건){참}else {거짓} 
// 변수 = (조건) ? 참: 거짓; 

let result = (third === first) ? `TRUE`:`FALSE`;
