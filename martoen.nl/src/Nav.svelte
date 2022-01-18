<script>
  import { onMount } from "svelte";
  import NavCard from "./NavCard.svelte";

  let visible = false;
  onMount(() => (visible = true));

  function typewriter(node, { speed = 0.8 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<main>
  <div class="header">
    <div class="brand">
      <a href="#header">
        {#if visible}
          <h1 transition:typewriter>martijn</h1>
        {/if}
      </a>
    </div>

    <div class="nav-list">
      {#if visible}
      <div class="nav">
        <ul>
          <li><a href="#updates"><i class="fa fa-wrench" aria-hidden="true"/></a></li>
          <li><a href="#projects"><i class="fa fa-cog" aria-hidden="true" /></a></li>
          <li><a href="#about"><i class="fa fa-info" aria-hidden="true"/></a></li>
          <li><a href="#contact"><i class="fa fa-phone" aria-hidden="true"/></a></li>
        </ul>
      </div>

        <NavCard />
      {/if}
    </div>
  </div>
</main>

<style>
	.nav ul{
		margin-block: 2em; 
		display: flex;
	}

	li {
		margin-inline: 1em;
		font-size: 2rem; 
	}

	li::after {
		content: "";
	}

  .header {
    background-image: url("/images/bg.svg");
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    padding-top: 0.2em;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>