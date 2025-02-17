<script lang="ts">
	import SamllCard from '../SmallCard/SamllCard.svelte';

	let {numberOfCard}: {numberOfCard: number} = $props();
</script>

{#if numberOfCard}
	<div class="w-[300px] h-[500px]">
		<SamllCard id={numberOfCard} />
	</div>
{/if}
