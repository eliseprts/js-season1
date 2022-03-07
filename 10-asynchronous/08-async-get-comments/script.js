// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {


    document.getElementById("run").addEventListener("click", async () => {

        const nbrComments = await window.lib.getComments();

        const articles = await window.lib.getPosts();

        for (let elem of articles) {
            elem.comments = nbrComments;
        }

        console.log(articles);

    })

})();
