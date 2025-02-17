<script lang="ts">
	import dataCardsTaro from '../../../utils/taro-arcana-cards.json';

	interface IProps {
		id: number;
	}
	let { id }: IProps = $props();

	const indexArr = id - 1;
	const { title } = dataCardsTaro.major_arcana[indexArr];
</script>

<div
	class="flex justify-center items-center bg-tarot-white border-2 border-tarot-black rounded-2xl w-full h-full"
>
	<h2 class="font-bold text-tarot-black text-2xl italic">{title}</h2>
</div>
