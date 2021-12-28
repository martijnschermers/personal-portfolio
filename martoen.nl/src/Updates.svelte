<script>
    const url = "https://api.github.com/users/ms-arrow/events/public"; 
    let count = 0;

    (async function () {
        const response = await fetch(url, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json'
            }), 
        }); 
        const data = await response.json();
        console.log(data);

        if (response.status >= 200 && response.status < 400) {
            data.forEach(function(i) {
                if (data.type = "PushEvent" && count < 4) {
                    if (i.payload.commits !== undefined) {
                        i.payload.commits.forEach(function(commit) {

                            // const img = document.querySelector(`.update-${count} img`);  
                            // img.src = i.actor.avatar_url;

                            const a = document.querySelector(`.update-${count} a`); 
                            const time = document.querySelector(`.update-${count} time`);

                            (async function() {
                                const response = await fetch(commit.url, { 
                                    method: "GET", 
                                    headers: new Headers({
                                        'Content-Type': "application/json",
                                    }),
                                });
                                const commitData = await response.json();
                              
                                a.href = commitData.html_url; 

                                let date = new Date(commitData.commit.committer.date);
                                time.textContent = date.toString().substring(4, 21);
                                time.datetime = commitData.commit.committer.date;
                            })();

                            const p = document.querySelector(`.update-${count} p`); 
                            p.textContent = commit.message;

                            const h2 = document.querySelector(`.update-${count} h2`); 
                            h2.textContent = i.repo.name;  
                        })
                        count++;
                    }
                }
            })
        } else {
            const errorMessage = document.querySelector('.updates h1')
            errorMessage.textContent = data.message
        }
    })();
</script>

<div id="updates" class="updates container">
    <h1>Updates</h1>

    <div class="update-0">
        <div class="header">
            <!-- <img src="" alt="Avatar"> -->
            <h2>update_1</h2>
        </div>
        
        <div class="content">
            <p>description</p>
            <a href="#updates"><i class="fa fa-link" aria-hidden="true"></i> Github</a>
            <time></time>
        </div>
    </div>

    <div class="update-1">
        <div class="header">
            <!-- <img src="" alt="Avatar"> -->
            <h2>update_2</h2>
        </div>

        <div class="content">
            <p>description</p>
            <a href="#updates"><i class="fa fa-link" aria-hidden="true"></i> Github</a>
            <time></time>
        </div>
    </div>

    <div class="update-2">
        <div class="header">
            <!-- <img src="" alt="Avatar"> -->
            <h2>update_3</h2>
        </div>
        
        <div class="content">
            <p>description</p>
            <a href="#updates"><i class="fa fa-link" aria-hidden="true"></i> Github</a>
            <time></time>
        </div>
    </div>

    <div class="update-3">
        <div class="header">
            <!-- <img src="" alt="Avatar"> -->
            <h2>update_4</h2>
        </div>

        <div class="content">
            <p>description</p>
            <a href="#updates"><i class="fa fa-link" aria-hidden="true"></i> Github</a>
            <time></time>
        </div>
    </div>
</div>

<style>
    .updates {
        margin-top: 5em; 
        flex-direction: column;
    } 

    div[class^="update-"] {
        padding: 1.5em; 
        margin: 1.5em; 
        border-radius: 1.2em;
        box-shadow: .5em .5em var(--white);
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        width: 80%;
        max-width: 756px;
        transition: .3s linear;
    }

    p {
        font-size: 1.2rem;
        margin-block: .7em;
    }

    h2 {
        font-size: 1.6rem;
    }

    h1 {
        font-size: 2.5rem;
    }

    a {
        font-size: 1.2rem;
        font-weight: bold;
    }

    time {
        font-size: 1rem;
        margin-left: 2.5em;
    }

    /* img { 
        object-fit: contain; 
        width: 3em; 
        border-radius: 50%;
    } */
</style>