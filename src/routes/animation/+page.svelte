<script>
  import { Motion } from "svelte-motion";
  // let i = 0;
</script>

<div class='flex flex-col justify-center items-center bg-red-100 h-screen'>
	<div class="flex justify-center items-center bg-blue-500 w-1/2 h-1/2" >
		<Motion
			whileHover={{
				scale: 1.05,
				rotate: 9,
			}}
			let:motion
		>

			<div class="bg-pink-500 w-20 h-20" use:motion>
				Hover Rotate
			</div>

		</Motion>
	</div>
</div>
