<script>
  import { onMount } from "svelte";

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

<div id="header" class="header">
    <a href="#header">
      {#if visible}
        <h1 transition:typewriter>martijn</h1>
      {/if}
    </a>

    <div class="nav">
      <ul>
        <li><a href="#updates"><i class="fa fa-wrench" aria-hidden="true"/> <span>Updates</span></a></li>
        <li><a href="#projects"><i class="fa fa-cog" aria-hidden="true" /> <span>Projecten</span></a></li>
        <li><a href="#about"><i class="fa fa-info" aria-hidden="true"/> <span>About</span></a></li>
      </ul>
    </div>
  </div>

<style>
	.nav ul{
		margin-block: 1em; 
		display: flex;
	}

	li {
		margin-inline: .8em;
		font-size: 1.8rem; 
    opacity: .75;
    transition: linear 0.3s;
    text-transform: uppercase;
	}

  a {
    font-size: 1.8rem;
  }

  li:hover {
    opacity: 1;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h1 {
    font-size: 3.5rem;
    padding: 0.5rem 0 0 1.5rem;
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
    }

    h1 {
      padding: 0.5rem 0 0 0;
      font-size: 2.5rem;
    }

    li {
      opacity: 1;
    }

    li span {
      display: none;
    }
  }
</style>