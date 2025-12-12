<script lang="ts">
  import Link from "$lib/components/Link.svelte";

  import BrandURL from "$lib/assets/Brand.png";
</script>

<header>
  <a href="/">
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
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/contact" variant="primary">Contact</Link>
    </li>
  </ul>
</header>

<style>
  header {
    /* background: red; */
    display: flex;

    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .brand-name {
    font-size: 2rem;
    font-weight: bold;
  }

  .brand-phrase {
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    display: flex;
    gap: 1rem;
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-text);
  }
</style>
