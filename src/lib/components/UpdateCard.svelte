<script>
  export let commit;
</script>

<div class="card">
  <div class="header">
    <a href={commit.profile} alt="Link to author profile">
      <img src={commit.image} alt="Avatar of author" />
    </a>
    <h3>{commit.repo}</h3>
  </div>

  <p>{commit.message}</p>
  <div class="content">
    <a href={commit.html_url} class="underline">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
      Github
    </a>
    <time>{commit.date}</time>
  </div>
</div>

<style>
  time {
    font-size: 1.1rem;
  }

  h3 {
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
    background: var(--base-300);
    min-width: 90%;
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

    h3 {
      font-size: 1.5rem;
    }
  }
</style>
