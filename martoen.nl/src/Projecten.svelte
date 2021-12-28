<script>
let reposUrl = "https://api.github.com/users/ms-arrow/repos";
let count = 0; 

(async function (){
    let response = await fetch(reposUrl, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    })

    let data = await response.json();
    console.log(data);

    if (response.status >= 200 && response.status < 400) {
        data.forEach(repo => {
            if (count < 3) {
                let name = repo.name;
                let owner = repo.owner.login;
                let card = document.querySelector(`.project-card-${count} h2`);
                let link = document.querySelector(`.project-card-${count} a`);
                let p = document.querySelector(`.project-card-${count} p`);


                (async function (){
                    let readmeUrl = `https://raw.githubusercontent.com/${owner}/${name}/master/README.md`;

                    let response = await fetch(readmeUrl, {})

                    let readme = await response.text();
                    // console.log(readme);
                    // console.log(readmeFinal);

                    let title = readme.split('\n').shift();
                    // console.log(title);
                    card.textContent = title;

                    let content = readme.split('\n').slice(4,8);
                    // console.log(content);

                    content.forEach(function(line) {
                        p.textContent = line; 
                    });

                    link.href = repo.html_url;
                })();
            }
            count++;
        });
    }
})();
</script>

<div id="projects" class="projects container">
    <h1>Projecten</h1>
    <div class="project-card-0">
        <div class="header">
            <h2>Project 1</h2>
        </div>

        <div class="content">
            <p>Beschrijving van project 1!</p>
            <a href="#projects"><i class="fa fa-link"></i> Github</a>
        </div>
    </div>

    <div class="project-card-1">
        <div class="header">
            <h2>Project 2</h2>
        </div>

        <div class="content">
            <p>Beschrijving van project 2!</p>
            <a href="#projects"><i class="fa fa-link"></i> Github</a>
        </div>
    </div>

    <div class="project-card-2">
        <div class="header">
            <h2>Project 3</h2>
        </div>

        <div class="content">
            <p>Beschrijving van project 3!</p>
            <a href="#projects"><i class="fa fa-link"></i> Github</a>
        </div>
    </div>
</div>

<style>
    .projects {
        flex-direction: column;
    }

    h1 { 
        font-size: 2.5rem; 
    }

    h2 {
        font-size: 1.75rem; 
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    a {
        font-size: 1.2rem; 
        font-weight: bold; 
    }

    div[class^="project-card"] {
        background-color: var(--primary);
        border-radius: 2em;
        margin-top: 2.5em;
        transform-style: preserve-3d;
        width: 80%;
    }

    .header {
        padding: 1em;
        width: 100%;
        background-color: var(--secondary);
        border-radius: 2em 2em 0 0;
    }

    .content {
        padding: 0.5em 1.5em 1.5em 1.5em; 
    }
</style>