let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let inner = document.querySelector('.inner');
let closeAll = document.querySelector('.closeAll');
let todolist = document.querySelector('.todolist');



// let data = [];
// localStorage.setItem('todo', data);
// localStorage.removeItem('todo');
let data = JSON.parse(localStorage.getItem('todo')) || [];
// if (!data) data = [];
// data ||= [];
console.log(data);
for (const show of data) {
    makeListItem(show);
}

// 추가함수
function makeListItem(memo){ // 리스트에 항목을 생성하여 추가함
    if (!memo) return;
    // memo = 첫번째 인자의 내용
    const list = document.createElement('li');
    list.className = "todolist";
    // console.log(input);

        list.innerHTML = memo;
        inner.append(list);
        // input.value = "";

    list.addEventListener('click', function(){     
        list.classList.toggle('line');
    })
    list.addEventListener('dblclick', function(){

        const idx = [...inner.children].indexOf(this);
        inner.removeChild(list);
        // localStorage.removeItem('todo'.this);
        console.log("클릭한 li의 index는 "+idx);
        data.splice(idx, 1);
        localStorage.setItem('todo', JSON.stringify(data));
        // console.log("지워진 내용은", this)
    })
}

 // input.value 값 검사 및 makeListItem에 전달
function add(){
    if (!input.value) {
        alert("내용을 입력해주세요.");
        return;
    }
    makeListItem(input.value);
    data.push(input.value);
    localStorage.setItem('todo', JSON.stringify(data));
    input.value = "";
}


// if(!memo){
//     alert('내용을 입력해주세요');
// }else{
//     input.value = "";
// }



// 클릭시
btn.addEventListener('click', function(){
     add();
})

// 엔터 입력시
input.addEventListener('keypress', (e)=>{
    if( e.key === 'Enter'){
    add();
    }
})

// 모두닫기
    let innerChild = inner.children;

    // console.log(closeAll);
    closeAll.addEventListener('click', function(){

        while(inner.children.length) inner.removeChild(inner.firstChild);
        data = [];
        localStorage.setItem('todo', JSON.stringify(data));
    })


    // function refresh(){
    //     data = [];
    //     for (const addinnerChild of inner.children) {
    //         data.push(addinnerChild.innerHTML);
    //         console.log(addinnerChild);
    //     }
    // }
