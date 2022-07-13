<script>
  export let commit;
</script>

<div class="card">
  <div class="header">
    <a href={commit.profile} alt="Link to author profile">
      <img src={commit.image} alt="Avatar of author" />
    </a>
    <h2>{commit.repo}</h2>
  </div>

  <p>{commit.message}</p>
  <div class="content">
    <a href={commit.html_url} class="underline">
      <i class="fa fa-link" /> Github
    </a>
    <time>{commit.date}</time>
  </div>
</div>

<style>
  time {
    font-size: 1.1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .card {
    padding: 1.5em;
    margin: 1.5em;
    border-radius: 1.2em;
    box-shadow: 0.5em 0.5em 0.5em var(--primary);
    background: var(--secondary);
    min-width: max-content;
    width: fit-content;
    transition: 0.3s linear;
  }

  .card:hover {
    box-shadow: -0.5em -0.5em 0.5em var(--primary);
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    img {
      width: 64px;
      height: 64px;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
