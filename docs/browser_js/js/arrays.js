// Array초기화
// 1. instance화 java용어로 대체함. 
let init_array = new Array();
// 2. let init_array[];
let fruits = ["apple", "banana", "orange", "mellon"];
//array에서 많이 사용하는 function 
//.lenght = size / .push = 추가로 넣기 /.indexOf = 특정위치 확인 (array의 index 위치로 나옴 0,1,2...)
// .join(' and ') = 배열을 모두 합해서 String으로 표현_ex: 전체 값을 통으로 보고자할때 and 포함해서
// fruits.length
// 4
// fruits.push('lemon')
// 5
// fruits.indexOf('apple')
// 0
// fruits.join (' and ')
// 'apple and banana and orange and mellon and lemon'

// = list와 list를 붙이는 표현, 변수로 지정해줘야 완벽하게 붙어서 표현됨.
let fruits_second = ["berry", "strawberry"] ;
let fruits_concat = fruits.concat(fruits_second);

