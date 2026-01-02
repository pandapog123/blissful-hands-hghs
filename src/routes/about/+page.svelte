<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<section class="title">
  <h1>About Us</h1>

  <p>
    At Blissful Hands, students take part in hands-on projects and volunteer
    work to help the local community. Our club focuses on creating opportunities
    for positive connections and meaningful contributions for our community.
  </p>
</section>

<section class="officers">
  <div class="officers-title">
    <h1>Our Officers</h1>

    <h2>The leaders shaping and inspiring our community.</h2>
  </div>

  <ul class="officers-list">
    {#each data.officerData as officer}
      <li class="officer">
        <img src={officer.imgURL} alt="Photo of {officer.name}" />

        <p>{officer.name}, {officer.positionDescription}</p>
      </li>
    {/each}
  </ul>
</section>

<section class="sponsors">
  <div class="sponsors-title">
    <h1>Our Sponsors</h1>

    <h2>Supporting partners who make our work possible.</h2>
  </div>

  <ul class="officers-list">
    {#each data.sponsorsData as sponsor}
      <li class="sponsor">
        <img src={sponsor.imgURL} alt="Photo of {sponsor.name}" />

        <p>{sponsor.name}, {sponsor.positionDescription}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
  * {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  /* #region title */
  .title {
    color: var(--off-neutral);
    padding: 3rem 2rem;
    background: var(--primary-text);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title h1 {
    font-size: 3rem;
  }

  .title p {
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.4rem;
  }

  @media (min-width: 450px) {
    .title h1 {
      font-size: 4rem;
    }

    .title p {
      font-size: 1.25rem;
      line-height: 1.6rem;
    }
  }

  @media (min-width: 800px) {
    .title {
      padding: 3rem 5rem;
    }

    .title h1 {
      font-size: 5rem;
    }
  }
  /* #endregion */

  /* #region officers */
  .officers {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  .officers ul {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    gap: 2rem;
  }
  .officers-title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .officers-title h1 {
    font-size: 2.5rem;
  }

  .officers-title h2 {
    font-size: 1rem;
    font-weight: 500;
  }

  .officer {
    /* background-color: red; */
    display: flex;
    align-items: center;

    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    background-color: #efefef;
  }

  .officer img {
    object-fit: cover;
    height: 20rem;
    width: 100%;
  }

  .officer p {
    padding: 1rem;
  }

  @media (min-width: 650px) {
    .officers ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1050px) {
    .officers ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* #endregion */

  /* #region sponsors */
  .sponsors {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  .sponsors ul {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    gap: 2rem;
  }

  .sponsors-title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .sponsors-title h1 {
    font-size: 2.5rem;
  }

  .sponsors-title h2 {
    font-size: 1rem;
    font-weight: 500;
  }

  .sponsor {
    /* background-color: red; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    background-color: #efefef;
  }

  .sponsor img {
    object-fit: cover;
    height: 20rem;
    width: 100%;
  }

  .sponsor p {
    padding: 1rem;
  }

  @media (min-width: 650px) {
    .sponsors ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1050px) {
    .sponsors ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* #endregion */
</style>
