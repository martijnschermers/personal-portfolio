<script>
</script>

<div id="projects" class="projects container">
  <h1>Projecten</h1>
  <div class="project-card-0">
    <div class="header">
      <h2>JavaScript API</h2>
    </div>

    <div class="content">
      <p>
        Door dit kleine project ben ik meer te weten gekomen over werken met
        API's. In dit geval ging het over een REST API die JSON data teruggaf.
      </p>
      <a href="#projects"><i class="fa fa-link" /> Github</a>
    </div>
  </div>
</div>

<style>
  .projects {
    margin-top: 5em;
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
    font-size: 1.5rem;
    font-weight: bold;
  }

  div[class^="project-card"] {
    padding: 1.5em;
    border-radius: 1.2em;
    box-shadow: 0.5em 0.5em var(--white);
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    width: fit-content;
    max-width: 1000px;
    transition: 0.3s linear;
  }

  .header {
    padding: 1em;
    border-radius: 2em 2em 0 0;
  }
</style>
