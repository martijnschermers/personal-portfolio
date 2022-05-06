<script>
  const URL = "https://api.github.com/users/martijnschermers/events/public";
  let commits = [];
  let count = 0;

  (async function () {
    let response = await fetch(URL, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    let data = await response.json();

    if (response.ok) {
      data.forEach(async function (i) {
        if ((data.type = "PushEvent" && count < 5)) {
          if (i.payload.commits !== undefined) {
            await Promise.all(
              i.payload.commits.map(async function (commit) {
                let placeholder = {};
                placeholder.commit = commit;
                placeholder.repo = i.repo.name.split("/")[1];

                (async function () {
                  let response = await fetch(commit.url, {
                    method: "GET",
                    headers: new Headers({
                      "Content-Type": "application/json",
                    }),
                  });
                  let commitData = await response.json();

                  let date = new Date(commitData.commit.committer.date);
                  placeholder.date = date.toLocaleDateString("nl-NL");
                  placeholder.html_url = commitData.html_url;
                  placeholder.image = commitData.author.avatar_url;

                  commits = [...commits, placeholder];
                })();
                count++;
              })
            );
          }
        }
      });
    } else {
      let errorMessage = document.querySelector(".section-info");
      errorMessage.textContent = data.message;
    }
  })();
</script>

<div id="updates" class="container">
  <h1>Updates</h1>
  <p class="section-info">Commits naar mijn openbare Github repositories:</p>

  <div class="wrapper">
    {#each commits as commit}
      <div class="card">
        <div class="header">
          <img src={commit.image} alt="Avatar of author" />
          <h2>{commit.repo}</h2>
        </div>

        <p>{commit.commit.message}</p>
        <div class="content">
          <a href={commit.html_url} class="underline">
            <i class="fa fa-link" /> Github
          </a>
          <time>{commit.date}</time>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  time {
    font-size: 1.1rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .section-info {
    text-align: center;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .wrapper {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
  }

  .card {
    max-width: 30em;
  }

  @media (max-width: 768px) {
    .wrapper {
      grid-template-columns: auto;
    }

    img {
      width: 48px;
      height: 48px;
    }

    h2 {
      font-size: 1.5rem;
    }

    .card {
      width: 10em;
    }
  }
</style>
