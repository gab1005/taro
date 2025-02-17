<script lang="ts">
	import dataTarot from '$lib/utils/data-tarot.json';

	interface IProps {
		id: number;
		time: 'past' | 'present' | 'future';
		showDescription?: boolean;
	}
	let { id, time, showDescription = false }: IProps = $props();

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

	function chooseZeroOne() {
		return Math.round(Math.random());
	}
	const chooseNumber = chooseZeroOne();
	const cardMode = chooseNumber === 0 ? 'upright' : 'reversed';

</script>

{#if id && time}
	<div class="relative flex w-full h-full">
		<img
			src={card.image['basic-image']}
			alt={card.upright.title}
			class={`rounded-2xl border-2 w-full border-black ${cardMode === 'reversed' && 'rotate-180 transform'}`}
		/>

		<div
			class={`${!showDescription && 'hidden'} absolute top-0 right-0 flex h-full w-full items-center justify-center rounded-2xl bg-black/50 px-2 text-xl font-bold text-white`}
		>
			<p>{card[cardMode].time[time]}</p>
		</div>
	</div>
{/if}
