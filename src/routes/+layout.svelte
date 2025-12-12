<script lang="ts" module>
  export const headerShown = writable(true);
</script>

<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import { writable } from "svelte/store";
  import Header from "./Header.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />

<main>
  {@render children()}
</main>

<footer></footer>

<!-- <style>
  header {
    background: red;
  }
</style> -->

<style>
  :global(body) {
    margin: 0;
    font-family: "Raleway", sans-serif;
    --primary: #e6e3fe;
    --primary-text: #a36fea;
    --secondary: #e6e3fe;
    --accent: #fcb5b2;
    --off-accent: #f09d9a;
    --neutral: #141414;
    --off-neutral: #fff;
  }
</style>
