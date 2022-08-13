<script>
  import ProjectCard from "./components/ProjectCard.svelte";

  let projects = [];

  projects.push({
    title: "Aqua Movies",
    description:
      "Bootstrap website die een aantal films toont die destijds in de bioscoop draaide.",
    type: "Website",
    link: "https://aquamovies.netlify.app/",
    badges: [
      {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        color: "var(--primary)",
      },
      {
        name: "Netlify",
        link: "https://www.netlify.com/",
        color: "var(--primary)",
      },
    ],
  });

  projects.push({
    title: "Remove Email",
    description:
      "Een simpel command line tooltje die volledige inboxen uit je email account kan verwijderen.",
    type: "Github",
    link: "https://github.com/martijnschermers/remove-email",
    badges: [
      {
        name: "Python",
        link: "https://www.python.org/",
        color: "var(--primary)",
      },
    ],
  });

  projects.push({
    title: "Share a Meal",
    description:
      "Een API geschreven met Node.js en Express die het mogelijk maakt om maaltijden te delen.",
    type: "Website",
    link: "https://share-a-meal-backend.herokuapp.com",
    badges: [
      {
        name: "Node.js",
        link: "https://nodejs.org/",
        color: "var(--primary)",
      },
      {
        name: "Express",
        link: "https://expressjs.com/",
        color: "var(--primary)",
      },
      {
        name: "Heroku",
        link: "https://www.heroku.com/",
        color: "var(--primary)",
      },
    ],
  });
</script>

<div id="projects" class="container">
  <h2>Projecten</h2>

  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</div>

<style>
</style>
