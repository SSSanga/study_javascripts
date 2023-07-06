// id 콕찝어야함_html document자원 이용
let keydownObject = document.querySelector("#keydownEnter");
//위의 구문은 commons의 <input>을 동일한 id를 통해 가져온것. 
// keydownObject가 
keydownObject.addEventListener("keydown",(event)=>{
if (event.code == 'Enter')
    {console.log(`key down : ${event.code}`)};
});