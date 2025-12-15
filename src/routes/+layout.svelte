<script lang="ts" module>
  export const linkMenuShown = writable(false);
  // export const headerShown = writable(true);
  // export const safeHeaderShown = writable(true);
  // export const footerShown = writable(true);
</script>

<script lang="ts">
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  afterNavigate(({ to }) => {
    // if (!mounted) return;
    // if (to?.route.id === "/contact") {
    //   headerShown.set(true);
    //   safeHeaderShown.set(false);
    //   footerShown.set(false);
    // } else {
    //   safeHeaderShown.set(true);
    //   headerShown.set(true);
    //   footerShown.set(true);
    // }
  });

  import { writable } from "svelte/store";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { afterNavigate } from "$app/navigation";
  import BrandURL from "$lib/assets/Brand.png";

  import { onMount } from "svelte";
  import { page } from "$app/state";

  $effect(() => {
    if ($linkMenuShown) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
    console.log(document.body.style.overflowY);
  });
</script>

<svelte:head>
  <link rel="icon" href={BrandURL} />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />

  {#if page.data.title}
    <title>Blissful Hands | {page.data.title}</title>
  {:else}
    <title>Blissful Hands</title>
  {/if}
</svelte:head>

<div
  class="menu-popup"
  class:shown={$linkMenuShown}
  aria-hidden={`${!$linkMenuShown}`}
  inert={!$linkMenuShown}
>
  <div class="menu-links">
    <ul>
      <li>
        <a
          href="/"
          class="page-link"
          on:click={() => {
            $linkMenuShown = false;
          }}>Home</a
        >
      </li>
      <!-- <li>
        <a
          href="/about"
          class="page-link"
          on:click={() => {
            $linkMenuShown = false;
          }}>About</a
        >
      </li> -->
      <li>
        <a
          class="page-link"
          href="https://www.zeffy.com/en-US/donation-form/blissful-hands"
          target="_blank"
          on:click={() => {
            $linkMenuShown = false;
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
      <!-- <li>
        <a
          href="/contact"
          class="page-link"
          on:click={() => {
            $linkMenuShown = false;
          }}>Contact</a
        >
      </li> -->
    </ul>

    <button
      on:click={() => {
        $linkMenuShown = false;
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

{#if page.data.ui.showHeader}
  <div inert={$linkMenuShown}>
    <Header safeHide={page.data.ui.safeHeader ?? true} />
  </div>
{/if}

<main inert={$linkMenuShown}>
  <slot />
</main>

{#if page.data.ui.showFooter}
  <div inert={$linkMenuShown}>
    <Footer />
  </div>
{/if}

<style>
  :global(body) {
    overflow-x: hidden;

    /* overflow-y: hidden; */
  }
  :global(body) {
    margin: 0;
    font-family: "Raleway", sans-serif;
    --primary: #e6e3fe;
    --off-primary: #dad6fb;
    --primary-text: #a36fea;
    --secondary: #fef2e3;
    --accent: #fcb5b2;
    --off-accent: #f09d9a;
    --neutral: #141414;
    --off-neutral: #fff;
  }

  .menu-popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--off-neutral);
    transition: all 100ms ease-in-out;
    opacity: 0;
    pointer-events: none;
    z-index: 10;
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
