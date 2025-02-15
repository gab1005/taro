<script>
  import {goto} from '$app/navigation';

  function navigationToCards() {
    goto('/board-cards');
  }
</script>

<main class="flex flex-col justify-center items-center bg-[#eee] h-screen" >
  <div class="flex flex-col justify-center items-center gap-y-10 bg-[#ddd] border-2 border-blue-950 rounded-2xl w-[90%] md:w-[40%] max-w-[600px] h-[80%] md:h-[60%] max-h-[600px]" >
  
    <h2 class="font-bold text-[#121212] text-2xl" >Veja sua sorte</h2>
    
    <button
      on:click={navigationToCards} 
      class="bg-gray-700 hover:bg-blue-700 px-2 py-1 rounded-md text-white hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer transform"
    >
      me mostre as cartas!
    </button>

  </div>
</main>