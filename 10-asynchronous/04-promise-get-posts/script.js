// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {

    document.getElementById("run").addEventListener("click", () => {

        const displayArticles = article => {
            for (let elem of article) {
                console.log(elem);
            }
        }

        window.lib.getPosts()
            .then(article => displayArticles(article))

    });

})();
