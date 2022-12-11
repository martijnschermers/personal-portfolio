<script>
  import ProjectCard from "./components/ProjectCard.svelte";

  let projects = [];

  projects.push({
    title: "Playful Learning",
    description:
      "Project voor school, geschreven in C# door middel van ASP.NET. Het doel van de website is de Nederlandse taalvaardigheid verbeteren door de mogelijkheid te bieden om je in te schrijven voor spelavonden waar verschillende bordspellen gespeeld zullen worden.",
    type: "Github",
    link: "https://github.com/martijnschermers/playful-learning",
    badges: [
      {
        name: "ASP.NET",
        link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
        color: "var(--primary)",
      },
      {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        color: "var(--primary)",
      },
    ],
  });

  projects.push({
    title: "Remove Email",
    description:
      "Een simpel command line tooltje die volledige inboxen uit je email account kan verwijderen. Geschreven in Python als een hobby project.",
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
      "Een API geschreven met Node.js en Express als opdracht voor school die het mogelijk maakt om maaltijden te delen. Het doel van het project is om mensen die een maaltijd over hebben te koppelen aan mensen die een maaltijd nodig hebben.",
    type: "Github",
    link: "https://github.com/martijnschermers/share-a-meal",
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
