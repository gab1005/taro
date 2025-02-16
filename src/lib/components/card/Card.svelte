<script lang="ts" >
  import BackCard from "./elements/Back.svelte";
  import FrontCard from "./elements/Front.svelte";

  interface IProps {
    id?: number;
    showBackCard?: boolean;
  }

  let {id= 1, showBackCard}: IProps = $props()

  const idToCard = id > 22 ? 1 : id;
</script>

{#if showBackCard }
<div class="p-2 md:p-4 h-screen" >
  <BackCard />
</div>

{:else}
<div class="p-2 md:p-4 h-screen" >
  <FrontCard id={idToCard}/>
</div>

{/if}

