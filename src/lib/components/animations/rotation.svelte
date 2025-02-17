<script>
	import { Motion } from 'svelte-motion';
</script>

<Motion
	let:motion
	whileHover={{
		scale: 1.05,
		rotate: 9
	}}
>
	<div use:motion class="flex justify-center items-center w-full h-full" >
    <slot></slot>
  </div>
</Motion>
