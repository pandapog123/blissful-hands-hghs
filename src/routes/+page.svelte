<script lang="ts">
  import Title1 from "$lib/assets/images/title-1.png";
  import Title2 from "$lib/assets/images/title-2.png";
  import Title3 from "$lib/assets/images/title-3.png";
  import Title4 from "$lib/assets/images/title-4.png";

  import HomeDepotURL from "$lib/assets/sponsors/Home Depot Logo.png";
  import NanaBBURL from "$lib/assets/sponsors/Nana's Baby Boutique.png";
  import TEFURL from "$lib/assets/sponsors/The education fund.png";
  import VPURL from "$lib/assets/sponsors/Virtutem Populo.png";
  import WalmartURL from "$lib/assets/sponsors/Walmart Logo.png";

  import ShowcaseVideoURL from "$lib/assets/final isa/FINAL ISA OPT.mp4";
  import ShowcaseVideoTNURL from "$lib/assets/final isa/FINAL ISA TN.png";

  import GardensSproutURL from "$lib/assets/achievements/Garden Sprouts.png";
  import NathanBYoung from "$lib/assets/achievements/Nathan B Young.png";
  import LotusHouse2025 from "$lib/assets/achievements/Lotus House 2025.png";
  import NathanBYoungTT from "$lib/assets/achievements/Nathan B Young Trunk or Treat.png";
  import CamillusHouse from "$lib/assets/achievements/Camillus House.png";

  import { onMount } from "svelte";

  // #region title
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
  // #endregion
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

      <!-- <a href="/about" class="about">Learn More</a> -->
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

<section class="showcase">
  <div class="showcase-text">
    <h1>See Our Work in Action</h1>

    <h2>
      A glimpse into the quality, care, and impact behind everything we do.
    </h2>

    <p>
      At Blissful Hands, we focus on supporting our community. We aim to create
      a welcoming environment where people feel cared for and connected. Every
      action we take is guided by the needs of the people around us.
    </p>
  </div>

  <!-- poster={Title1} -->
  <video
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    poster={ShowcaseVideoTNURL}
  >
    <source src={ShowcaseVideoURL} type="video/mp4" />
  </video>
</section>

<hr class="root-divider" />

<section class="sponsors">
  <h1>Our Sponsors</h1>

  <div class="sponsors-container">
    <div class="sponsors-wrapper">
      <div class="sponsors-images">
        <img src={HomeDepotURL} alt="Home Depot Logo" />
        <img src={NanaBBURL} alt="Nana's Baby Boutique Logo" />
        <img src={TEFURL} alt="The Education Fund Logo" />
        <img src={VPURL} alt="Virtutem Populo Logo" />
        <img src={WalmartURL} alt="Walmart Logo" />
      </div>
      <div class="sponsors-images double">
        <img src={HomeDepotURL} alt="Home Depot Logo" />
        <img src={NanaBBURL} alt="Nana's Baby Boutique Logo" />
        <img src={TEFURL} alt="The Education Fund Logo" />
        <img src={VPURL} alt="Virtutem Populo Logo" />
        <img src={WalmartURL} alt="Walmart Logo" />
      </div>
    </div>
  </div>
</section>

