const inputElement = document.getElementById('input')
const addBtn = document.getElementById('addbtn')
const todos = document.getElementById('todos')
const completedElement = document.getElementById('completed')

let toDosCompleted = 0


addBtn.addEventListener('click', addNew)
document.addEventListener('keydown', (e)=>{
  if(e.key == 'Enter'){addNew()}
})

function capitalise(str){
  return str.charAt(0).toUpperCase() +str.slice(1)
}

function addNew(){
 
  let newToDo = capitalise(inputElement.value)
  
  if(newToDo == ''){
   alert('Input valid Todo')
  }else{
    addToDo(newToDo)

    displayNumber()
  }
  
  inputElement.value = ''

}

function addToDo(newToDo){
  let toDo = document.createElement('li')
  let toDoIcon = document.createElement('span')
  let deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('id', 'delete')
  deleteBtn.textContent ='x'
  toDoIcon.innerHTML =  `<i class="fa-regular fa-square"></i>`
  toDo.innerHTML = ` ${newToDo}`
  toDo.appendChild(toDoIcon)
  toDo.appendChild(deleteBtn)
  deleteBtn.addEventListener('click',deleteToDo)
  toDo.addEventListener('click',done)
  todos.appendChild(toDo)
}

function done( event, toDoIcon){
  if(event.target.tagName = 'li'){
    toDoIcon = this.querySelector('span')
    this.classList.toggle('done')
    if(this.classList.contains('done')){
      toDoIcon.innerHTML ='<i class="fa-solid fa-square-check"></i>'
      toDosCompleted++
      }else{
        toDoIcon.innerHTML =  `<i class="fa-regular fa-square"></i>`
        toDosCompleted--
      }
      displayNumber()
      console.log('done')

  }
 
 

    
  }
  

function deleteToDo(e){
  
  e.stopPropagation()
    let deleted = this.parentElement
    todos.removeChild(deleted)
    if(deleted.classList.contains('done')){
      toDosCompleted--
      }
      displayNumber()

  
 
}

function displayNumber(){
  completedElement.innerHTML = `${toDosCompleted} / ${todos.children.length} completed`

}
