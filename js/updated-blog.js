// const boxes = document.querySelectorAll('.box');


// // function to create the modal 
// const parentModal = document.querySelector('.modal-parent-holder')


// // const prevBox = (reed)=>{
// //   createStoryBox()
// //   console.log(boxes);
// // }

// // boxes.forEach(box => {
// //   box.addEventListener('click', function click(event) {
// //     createStoryBox()

// //     // console.log(createStoryBox);
// //   });
// // });

// const  prevBox = () =>{
//   console.log('Hello World');
//   parentModal.classList.add('open-modal')
// }


const modal = document.querySelector('.modal-parent-holder')
const modDate = document.querySelector('.mod-date')
const modTitle = document.querySelector('.title')
let modBody = document.querySelector
let close = document.querySelector('.mod-close')

const prevBox = (component) =>{
  modal.classList.add('open-modal')
  let postDate = component.children[0]
  modDate.textContent = postDate.textContent

  let postTitle = component.children[1]
  modTitle.textContent = postTitle.textContent
  disable()
}


// close thge modal
close.onclick = () =>{
  modal.classList.remove('open-modal')
}

function disable() {
  document.body.classList.add("stop-scrolling");
}

