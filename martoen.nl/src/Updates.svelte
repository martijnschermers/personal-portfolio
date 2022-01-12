<script>
  let url = "https://api.github.com/users/martijnschermers/events/public";
  let count = 0;
  let commits = [];

  (async function () {
    let response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    let data = await response.json();
    // console.log(data);

    if (response.status >= 200 && response.status < 400) {
      data.forEach(function (i) {
        if ((data.type = "PushEvent" && count < 4)) {
          if (i.payload.commits !== undefined) {
            i.payload.commits.forEach(function (commit) {
              let placeholder = [];

              (async function () {
                let response = await fetch(commit.url, {
                  method: "GET",
                  headers: new Headers({
                    "Content-Type": "application/json",
                  }),
                });
                let commitData = await response.json();

                let date = new Date(commitData.commit.committer.date);

                console.log(count);

                console.log(placeholder);

                placeholder.push(date.toString().substring(4, 21));

                commits.push(placeholder);
              })();
            });

            count++;
          }
        }
      });
      console.log(commits);
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
      <p> Op dit gedeelte van de website zijn mijn meest recente Github pushes
        te zien. Deze updates zijn realtime, omdat er een verbinding is met
        de Github API. De API haalt alle push events op die binnenkomen op
        mijn openbare repositories!
      </p>
    </div>
  
    <div id="update-cards">
      {#each commits as commit}
        <div class="update-card">
          <div class="header">
            {commit}
          </div>

          <div class="content">

          </div>
        </div>

      {:else} 
        <p>There is no data available</p>
      {/each}
    </div>

    <!-- <div class="update-0">
      <div class="header">
        <img src="" alt="Avatar">
        <h2>update_1</h2>
      </div>

      <div class="content">
        <p>description</p>
        <a href="#updates"><i class="fa fa-link" aria-hidden="true"/> Github</a>
        <time />
      </div>
    </div>

    <div class="update-1">
      <div class="header">
        <img src="" alt="Avatar">
        <h2>update_2</h2>
      </div>

      <div class="content">
        <p>description</p>
        <a href="#updates"><i class="fa fa-link" aria-hidden="true" /> Github</a>
        <time />
      </div>
    </div>

    <div class="update-2">
      <div class="header">
        <img src="" alt="Avatar">
        <h2>update_3</h2>
      </div>

      <div class="content">
        <p>description</p>
        <a href="#updates"><i class="fa fa-link" aria-hidden="true" /> Github</a>
        <time />
      </div>
    </div>

    <div class="update-3">
      <div class="header">
        <img src="" alt="Avatar">
        <h2>update_4</h2>
      </div>

      <div class="content">
        <p>description</p>
        <a href="#updates"><i class="fa fa-link" aria-hidden="true" /> Github</a>
        <time />
      </div>
    </div> -->
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

  /* div[class^="update-"] {
    padding: 1.5em;
    margin: 1.5em;
    border-radius: 1.2em;
    box-shadow: 0.5em 0.5em var(--white);
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    width: 80%;
    max-width: 756px;
    transition: 0.3s linear;
  } */

  .update-card {
    padding: 1.5em;
    margin: 1.5em;
    border-radius: 1.2em;
    box-shadow: 0.5em 0.5em var(--white);
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    width: 80%;
    max-width: 756px;
    transition: 0.3s linear;
  }

  p {
    font-size: 1.2rem;
    margin-block: 0.7em;
  }

  /* h2 {
    font-size: 1.6rem;
  } */

  h1 {
    font-size: 2.5rem;
  }

  /* a {
    font-size: 1.2rem;
    font-weight: bold;
  }

  time {
    font-size: 1rem;
    margin-left: 2.5em;
  } */

  /* img { 
        object-fit: contain; 
        width: 3em; 
        border-radius: 50%;
    } */
</style>