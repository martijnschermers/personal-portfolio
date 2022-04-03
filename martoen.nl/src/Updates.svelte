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
        if ((data.type = "PushEvent" && count < 4)) {
          if (i.payload.commits !== undefined) {
            await Promise.all(
              i.payload.commits.map(async function (commit) {
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
                  placeholder.date = date.toString().substring(4, 21);
                  placeholder.html_url = commitData.html_url;

                  commits = [...commits, placeholder];
                })();
                count++;
              })
            );
          }
        }
      });
    } else {
      let errorMessage = document.querySelector(".updates p");
      errorMessage.textContent = data.message;
    }
  })();
</script>

<main>
  <div id="updates" class="updates container">
    <div class="updates-text">
      <h1>Updates</h1>
      <p>
        Commits naar mijn openbare Github repositories: 
      </p>
    </div>

    <div id="update-cards">
      {#each commits as commit}
        <div class="card">
          <div class="header">
            <h2>{commit.commit.author.name}</h2>
          </div>
        
          <p>{commit.commit.message}</p>
          <div class="content">
            <a href={commit.html_url}><i class="fa fa-link" /> Github</a>
            <time>{commit.date}</time>
          </div>
        </div>
      {:else}
        <p>There is no data available</p>
      {/each}
    </div>
  </div>
</main>

<style>
  .updates-text {
    width: fit-content;
    text-align: center;
    margin-inline: 1.5rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  time {
    font-size: 1rem;
    margin-left: 2.5em;
  }
</style>