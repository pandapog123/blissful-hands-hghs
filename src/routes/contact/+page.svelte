<script lang="ts">
  import { afterNavigate, goto } from "$app/navigation";
  import BrandURL from "$lib/assets/Brand.png";

  let backPage: string | undefined | null = null;

  afterNavigate(({ from }) => {
    backPage = from?.route.id;
  });

  function handleBack() {
    if (!backPage) {
      goto("/");
    } else {
      goto(backPage);
    }
  }
</script>

<section class="contact">
  <div class="left">
    <img src={BrandURL} alt="Blissful Hands Brand" />

    <div class="title">
      <h1>Get In Touch</h1>
      <h2>Reach out and let’s explore opportunities together.</h2>
    </div>

    <div>
      <a href={backPage ?? "/"} class="back-button">
        {#if backPage}
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
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <div>Go Back</div>
        {:else}
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
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <div>Home</div>
        {/if}
      </a>
    </div>
  </div>

  <form action="" method="POST">
    <div class="top">
      <h1>Contact</h1>

      <hr />

      <ul>
        <li>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </li>
        <li>
          <h2>E-mail</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail"
          />
        </li>
        <li>
          <h2>Message</h2>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Enter your message"
          />
        </li>
      </ul>
    </div>

    <button type="submit">Submit</button>
  </form>
</section>

<style>
  * {
    margin: 0;
  }

  .contact {
    display: flex;
  }

  .left {
    display: none;
    background: linear-gradient(90deg, #f3d1cf 0%, #e6e3fe 100%);
    padding: 4rem;
    /* display: flex */
    flex-direction: column;
    gap: 1.5rem;
  }

  .left img {
    width: 8rem;
    height: 8rem;
  }

  .left .title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .left h1 {
    font-size: 3rem;
  }

  .left h2 {
    font-weight: 500;
    font-size: 1.5rem;
    max-width: 20rem;
  }

  form {
    width: 100vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li input {
    border: solid rgba(0, 0, 0, 0.1) 1px;
    border-radius: 0.25rem;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    background-color: rgba(0, 0, 0, 0.02);
  }

  form h1 {
    font-size: 2rem;
  }

  hr {
    border: solid rgba(0, 0, 0, 0.1) 0.5px;
  }

  form h2 {
    font-weight: 600;
    font-size: 1.25rem;
  }

  .top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  form button {
    border: none;
    background: var(--accent);
    color: var(--off-neutral);
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    transition: all 200ms ease-in-out;
  }

  form button:hover {
    background-color: var(--off-accent);
  }

  .back-button {
    width: fit-content;
    color: var(--neutral);
    text-decoration: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 0.75rem;
    transition: all 200ms ease-in-out;
    border-radius: 100rem;
    border: none;
    opacity: 0.4;
    /* border: solid rgba(0, 0, 0, 0.1) 1px; */
  }

  .back-button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .back-button svg {
    width: 1rem;
    height: 1rem;
  }

  @media (min-width: 650px) {
    .contact {
      height: 100vh;
    }
  }

  @media (min-width: 800px) {
    form {
      width: 300px;
      padding: 2rem 1rem;
    }

    .left {
      flex: 1;
      display: flex;
    }
  }

  @media (min-width: 900px) {
    form {
      width: 400px;
    }
  }

  @media (min-width: 1000px) {
    .left h1 {
      font-size: 4rem;
    }

    .left h2 {
      font-size: 2rem;
      max-width: 28rem;
    }
  }
</style>
