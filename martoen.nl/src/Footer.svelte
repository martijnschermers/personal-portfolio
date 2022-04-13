<script>
  let icons = [];

  icons.push({ class: "fa fa-github", link: "https://github.com/martijnschermers", label: "Github profile link" });
  icons.push({ class: "fa fa-linkedin", link: "https://www.linkedin.com/in/martijn-schermers/", label: "LinkedIn profile link" });
  icons.push({ class: "fa fa-steam", link: "https://steamcommunity.com/profiles/76561198329654915/", label: "Steam profile link" });
</script>

<footer>
  {#each icons as icon}
    <a href="{icon.link}" aria-label="{icon.label}"><i class={icon.class}/></a>
  {/each}
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  i {
    font-size: 2rem;
    color: var(--white);
    margin: 1rem;
  }
</style>