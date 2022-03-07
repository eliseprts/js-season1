// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {

    document.getElementById("run").addEventListener("click", () => {

        const displayArticles = article => {
            for (let elem of article) {
                console.log(elem);
            }
        }

        window.lib.getComments()
            .then(nbrComments => {
                // console.log(nbrComments);
                for (let elem of article) {
                    elem.comments = nbrComments;
                }
            })

        window.lib.getPosts()
            .then(article => displayArticles(article))

    })

})();
