document.addEventListener("DOMContentLoaded", event => {
    const styleUrl = `https://viktigsau.org/style.json`;

    fetch(styleUrl)
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error("response not ok");
    }).then(data => {
        document.body.style.backgroundColor = data.colors[0];
    }).catch(err => console.error(err));
})