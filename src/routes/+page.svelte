<script lang="ts">
  import Title1 from "$lib/assets/images/title-1.png";
  import Title2 from "$lib/assets/images/title-2.png";
  import Title3 from "$lib/assets/images/title-3.png";
  import Title4 from "$lib/assets/images/title-4.png";
  import { onMount } from "svelte";

  let titleImages = [Title1, Title2, Title3, Title4];

  let currentImage = $state(1);
  let currentImageCooldown: number | undefined;

  function swapCurrentImage(override?: number) {
    if (currentImageCooldown) {
      clearInterval(currentImageCooldown);
    }

    if (override) {
      currentImage = override;
    } else {
      if (currentImage < 4) {
        currentImage = currentImage + 1;
      } else {
        currentImage = 1;
      }
    }

    currentImageCooldown = setTimeout(swapCurrentImage, 4000);
  }

  onMount(() => {
    setTimeout(swapCurrentImage, 4000);
  });
</script>

<section class="title">
  <div class="title-content">
    <div class="title-phrase">
      <h1>Relax with us in Blissful Hands</h1>

      <p>
        Helping students manage stress and connect with others through acts of
        service.
      </p>
    </div>

    <div class="links">
      <a
        class="donate"
        href="https://www.zeffy.com/en-US/donation-form/blissful-hands"
        target="_blank"
      >
        Donate Now
      </a>

      <a href="/about" class="about">Learn More</a>
    </div>
  </div>

  <div class="image-selector-overlay">
    <button
      aria-label="Switch Image Back"
      on:click={() => {
        if (currentImage === 1) {
          swapCurrentImage(4);
        } else {
          swapCurrentImage(currentImage - 1);
        }
      }}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6"
      >
        <path
          fill-rule="evenodd"
          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    {#each titleImages as _, i}
      <button
        aria-label="Switch Current Title Image"
        on:click={() => {
          swapCurrentImage(i + 1);
        }}
      >
        <div
          class="title-image-select"
          class:selected={i + 1 === currentImage}
        ></div>
      </button>
    {/each}

    <button
      aria-label="Next Image"
      on:click={() => {
        if (currentImage < 4) {
          swapCurrentImage(currentImage + 1);
        } else {
          swapCurrentImage(1);
        }
      }}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6"
      >
        <path
          fill-rule="evenodd"
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>

  <div class="bg-image-overlay"></div>

  <div class="bg-image">
    <div class="images">
      {#each titleImages as titleImage, i}
        <img
          src={titleImage}
          class:shown={i + 1 === currentImage}
          alt="Blissful Hands Activities"
        />
      {/each}
    </div>
  </div>
</section>

<section class="sponsors"></section>

<section class="achievements"></section>

<section class="socials"></section>

<style>
  * {
    margin: 0;
  }

  /* #region title */
  .title {
    /* height: 40rem; */
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 12rem 8rem;
  }

  .title-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
  }

  .title h1 {
    font-size: 4rem;
    max-width: 32rem;
  }

  .title p {
    font-size: 1.3rem;
    line-height: 1.5rem;
    max-width: 30rem;
  }

  .title-phrase {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  .links a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 200ms ease-in-out;
  }

  a.donate {
    background-color: var(--primary);
    color: var(--neutral);
  }

  a.donate:hover {
    background-color: var(--off-primary);
  }

  a.about {
    background-color: #2b2b2b50;
    color: white;
  }

  a.about:hover {
    background-color: #2b2b2b80;
  }

  .image-selector-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .image-selector-overlay button {
    background-color: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
  }
  .image-selector-overlay button svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--off-neutral);
  }
  .image-selector-overlay button .title-image-select {
    width: 6px;
    height: 6px;
    background-color: var(--off-neutral);
    border-radius: 100px;
    opacity: 0.6;
    transition: all 400ms ease-in-out;
  }
  .image-selector-overlay button .title-image-select.selected {
    opacity: 1;
  }

  .bg-image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .bg-image {
    z-index: -2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .bg-image .images {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .bg-image .images img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 1000ms ease-in-out;
  }

  .bg-image .images img.shown {
    opacity: 1;
  }

  /* #endregion */
</style>
