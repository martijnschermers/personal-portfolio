<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	let visible = false;
	onMount(() => (visible = true));
</script>

{#if visible}
	<div
		class="hero min-h-screen"
		style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);"
	>
		<div class="hero-overlay bg-opacity-60" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md" transition:fly={{ y: 500, duration: 2000 }}>
				<h1 class="mb-5 text-5xl font-bold">Welkom op mijn website!</h1>
				<p class="mb-5">
					Hier vind je mijn recente werk, projecten en informatie over mij.
				</p>
				<a href="#updates" class="btn btn-primary">Kijk rond!</a>
			</div>
		</div>
	</div>
{/if}
