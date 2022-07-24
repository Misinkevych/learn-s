let input = document.querySelector('#input')
let addTask = document.querySelector('#add')
let delTask = document.querySelector('#del')
let list = document.querySelector('#list')

addTask.addEventListener('click', function(){
    if(input.value=== '') return
    add()
    input.value = ''
  
})

// document.getElementById('wrap').onblur = function() {
//     console.log(this.value.length);
//     if (this.getAttribute('data-length') > this.value.length) {
//       this.classList.remove('valid');
//       this.classList.add('invalid');
//     } else {
//       this.classList.remove('invalid');
//       this.classList.add('valid');
//     }
//   };

function add(){
    const li= document.createElement('li')
    list.appendChild(li)
    li.textContent=input.value

    delTask.addEventListener('click', function(){
list.removeChild(li)
    })

}