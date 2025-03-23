<script>
  import '../app.css';
  import { onMount } from 'svelte';

  let bgLoaded = false;
  
  onMount(() => {
    const img = new Image();
    img.src = '/MaaAdyaKali_5.png';
    img.onload = () => {
      bgLoaded = true;
    };
  });
</script>

<svelte:head>
  <link rel="preload" as="image" href="/MaaAdyaKali_5.png">
</svelte:head>

<div class="page-wrapper" class:bg-loaded={bgLoaded}>
  <slot />
</div>

<style>
  :global(body) {
    background-color: black;
    position: relative;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  .page-wrapper {
    min-height: 100vh;
    position: relative;
  }

  .page-wrapper::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url('/MaaAdyaKali_5.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .bg-loaded::before {
    opacity: 1;
  }
</style>
