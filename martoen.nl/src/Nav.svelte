<script>
  import { onMount } from "svelte";
	import { fade, draw, fly } from 'svelte/transition';
	import { shape } from './shape.js';

  let visible = false;
  onMount(() => (visible = true));

  let icon = "fa fa-moon-o";
  function toggle() {
    window.document.body.classList.toggle('dark-mode');
    if (window.document.body.classList.contains('dark-mode')) {
      icon = "fa fa-sun-o";
    } else {
      icon = "fa fa-moon-o";
    }
  }
  
</script>

<div id="header" class="header container">
  <div class="nav-bar">
    {#if visible}
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
      <g out:fade="{{duration: 200}}" opacity=0.2>
        <image
          in:draw="{{duration: 1000}}"
          style="stroke:#ff3e00; stroke-width: 1.5"
          xlink:href={shape}
        />
      </g>
    </svg> -->

      <img src="./images/logo.svg" alt="Logo">
    {/if}

    <div class="middle-nav">
      <ul>
        <li><a href="#updates"><i class="fa fa-wrench" aria-hidden="true"/> <span>Updates</span></a></li>
        <li><a href="#projects"><i class="fa fa-cog" aria-hidden="true" /> <span>Projecten</span></a></li>
        <li><a href="#about"><i class="fa fa-info" aria-hidden="true"/> <span>About</span></a></li>
      </ul>
    </div>

    <div class="side-nav">
      <ul>
        <li><a href="https://github.com/martijnschermers"><i class="fa fa-github"></i></a></li>
        <li><button on:click={toggle}><i class="{icon}"></i></button></li>
      </ul>
    </div>
  </div>

  {#if visible}
    <div transition:fly={{ y: 500, duration: 2000 }} class="welcome">
      <h2>Welkom op mijn website!</h2>
      <p>
        Hier vind je mijn recente werk, projecten en informatie over mij. 
      </p>
    </div>
  {/if}
</div>

<style>
  ul {
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

  li:hover {
    opacity: 1;
  }

  img {
    width: 100px;
    height: 100px;
    padding: 1em;
  }

  /* path {
		fill: white;
		opacity: 1;
	} */

  a {
    font-size: 1.8rem;
  }

  h2, 
  p {
    text-align: center;
  }

  .header {
    display: flex;
    background-image: url('/images/bg.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: flex-start;
  }

  .nav-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .welcome {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    li {
      opacity: 1;
    }

    .middle-nav {
      display: none;
    }
  }
</style>