// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            if (error) {
                console.log(error);
            };
            for (let elem of articles) {
                console.log(elem);
            };
        });
    });

})();
