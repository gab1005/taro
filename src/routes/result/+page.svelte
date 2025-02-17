<script lang="ts">
	import BigCard from '$lib/components/card/BigCard/BigCard.svelte';
	import random3Number from '$lib/utils/random-3-number';

	const [num1, num2, num3]: number[] = random3Number();
</script>

<main class="bg-tarot-black h-screen overflow-y-auto">
	<div class="flex md:flex-row flex-col md:justify-evenly items-center gap-1 md:gap-2 p-2 h-full">
		<BigCard numberOfCard={num1} time={"past"} />
		<BigCard numberOfCard={num2} time={"present"}/>
		<BigCard numberOfCard={num3} time={"future"}/>
	</div>
</main>
