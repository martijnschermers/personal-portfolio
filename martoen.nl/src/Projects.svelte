<script>
  let reposUrl = "https://api.github.com/users/martijnschermers/repos";
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
            link.textContent = "Github";
            project.append(link);
          })();
        }
        count++;
      });
    } else {
      // Show error message
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
      <p />
      <a href="#projects"><i class="fa fa-link" /> Github</a>
    </div>
  </div>

  <div class="project-card-1">
    <div class="header">
      <h2>Project 2</h2>
    </div>

    <div class="content">
      <p />
      <a href="#projects"><i class="fa fa-link" /> Github</a>
    </div>
  </div>

  <div class="project-card-2">
    <div class="header">
      <h2>Project 3</h2>
    </div>

    <div class="content">
      <p />
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
    font-size: 2rem;
    font-weight: bold;
  }

  div[class^="project-card"] {
		padding: 1.5em;
    margin: 1.5em;
    border-radius: 1.2em;
    box-shadow: 0.5em 0.5em var(--white);
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    width: 80%;
    max-width: 756px;
    transition: 0.3s linear;
  }

  .header {
    padding: 1em;
    width: 80%;
    background-color: var(--secondary);
    border-radius: 2em 2em 0 0;
  }

  .content {
    padding: 0.5em 1.5em 1.5em 1.5em;
  }
</style>