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
                    // const card = document.getElementById('update'); 
                    console.log(count); 
                    if (i.payload.commits !== undefined) {
                        i.payload.commits.forEach(function(commit) {
                            console.log(commit)
                            const p = document.querySelector(`.update${count} p`); 
                            p.textContent = commit.message;

                            const h2 = document.querySelector(`.update${count} h2`); 
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

    <div class="update0">
        <h2>update_1</h2>
        <p>description</p>
    </div>

    <div class="update1">
        <h2>update_2</h2>
        <p>description</p>
    </div>

    <div class="update2">
        <h2>update_3</h2>
        <p>description</p>
    </div>

    <div class="update3">
        <h2>update_4</h2>
        <p>description</p>
    </div>
</div>

<style>
    .updates {
        flex-direction: column;
    } 

    .updates div {
        margin: 1.5em; 
        border-radius: 1.2em;
        padding: 2em; 
        box-shadow: .5em .5em var(--white);
        background: linear-gradient(45deg, var(--primary), var(--secondary));
        width: 80%;
        max-width: 756px;
        transition: .3s linear;
    }

    .updates div:hover {
        background: linear-gradient(45deg, var(--secondary), var(--primary));
    }

    p {
        font-size: 1.2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h1 {
        font-size: 2.5rem;
    }
</style>