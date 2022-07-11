<script>
  import Nav from "./lib/Nav.svelte";
  import About from "./lib/About.svelte";
  import Footer from "./lib/Footer.svelte";
  import Projects from "./lib/Projects.svelte";
  import Updates from "./lib/Updates.svelte";
</script>

<main>
  <Nav />
  <Updates />
  <div />
  <Projects />
  <div />
  <About />
  <Footer />
</main>

<style>
  div {
    background-color: var(--primary);
    height: 0.25rem;
    width: 100%;
  }
</style>