<section class="achievements">
  <div class="left">
    <h1>Our Achievements</h1>

    <h2>
      We spend time ensuring others get the relaxation they need, whether it’s
      students, faculty, or even members of the local community.
    </h2>

    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Vivamus quis laoreet velit, sed consectetur eros.
    </p>
  </div>

  <div class="right">
    <div class="achievement">
      <img src={GardensSproutURL} alt="[Generic]" />

      <div class="achievement-text">
        <h1>Garden Sprouts Program</h1>

        <h2>Hialeah Gardens High School Childcare & Preschool center</h2>

        <p>
          Since August 2023, Blissful Hands has been leading seasonal and
          holiday-themed mindfulness classes at the Hialeah Gardens High School
          childcare and preschool center. Through our partnership with the
          Garden Sprouts program, we work with children ages 3–5, guiding them
          through activities that help them explore their emotions and build
          healthy, positive habits for lifelong mental well-being. Every two
          months, our team brings engaging sessions filled with mindfulness
          exercises, simple yoga, and hands-on creative projects that teach
          emotional regulation, kindness, and confidence. These moments reflect
          our nonprofit’s mission to support mental health from an early
          age—creating nurturing, joyful spaces where young learners can grow,
          feel understood, and thrive.
        </p>
      </div>
    </div>

    <div class="achievement">
      <img src={NathanBYoung} alt="[Generic]" />

      <div class="achievement-text">
        <h1>Summer 2025 Back to School Community Donations</h1>

        <h2>
          Nathan B Young Elementary & Dr. Frederica S. Wilson/Skyway Elementary
          School (August 11, 2025)
        </h2>

        <p>
          This summer, we poured our hearts into giving back, and none of it
          would've been possible without our incredible community.
        </p>

        <p>
          We proudly supported students by providing new uniforms, backpacks,
          headphones, and school supplies, along with extra supplies for
          teachers to kick off the school year prepared.
        </p>

        <p>
          At Nathan B. Young Elementary, we donated 50 fully stocked 2nd-grade
          backpacks, 100 uniform polos, and brought smiles through face
          painting.
        </p>

        <p>
          At Skyway Elementary, we supported 18 first graders with their full
          supply lists and added more face painting fun.
        </p>

        <p>
          A huge THANK YOU to our sponsors, Walmart, The Education Fund,
          MetroPCS, NHS, Triumph AC, Nuevo Amanecer Cafe, Latin Churro, and
          Costco for believing in our mission. And a special thank you to Alvaro
          Ramirez from Stingtown News for this amazing recap.
        </p>
      </div>
    </div>

    <div class="achievement">
      <img src={LotusHouse2025} alt="[Generic]" />

      <div class="achievement-text">
        <h1>More Summer 2025 Back to School Community Donations</h1>

        <h2>
          Lotus House Sponsored 12 Kids for Back to School Prep (Given on August
          6, 2025)
        </h2>

        <p>
          Every child deserves to walk into school feeling confident, cared for,
          and ready to succeed.
        </p>

        <p>
          We were honored to sponsor 12 amazing kids at Lotus House, providing
          them with the uniforms, shoes, and socks they need to start the school
          year strong.
        </p>

        <p>
          We love being able to continue working with Lotus House and are so
          grateful for the opportunity to give back to such an incredible
          community.
        </p>
      </div>
    </div>

    <div class="achievement">
      <img src={NathanBYoungTT} alt="[Generic]" />

      <div class="achievement-text">
        <h1>Seasonal Events</h1>

        <h2>
          Nathan B Young Elementary Halloween Trunk or Treat Volunteer Recruit
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque
          velit sit placeat corporis quis?
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis in
          officiis corporis ipsam eaque eligendi quis adipisci consequatur error
          unde!
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          ipsa laborum explicabo modi, commodi obcaecati architecto repellendus
          non eaque eum!
        </p>
      </div>
    </div>

    <div class="achievement">
      <img src={CamillusHouse} alt="[Generic]" />

      <div class="achievement-text">
        <h1>More Donations!</h1>

        <h2>Camillus House Kid’s Clothing Donation Drive</h2>

        <p>
          On Tuesday, September 30th, Blissful Hands officers dropped off our
          Camillus House donations! With our members' support, we were able to
          help the children and families experiencing homelessness at Camillus
          House. We couldn't have done this without the generosity of our
          amazing members-thank you for making a difference in our community and
          donating!
        </p>
      </div>
    </div>
  </div>
</section>

<!-- TODO: IG Graph API -->
<section class="socials"></section>

