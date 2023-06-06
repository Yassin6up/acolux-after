let list = document.getElementById('nav')
let menu = document.getElementById('menu')
let icon = document.getElementById('tog')

let li = Array.from(list.children)

li.forEach((ele)=>{
    ele.onclick = ()=>{
      icon.classList.remove('active')
      menu.classList.remove('menu-on')
    }
})
