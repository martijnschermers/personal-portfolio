<script>
  let reposUrl = "https://api.github.com/users/ms-arrow/repos";
  let count = 0;
  let converter = new showdown.Converter();

  (async function () {
    let response = await fetch(reposUrl, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    let data = await response.json();
    console.log(data);

    if (response.status >= 200 && response.status < 400) {
      data.forEach((repo) => {
        if (count < 3) {
          let name = repo.name;
          let owner = repo.owner.login;
          let project = document.querySelector(`.project-card-${count}`);
          let link = document.createElement("a");

          (async function () {
            let readmeUrl = `https://raw.githubusercontent.com/${owner}/${name}/master/README.md`;

            let response = await fetch(readmeUrl, {});

            let readme = await response.text();
            let html = converter.makeHtml(readme);
            console.log(html);
            project.innerHTML = html;

						link.href = repo.html_url;
						project.appendChild(link);
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
      <p>
        With this project it is possible to fetch data from a API, in this case
        the Github API. It is possible to add authorization tokens, so that you
        can access private repositories for example. Inside the app.js there is
        some commented code that explains possible use cases! If you have
        questions or found bugs, please let me know.
      </p>
      <a href="#projects"><i class="fa fa-link" /> Github</a>
    </div>
  </div>

  <div class="project-card-1">
    <div class="header">
      <h2>Project 2</h2>
    </div>

    <div class="content">
      <p></p>
      <a href="#projects"><i class="fa fa-link" /> Github</a>
    </div>
  </div>

  <div class="project-card-2">
    <div class="header">
      <h2>Project 3</h2>
    </div>

    <div class="content">
      <p>
        This system contains a login, signup and an index page. It has a
        database connection that is setup for localhost, but you can change that
        easily. It also comes with a SQL file which you can import into your own
        database easily. The system is protected against SQL injections, because
        I used prepared statements! You are free to use this and change it if
        you want to. If you find any problems, please let me know!
      </p>
      <a href="#projects"><i class="fa fa-link" /> Github</a>
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
    padding: 1.5rem;
    background-color: var(--primary);
    border-radius: 2em;
    margin-top: 5.5em;
  }

  div[class^="project-card"]:nth-child(odd) {
    background-color: var(--primary);
    border-radius: 2em;
    margin-top: 5.5em;
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
