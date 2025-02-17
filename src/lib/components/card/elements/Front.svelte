<script lang="ts">
	import dataTarot from '$lib/utils/data-tarot.json';

	interface IProps {
		id: number;
	}
	let { id }: IProps = $props();

	interface Image {
		'basic-image': string;
		'jujutsu-kaisen': string;
	}
	interface Time {
		past: string;
		present: string;
		future: string;
	}
	interface Upright {
		title: string;
		time: Time;
	}
	interface Reversed {
		title: string;
		time: Time;
	}
	interface TarotCard {
		id: number;
		image: Image;
		upright: Upright;
		reversed: Reversed;
	}

	const data: TarotCard[] = dataTarot;
	const indexArr = id - 1;
	const card = data[indexArr];
</script>

<div class="flex w-full h-full">
	<img
		src={card.image['basic-image']}
		alt={card.upright.title}
		class="border-2 border-black rounded-2xl"
	/>
</div>
