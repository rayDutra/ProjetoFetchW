function criaMatriz() {
    var matriz = new Array(5);
    for (var i = 0; i < 5; i++)
        matriz[i] = new Array(2);
}
let filmesExibidos = false;
function getTextServer() {
    if (!filmesExibidos) {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=770925a6877dcb6b12c6289e4aa93567&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => {
                criaMatriz();
                for (var l = 0; l < 2; l++) {
                    for (var c = 0; c < 5; c++) {
                        var div = document.createElement("div");
                        div.setAttribute("class", "boxFilme");
                        div.setAttribute("id", `${l}-${c}`);
                        document.getElementById("externa").appendChild(div);
                        const filme = data.results[l * 5 + c].title;
                        const avali = data.results[l * 5 + c].vote_average;
                        const ling = data.results[l * 5 + c].original_language;
                        const dateLan = data.results[l * 5 + c].release_date;
                        var caminhoImg = data.results[l * 5 + c].poster_path;
                        var urlImagem = 'https://image.tmdb.org/t/p/w500' + caminhoImg;

                        document.getElementById(`${l}-${c}`).innerHTML =
                        `<h2><br>${filme}</h2>
                         <p><br><br>Avaliação:<br>${avali}</p>
                         <p><br><br>Linguagem:<br>${ling}</p>
                         <p><br><br>Data de lançamento:<br>${dateLan}</p>
                         <h1><img src = "${urlImagem}" /></h1>`;
                    }
                }
                filmesExibidos = true;
            })
            .catch(error => console.error(error));
    }
}

