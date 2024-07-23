document.addEventListener('DOMContentLoaded', function(){
    const endpoint = "https://api.github.com/users/FabioMedeiros1000";

    // fetch(endpoint).then(function(resposta){
    //     resposta.json();
    // }).then(function(json){
    //     console.log(json.login);
    // })

    fetch(endpoint).then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        const usuario = `@${json.login}`;
        const seguidores = json.followers;
        const seguindo = json.following;
        const repositoriosPrivados = 1;
        const repositorios = json.public_repos + repositoriosPrivados;
        const linkGitHub = json.html_url;

        const profileUsername = document.querySelector('.profile-username');
        const repositories = document.querySelector('#repositorios');
        const followers = document.querySelector('#seguidores');
        const following = document.querySelector('#seguindo');
        const profileAvatar = document.querySelector('.profile-avatar');
        const profileLink = document.querySelector('.profile-link');

        profileUsername.innerHTML += usuario;
        repositories.innerHTML += repositorios;
        followers.innerHTML += seguidores;
        following.innerHTML += seguindo;
        profileAvatar.src = json.avatar_url;
        profileLink.href = linkGitHub;
        // console.log(json);
    })
    .catch(function(erro){
        alert("Erro inesperado! Por favor, aguarde para que providências sejam tomadas!")
    })
})