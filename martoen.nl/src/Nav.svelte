<script>
    import { onMount } from 'svelte';
    import NavCard from './NavCard.svelte';
    
    let visible = false;
    onMount(() => visible = true); 

    function typewriter(node, { speed = .8 }) {
        const valid = (
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE
        );

        if (!valid) {
            throw new Error(`This transition only works on elements with a single text node child`);
        }

        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
            duration,
            tick: t => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            }
        };
    }

    
</script>

<div class="header">
    <div class="brand">
        <a href="#header">
            {#if visible}
                <h1 transition:typewriter>ms-arrow</h1>
            {/if}
        </a>
    </div>

    <div class="nav-list">
        {#if visible}
            <NavCard/>

            <!-- <div class="nav-card" data-tilt>
                <img src="images/coding.jpeg" alt="coding">
                <div class="content">
                    <h2>Updates</h2>
                    <p> Op dit gedeelte van de website zijn mijn meest recente Github pushes te zien. 
                        Deze updates zijn realtime, omdat er een verbinding is met de Github API. 
                        De API haalt alle push events op die binnenkomen op mijn openbare repositories!
                    </p>
                    <i class="fa fa-wrench" aria-hidden="true"></i>
                    <a href="#updates">More info...</a>
                </div>
            </div>

            <div class="nav-card" data-tilt>
                <h2>Projecten</h2>
                <p> Mijn meest recente projecten zijn te zien op het project gedeelte van de website. 
                    Een aantal van die projecten zijn ook terug te vinden op mijn Github pagina.
                    Klik hieronder om de projecten te bekijken!
                </p>
                <i class="fa fa-cog" aria-hidden="true"></i>
                <a href="#projects">More info...</a>
            </div>

            <div class="nav-card" data-tilt>
                <h2>About</h2>
                <p> Als je meer te weten wilt komen over de maker van deze website, kan je de about sectie eens bekijken. 
                    Via de link hieronder kom je er direct!
                </p>
                <i class="fa fa-info" aria-hidden="true"></i>
                <a href="#about">More info...</a>
            </div>

            <div class="nav-card" data-tilt>
                <h2>Contact</h2>
                <p> Op dit gedeelte van de website zijn de platformen te zien waar ik actief op ben. 
                    Als je een vraag of opmerking hebt, kan je me het beste een berichtje sturen via Discord.
                </p>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <a href="#contact">More info...</a>
            </div> -->
        {/if}
    </div>
</div>

<style>
    .header {
        background-image: url('/images/bg.svg');
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
        padding-top: .2em;
    }

   

    .nav-list {
        display: flex; 
        flex-direction: column;
        align-items: center;
    }

    
</style>