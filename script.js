const movies = [
    {
        title: "Stranger Things",
        poster: "https://m.media-amazon.com/images/I/81F+g2Z6t-L._AC_SY679_.jpg"
    },
    {
        title: "Money Heist",
        poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
    },
    {
        title: "Dark",
        poster: "https://m.media-amazon.com/images/I/81h+V4Z1HqL._AC_SY679_.jpg"
    },
    {
        title: "Breaking Bad",
        poster: "https://m.media-amazon.com/images/I/81k+5G0FfEL._AC_SY679_.jpg"
    },
    {
        title: "Wednesday",
        poster: "https://m.media-amazon.com/images/I/71L4VZKf9FL._AC_SY679_.jpg"
    }
];

const movieRow = document.getElementById("movieRow");

function loadMovies() {
    movieRow.innerHTML = "";

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" title="${movie.title}">
        `;

        movieCard.addEventListener("click", () => {
            alert(movie.title);
        });

        movieRow.appendChild(movieCard);
    });
}

loadMovies();
