<script lang="ts">
	import SmallCard from '$lib/components/card/SmallCard/SamllCard.svelte';
	import Rotate from '../../lib/components/animations/svelte-motion/rotation.svelte';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';

	const numberOfCards = Array.from({ length: 22 }, (_, i) => i + 1);
	let showCard: boolean[] = $state(Array(22).fill(true));
	let numberOfCardsSelected: number = $state(0);

	const handleVisibleCard = (index: number) => {
		showCard[index] = false;

		console.log(showCard[index]);

		numberOfCardsSelected += 1;
		if (numberOfCardsSelected >= 3) {
			goto('/result');
		}
	};
</script>

<main class="gap-2 grid grid-cols-5 bg-tarot-white p-2 md:p-4 h-screen">
	{#each numberOfCards as _, index}
		<div class="flex justify-center items-center">
			<Rotate>
				{#if showCard[index]}
					<button
						onclick={() => handleVisibleCard(index)}
						class="flex justify-center items-center m-1 p-1 w-[60%] h-full transition animate-shake duration-300 cursor-pointer transform"
						transition:fade={{ duration: 500 }}
					>
						<SmallCard id={22} showBackCard />
					</button>
				{/if}
			</Rotate>
		</div>
	{/each}
</main>
