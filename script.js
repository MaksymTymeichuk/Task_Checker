let code = "function ok(){ return 12 }"
let input = document.getElementById("input")
input.value = "function add(n,m){}"
let tests = [[" add(1,2)"," add(4,5)"," add(5,7)"," add(10,-1)"],["reverse('hello')","reverse('I am Max!')","reverse('Right')","reverse('asfafafasf')"]]
let answers = [[3,9,12,9],["olleh","!xaM ma I","thgiR","fsafafafsa"]]
let count = 0
let pop_up = document.getElementById("pop-up")
let top1 = document.getElementById("top1")
let index = 0
let black_screen = document.getElementById("black_screen")
let test = document.getElementById("test")
let is_correct = document.getElementById("is_correct")
let img1 = document.getElementById("img1")
black_screen.style.display = "none"
pop_up.style.display = "none"
let close1 = document.getElementById("close1")
close1.addEventListener("click", ()=>{
    pop_up.style.display = "none"
    black_screen.style.display = "none"
})
let bottom = document.getElementById("bottom")

let submit_button = document.getElementById("submit_button").addEventListener("click",()=>{
    for(let i = 0;i<=3;i++){
        let code = input.value + tests[index][i]
        console.log(code,)
        if(eval(code)==answers[index][i]){
            count+=1
        }
    }
    pop_up.style.display = "flex"
    black_screen.style.display = "flex"
    test.innerText = "Пройдено тестів:"+count+"/4"
    if(count==4){
       top1.style.background = "linear-gradient(#20BF55,#02BAEC)"
        img1.src = "tick.png"
        pop_up.style.border = "solid 5px #20BF55"
        count = 0
        bottom.innerText = "Чудово!"
    }
    else{
        count = 0
        
        img1.src = "close.png"
        top1.style.background = "linear-gradient(#E66249,#D45A43)" 
        pop_up.style.border = "solid 5px #D45A43"
        bottom.innerText = "Неправильно!"
    }
})


function sayHello(name){
    console.log("Hello " + name)
}

let text = document.getElementById("text")
sayHello("Max")
let title = document.getElementById("title")

let arr = document.getElementsByClassName("task")
arr[0].style.boxShadow = 'inset 10px 10px 70px white'
for(let i = 0;i<=3;i++){
    arr[i].addEventListener("click",()=>{
        for(let g = 0;g<=3;g++){
            arr[g].style.boxShadow = ''
            arr[i].style.boxShadow = 'inset 10px 10px 70px white'
        }
        
        index = arr[i].innerText-1
        console.log(index)
        if(index==0){
            input.value = "function add(n,m){}"
            title.innerText = "Задача #1"
            text.innerText = "Тестувальна задача у якій вам потрібно зробити функцію яка буде додавати два числа."
        }
        if(index==1){
            input.value = "function reverse(n){}"
            title.innerText = "Задача #2"
            text.innerText = "Перевернути! В цій задачі вам потрібно вивести повернуту задом на перед стрічку."
        }
    })
}