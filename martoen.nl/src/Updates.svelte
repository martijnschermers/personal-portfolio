<script>
  let url = "https://api.github.com/users/martijnschermers/events/public";
  let commits = [];
  let count = 0;

  (async function () {
    let response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    let data = await response.json();

    if (response.ok) {
      data.forEach(async function (i) {
        if (data.type = "PushEvent" && count < 4) {
          if (i.payload.commits !== undefined) {
            await Promise.all(i.payload.commits.map(async function(commit) {
              let placeholder = {};

              (async function () {
                let response = await fetch(commit.url, {
                  method: "GET",
                  headers: new Headers({
                    "Content-Type": "application/json",
                  }),
                });
                let commitData = await response.json();

                placeholder.commit = commit;

                let date = new Date(commitData.commit.committer.date);
                placeholder.date = (date.toString().substring(4, 21));
                placeholder.html_url = commitData.html_url;

                commits = [...commits, placeholder];
              })();
              count++;
            }))
          }
        }
      });
    } else {
      const errorMessage = document.querySelector(".updates p");
      errorMessage.textContent = data.message;
    }
  })();
</script>

<main>
  <div id="updates" class="updates container">
    <div class="updates-top">
      <h1>Updates</h1>
      <p>
        Op dit gedeelte van de website zijn mijn meest recente Github pushes te
        zien. Deze updates zijn realtime, omdat er een verbinding is met de
        Github API. De API haalt alle push events op die binnenkomen op mijn
        openbare repositories!
      </p>
    </div>

    <div id="update-cards">
      {#each commits as commit}
        <div class="update-card">
          <div class="header">
            <h2>{commit.commit.author.name}</h2>
          </div>

          <div class="content"/>
            <p>{commit.commit.message}</p>
            <a href="{commit.html_url}"><i class="fa fa-link"></i> Github</a>
            <time>{commit.date}</time>
          </div>
      {:else}
        <p>There is no data available</p>
      {/each}
    </div>
  </div>
</main>

<style>
  .updates {
    margin-top: 5em;
    flex-direction: column;
  }

  .updates-top {
    width: 80%;
  }

  .update-card {
    padding: 1.5em;
    margin: 1.5em;
    border-radius: 1.2em;
    box-shadow: 0.5em 0.5em var(--white);
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    width: fit-content;
    max-width: 756px;
    transition: 0.3s linear;
  }

  p {
    font-size: 1.2rem;
    margin-block: 0.7em;
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
    transition: 0.3s linear;
  }
  
  a:hover {
    text-decoration: underline solid var(--secondary) 0.25rem;
  }

  time {
    font-size: 1rem;
    margin-left: 2.5em;
  }
</style>