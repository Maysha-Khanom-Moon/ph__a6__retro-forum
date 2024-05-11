function discuss() {
    fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    .then(response => response.json())
    .then(data => go(data))
}

function go(data) {
    const ul = document.getElementById('list')

    for (const i of data["posts"]) {
        const li = document.createElement('li')
        li.innerHTML = i.description;

        ul.appendChild(li)
    }
}