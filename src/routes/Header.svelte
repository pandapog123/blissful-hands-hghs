<script lang="ts">
  import Link from "$lib/components/Link.svelte";

  import BrandURL from "$lib/assets/Brand.png";
  import { headerShown } from "./+layout.svelte";

  function handleMenuButtonClick() {
    $headerShown = !$headerShown;
  }
</script>

<header>
  <a href="/" class="brand-link">
    <div class="brand">
      <img src={BrandURL} alt="Blissful Hands Brand" />

      <div class="brand-info">
        <div class="brand-name">Blissful Hands</div>
        <div class="brand-phrase">BREATH. GIVE. BLISS.</div>
      </div>
    </div>
  </a>

  <ul>
    <!-- TODO: Add the rest of the pages -->
    <li>
      <a href="/" class="page-link">Home</a>
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
      </a>
    </li>
    <li>
      <Link href="/contact" variant="primary">Contact</Link>
    </li>
  </ul>

  <button
    class="menu-button"
    aria-label="Menu button"
    on:click={handleMenuButtonClick}
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
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  </button>
</header>

<style>
  header {
    /* background: red; */
    display: flex;

    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .brand-name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .brand-phrase {
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    /* display: flex; */
    gap: 1rem;
    display: none;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  .brand-link {
    text-decoration: none;
    color: var(--primary-text);
  }

  .page-link {
    text-decoration: none;
    color: var(--neutral);
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .page-link svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .page-link::after {
    content: "";
    background-color: var(--accent);
    width: 0;
    height: 2px;
    top: 100%;
    left: 0;
    position: absolute;
    transition: all 200ms ease-in-out;
  }

  .page-link:hover::after {
    width: 100%;
  }

  .menu-button {
    padding: 1rem;
    display: flex;
    margin: 0;
    border: none;
    background-color: transparent;
  }

  .menu-button svg {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 650px) {
    ul {
      display: flex;
    }

    .menu-button {
      display: none;
    }
  }
</style>
