let links = document.querySelectorAll("a");
links.forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        let fx = document.createElement("div");
        fx.classList.add("fx");
        document.body.appendChild(fx);

        setTimeout(function(){
            window.location.href = link.getAttribute("href");
        },300)
    }
});