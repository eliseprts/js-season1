// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {

    document.getElementById("run").addEventListener("click", () => {


        window.lib.getPosts((error, articles) => {
            if (error) {
                console.log(error);
            }
            for (let elem of articles) {
                const nbrComments = window.lib.getComments();
                elem.comments = nbrComments;
                console.log(elem);
            }
        })

    });
})();
