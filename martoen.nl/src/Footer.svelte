<script>
  const icons = [];

  icons.push("fa fa-github");
  icons.push("fa fa-linkedin");
  icons.push("fa fa-steam");
</script>

<footer>
  {#each icons as icon}
    <i class={icon}/>
  {/each}
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, var(--primary), var(--secondary));
  }

  i {
    font-size: 2rem;
    color: var(--white);
    margin: 1rem;
  }
</style>