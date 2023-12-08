

function changeTheme() {

    document.body.classList.toggle("theme")

    if (document.body.classList.contains("theme")) {
        for (let i = 0; i < 50; i++)
            document.body.innerHTML += `<img src="res/leaves.png" class="tmp_leaf" alt="">`

        let leaves = document.querySelectorAll(".tmp_leaf")
        console.log(leaves.length) // What
        
        for (let leaf of leaves) {
            leaf.className = "leaf"
            const startPositionX = Math.random() * window.innerWidth - 50
            const animationDuration = Math.random() * 5 + 5 // entre 5 et 10 secondes

            leaf.style.left = startPositionX + "px"
            leaf.style.animationDuration = animationDuration + "s"

            setTimeout(() => leaf.remove(), ~~(animationDuration * 1000))
        }
        document.body.style.backgroundColor = "green"
        //document.querySelector("nav").style.backgroundImage = "url('/wood.jpg')"
    } else {
        document.body.style.backgroundColor = ""

        const oldleaves = document.querySelectorAll(".leaf")
        for (leaf of oldleaves)
            leaf.remove()
    }
}