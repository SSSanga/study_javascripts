// 기초?기준?표준? function
function calculateSumFirst(first, second) {
    return first + second
}
let third = calculateSumFirst(4, 6);

let calculateMinusSecond = (first, second) => {
    return first - second
};
// calculateSumSecond(4,3) // 1 

// callback function
// = A function을 call했는데 돌아오는거는 B function이 오는것. 
// 결국 function call해서   other function을 부름
function calculateForth(funcName, param1, param2) {
    //내부에서 calculateSumSecond or calculateSumFirst를 불러오기
    let result = funcName(param1, param2);
    result = result + 10;
    return result;

}
// function calculateSumForth(이미 만들어져있는 function, param1, param2){
//     //내부에서 calculateSumSecond or calculateSumFirst를 불러오기
// }
