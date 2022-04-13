<script>
  let icons = [];

  icons.push({ class: "fa fa-github", link: "https://github.com/martijnschermers", label: "Github profile link" });
  icons.push({ class: "fa fa-linkedin", link: "https://www.linkedin.com/in/martijn-schermers/", label: "LinkedIn profile link" });
  icons.push({ class: "fa fa-steam", link: "https://steamcommunity.com/profiles/76561198329654915/", label: "Steam profile link" });
</script>

<footer>
  <div>
    {#each icons as icon}
      <a href={icon.link} aria-label={icon.label}><i class={icon.class}/></a>
    {/each}
  </div>

  <p>
    Gemaakt met <i class="fa fa-heart"></i> en <a href="https://svelte.dev" aria-label="Link to Svelte website"><img src="./images/svelte.png" alt="Svelte logo"></a>
  </p>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  i {
    font-size: 2rem;
    color: var(--white);
    margin: 1rem;
  }

  p {
    font-size: 1.4rem; 
    text-align: center;
  }

  img {
    vertical-align: middle;
    width: 22px;
    height: auto;
    margin: .5rem; 
  }

  .fa-heart {
    font-size: 1.4rem;
    color: red;
    margin: .5rem; 
  }
</style>