<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let visible = false;
    onMount(() => (visible = true));
</script>

<div id="header" class="header container">
    <nav>
        <h1>Martijn Schermers</h1>

        <ul class="nav-items">
            <li>
                <a href="#updates" class="underline"> Updates </a>
            </li>
            <li>
                <a href="#projects" class="underline"> Projecten </a>
            </li>
            <li>
                <a href="#about" class="underline"> About </a>
            </li>
        </ul>
    </nav>

    {#if visible}
        <div transition:fly={{ y: 500, duration: 2000 }} class="welcome">
            <h2>Welkom op mijn website!</h2>
            <p>
                Hier vind je mijn recente werk, projecten en informatie over
                mij!
            </p>
        </div>
    {/if}
</div>

<style>
    nav {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 1em;
    }

    ul {
        display: flex;
        flex-wrap: nowrap;
    }

    li {
        all: unset;
        margin-inline: 0.8em;
        transition: linear 0.3s;
        opacity: 0.75;
    }

    h1 {
        margin: 0.5rem;
    }

    h2 {
        font-size: 2rem;
        text-align: center;
    }

    p {
        text-align: center;
        font-weight: 600;
    }

    a {
        font-size: 1.6rem;
    }

    a:hover {
        color: var(--white);
    }

    .header {
        display: flex;
        background-image: url("/images/bg.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .nav-items {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .welcome {
        padding: 1rem;
    }

    @media (min-width: 800px) {
        h1 {
            font-size: 2.5rem;
            text-align: left;
        }

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1.5rem;
        }

        li {
            opacity: 0.75;
        }

        li a {
            font-size: 1.5rem;
        }

        li:hover {
            opacity: 1;
        }

        nav {
            flex-direction: row;
        }

        .nav-items {
            justify-content: flex-end;
        }
    }

    @media (min-width: 1100px) {
        h1 {
            font-size: 3rem;
            text-align: left;
        }

        h2 {
            font-size: 2.5rem;
        }

        li a {
            font-size: 2rem;
        }
    }
</style>
