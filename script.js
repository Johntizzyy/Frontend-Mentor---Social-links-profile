const links = document.querySelectorAll(".link")

links.forEach((link,i) => {

    link.addEventListener('click',() => {
        
        if (link.classList.contains('active')){
            link.classList.remove("active")
        }else{
            link.classList.add("active")
        }

    })
})
