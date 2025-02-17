<script lang="ts">
	import BackCard from '../elements/Back.svelte';
	import FrontCard from '../elements/Front.svelte';

	interface IProps {
		id?: number;
		showBackCard?: boolean;
		time?: 'past' | 'present' | 'future';
		showDescription?: boolean;
	}

	let { id = 1, showBackCard, time = "past", showDescription }: IProps = $props();

	const idToCard = id > 22 ? 1 : id;
</script>

{#if showBackCard}
	<BackCard />
{:else}
	<FrontCard id={idToCard} {time} {showDescription} />
{/if}
