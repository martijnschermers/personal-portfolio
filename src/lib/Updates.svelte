<script>
  import UpdateCard from "./components/UpdateCard.svelte";
  import Error from "./components/Error.svelte";
  import { onMount } from "svelte";

  const URL = "https://api.github.com/users/martijnschermers/events/public";
  let commits = [];
  let message;
  let mobile = false; 

  onMount(() => {
    if (window.innerWidth < 800) {
      mobile = true;
    }
  });

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
          i.payload.commits.forEach(async function (commit) {
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

              placeholder.date = new Date(
                commitData.commit.committer.date
              ).toLocaleDateString("nl-NL");
              placeholder.html_url = commitData.html_url;
              placeholder.image = commitData.author.avatar_url;
              placeholder.profile = commitData.author.html_url;

              if (mobile ? commits.length < 3 : commits.length < 4) {
                commits = [...commits, placeholder];
              }
            })();
          });
        }
      }
    });
  })();
</script>

<div id="updates" class="updates container">
  <h2>Updates</h2>

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
  .wrapper {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 0.25rem;
    place-items: center;
  }

  .updates {
    margin-block: 5rem;
  }

  @media (min-width: 800px) {
    .wrapper {
      grid-template-columns: auto auto;
    }
  }
</style>
