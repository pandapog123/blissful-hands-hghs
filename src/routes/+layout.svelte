<script lang="ts" module>
  export const headerShown = writable(false);
</script>

<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import { writable } from "svelte/store";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

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

<Footer />

<div class="menu-popup" class:shown={$headerShown}>
  <div class="menu-links">
    <ul>
      <li>
        <a
          href="/"
          class="page-link"
          on:click={() => {
            $headerShown = false;
          }}>Home</a
        >
      </li>
      <li>
        <a
          class="page-link"
          href="https://www.zeffy.com/en-US/donation-form/blissful-hands"
          target="_blank"
          on:click={() => {
            $headerShown = false;
          }}
        >
          <div>Donate</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="/contact"
          class="page-link"
          on:click={() => {
            $headerShown = false;
          }}>Contact</a
        >
      </li>
    </ul>

    <button
      on:click={() => {
        $headerShown = false;
      }}
      aria-label="Close menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: "Raleway", sans-serif;
    --primary: #e6e3fe;
    /* --off-primary: #c8c8c8; */
    --primary-text: #a36fea;
    --secondary: #e6e3fe;
    --accent: #fcb5b2;
    --off-accent: #f09d9a;
    --neutral: #141414;
    --off-neutral: #fff;
  }

  .menu-popup {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--off-neutral);
    transition: all 100ms ease-in-out;
    opacity: 0;
    pointer-events: none;
  }
  .menu-links {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 1rem;
  }

  .menu-popup.shown {
    pointer-events: auto;
    opacity: 1;
  }

  .menu-links button {
    /* width: 100px;
    height: 100px; */
    padding: 1rem;
    margin: 0;
    border: none;
    background-color: transparent;
  }

  .menu-links a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .menu-links a svg {
    width: 2rem;
    height: 2rem;
  }

  .menu-links button svg {
    width: 2rem;
    height: 2rem;
  }

  .menu-links ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .menu-links a {
    text-decoration: none;
    color: var(--neutral);
    font-size: 1.5rem;
  }

  @media (min-width: 650px) {
    .menu-popup.shown {
      opacity: 0;
      pointer-events: none;
    }
  }
</style>
