<script>
  import UpdateCard from "./components/UpdateCard.svelte";
  import Error from "./components/Error.svelte";

  const URL = "https://api.github.com/users/martijnschermers/events/public";
  let commits = [];
  let message;

  (async function () {
    let response = await fetch(URL, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    let data = await response.json();

    if (!response.ok) {
      message = data.message;
      return;
    }

    data.forEach(async function (i) {
      if ((data.type = "PushEvent")) {
        if (i.payload.commits !== undefined) {
          await Promise.all(
            i.payload.commits.forEach(async function (commit) {
              console.log(commit);
              let placeholder = {};

              if (commit.message.includes("\n")) {
                placeholder.message = commit.message.split("\n")[0];
              } else {
                placeholder.message = commit.message;
              }

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
                placeholder.profile = commitData.author.html_url;

                if (commits.length < 4) {
                  commits = [...commits, placeholder];
                }
              })();
            })
          );
        }
      }
    });
  })();
</script>

<div id="updates" class="updates container">
  <h1>Updates</h1>
  <p class="section-info">Commits naar mijn openbare Github repositories:</p>
  {#if message}
    <Error {message} />
  {/if}

  <div class="wrapper">
    {#each commits as commit}
      <UpdateCard {commit} />
    {/each}
  </div>
</div>

<style>
  .section-info {
    text-align: center;
  }

  .wrapper {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1rem;
    place-items: center;
  }

  .updates {
    margin-top: 2rem;
  }

  @media (min-width: 870px) {
    .wrapper {
      grid-template-columns: auto auto;
    }
  }
</style>
