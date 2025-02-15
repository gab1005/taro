<script>
  export let size = 100; // Tamanho da carta
  let cardWidth = `${size}px`;
  let cardHeigth = `${size * 1.4}px`;
</script>

<!-- <style>
  .card-back {
    /* width: cardWidth;
    height: cardHeigth; */
    width: "100px";
    height: "100px";
    border-radius: 10px;
    background-color: pink;
    margin: 50;
    padding: 50;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }

  .spiral {
    position: absolute;
    left: 0;
    top: 0;
    width: 150%;
    height: 150%;
    background: conic-gradient(
      from 0deg,
      black 0%,
      rgba(255, 140, 0, 0.8) 30%,
      black 60%
    );
    /* border-radius: 50%; */
    /* animation: spin 5s linear infinite; */
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>

<div class="card-back">
  <div class="spiral"></div>
</div> -->


<div
  class="relative flex justify-center items-center bg-black shadow-[0_0_10px_rgba(255,165,0,0.5)] rounded-lg overflow-hidden"
  style="width: 200px; height: 200px"
>
  <div
    class="absolute bg-[conic-gradient(from_0deg,black_0%,rgba(255,140,0,0.8)_30%,black_60%)] rounded-full w-[150%] h-[150%] animation-spin-slow spiral"
  ></div>
</div>