<style>
  * {
    margin: 0;
  }

  .root-divider {
    border: solid rgba(0, 0, 0, 0.1) 0.5px;
  }

  /* #region title */
  .title {
    /* height: 40rem; */
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10rem 2rem;
  }

  .title-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    color: white;
  }

  .title h1 {
    font-size: 2rem;
    max-width: 26rem;
  }

  .title p {
    font-size: 1rem;
    line-height: 1.2rem;
    max-width: 25rem;
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
    flex: 1;
    text-align: center;
    text-decoration: none;
    padding: 0.75rem 0rem;
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

  @media (min-width: 600px) {
    .title-content {
      width: auto;
    }

    .links a {
      flex: none;
    }

    .links a {
      padding: 0.75rem 1.5rem;
    }
  }

  @media (min-width: 700px) {
    .title {
      padding: 12rem 6rem;
    }

    .title h1 {
      font-size: 4rem;
      max-width: 32rem;
    }

    .title p {
      font-size: 1.3rem;
      line-height: 1.8rem;
      max-width: 30rem;
    }
  }

  /* #endregion */

  /* #region showcase */
  .showcase {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .showcase .showcase-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* max-width: 90vw; */
    width: 100%;
  }

  .showcase-text h1 {
    font-size: 2rem;
  }
  .showcase-text h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .showcase-text p {
    display: none;
  }

  .showcase video {
    object-fit: cover;
    max-width: 100%;

    border-radius: 1rem;
    aspect-ratio: 16 / 9;
  }

  @media (min-width: 700px) {
    .showcase {
      padding: 2rem;
    }

    .showcase .showcase-text {
      max-width: 70vw;
    }

    .showcase video {
      max-width: 70vw;
    }

    .showcase-text h1 {
      font-size: 2.5rem;
    }
    .showcase-text h2 {
      font-size: 1.5rem;

      max-width: 25rem;
    }
  }

  @media (min-width: 1000px) {
    .showcase {
      flex-direction: row;
      align-items: flex-start;
    }
    .showcase .showcase-text {
      width: fit-content;
    }

    .showcase-text p {
      display: block;
      width: 25rem;
      margin-top: 1rem;
      font-size: 1.2rem;
    }

    .showcase video {
      min-width: 0;
      flex: 1;
      height: auto;
      max-width: 100%;
    }
  }
  /* #endregion */

  /* #region sponsors */
  .sponsors {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
  }
  .sponsors h1 {
    font-size: 2rem;
    text-align: center;
  }

  .sponsors .sponsors-container {
    display: flex;
    width: 100vw;
    overflow: hidden;
    /* position: relative; */
    /* animation: sponsors-scroll 15s linear forwards infinite; */
  }
  .sponsors .sponsors-wrapper {
    display: flex;
    width: fit-content;
    position: relative;
    animation: sponsors-scroll 15s linear forwards infinite;
  }

  .sponsors .sponsors-images {
    padding: 1rem 1rem;
    display: flex;
    min-width: 100vw;
    justify-content: space-between;
  }

  .sponsors-images > * {
    margin-right: 4rem;
  }

  .sponsors .sponsors-images.double {
    position: absolute;
    left: 100%;
  }

  .sponsors img {
    object-fit: contain;
    max-height: 8rem;
    max-width: 24rem;
  }

  @keyframes sponsors-scroll {
    from {
      transform: translateX(0px);
    }

    to {
      transform: translateX(-100%);
    }
  }

  .sponsors .sponsors-images {
    display: flex;
    gap: 1rem;
  }
  /* #endregion */

  /* #region achievements */
  .achievements {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    position: relative;
  }

  .achievements .left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .achievements .left h1 {
    font-size: 1.5rem;
    color: var(--primary-text);
  }

  .achievements .left h2 {
    font-size: 2rem;
  }

  .achievements .left p {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .achievements .right {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .achievement:nth-child(3n + 1) {
    background-color: var(--primary);
  }

  .achievement:nth-child(3n + 2) {
    background-color: var(--secondary);
  }

  .achievement:nth-child(3n) {
    background-color: var(--accent);
  }

  .achievement {
    overflow: hidden;
    border-radius: 1rem;
  }

  .achievement .achievement-text {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .achievement h1 {
    font-size: 1.75rem;
  }

  .achievement h2 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 600;
  }

  .achievement p {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }

  .achievement img {
    object-fit: cover;
    width: 100%;
    max-height: 20rem;
  }

  @media (min-width: 900px) {
    .achievements {
      justify-content: center;
      flex-direction: row;
    }

    .achievements > * {
      max-width: 35rem;
    }

    .achievements .left {
      position: sticky;
      top: 0px;
      left: 0px;
      height: min-content;
      padding-top: 1rem;
    }

    /* .achievement img {
      max-width: 30rem;
    } */
  }
  /* #endregion */
</style>
