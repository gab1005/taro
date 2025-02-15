<script lang="ts" >
  import BackCard from "./elements/Back.svelte";
  import FrontCard from "./elements/Front.svelte";
  interface IProps {
    id?: number;
    title: string;
    description?: string;
  }

  let {id, title, description}: IProps = $props()
</script>

<div class="relative flex justify-center items-center bg-red-100 h-screen" >
  <BackCard />
</div>
