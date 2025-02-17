<script lang="ts">
	import SamllCard from '../SmallCard/SamllCard.svelte';
	import { Motion, useCycle } from 'svelte-motion';

	interface IProps{
		numberOfCard: number;
		time: 'past' | 'present' | 'future';
		showDescription?: boolean;
	}

	let { numberOfCard, time }: IProps = $props();

	let scale = useCycle(0.9, 1.1);

	let isHovered = false;
	let stateShowDescription = $state(false);

	const interval = setInterval(() => {
		if (!isHovered && !stateShowDescription) {
			scale.next();
		}
	}, 1000);

	function handleMouseEnter() {
		isHovered = true;
		scale.set(1);
		// clearInterval(interval)
	}

	function handleMouseLeave() {
		isHovered = false;
	}

	function handleMouseClick() {
		stateShowDescription = !stateShowDescription;
		isHovered = true;
		scale.set(1);
	}
</script>

{#if numberOfCard}
		<Motion
			let:motion
			transition={{
				duration: 2
			}}
			animate={{
				scale: $scale
			}}
		>
			<button
				use:motion
				onmouseenter={handleMouseEnter}
				onmouseleave={handleMouseLeave}
				onclick={handleMouseClick}
				class="w-[300px] h-[500px] cursor-pointer"
			>
				<SamllCard {time} id={numberOfCard} showDescription={stateShowDescription} />
			</button>
		</Motion>
{/if}
