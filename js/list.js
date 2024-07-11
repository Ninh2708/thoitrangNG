const itemslidebar = document.querySelectorAll(".cartegory-left-li")
itemslidebar.forEach(function(menu, index){
    menu.addEventListener("click", function(){
        menu.classList.toggle("block")
    })
})