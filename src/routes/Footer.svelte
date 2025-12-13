<footer>
  <div class="links">
    <ul class="site-links">
      <li class="site-link"><a href="/">Home</a></li>
      <li class="site-link">
        <a
          href="https://www.zeffy.com/en-US/donation-form/blissful-hands"
          target="_blank"
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
      <li class="site-link"><a href="/contact">Contact</a></li>
    </ul>

    <ul class="social-links">
      <li>
        <a href="https://www.instagram.com/blissfulhandsorg/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
            /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path
              d="M16.5 7.5v.01"
            /></svg
          >
          <div>Instagram</div>
        </a>
      </li>

      <li>
        <a href="https://www.youtube.com/@TheBlissfulHands" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
            /></svg
          >
          <div>YouTube</div>
        </a>
      </li>
    </ul>
  </div>

  <hr />

  <span class="copyright"
    >Copyright © 2025 Blissful Hands - All Rights Reserved.</span
  >
</footer>

<style>
  footer {
    /* width: 100vw; */
    /* max-width: 100vw; */
    padding: 3rem 2rem;

    background-color: #fef2e3;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  ul a {
    text-decoration: none;
    color: var(--neutral);
  }

  hr {
    border: #14141410 solid 0.5px;
    width: 100%;
    margin: 0;
  }

  .copyright {
    font-size: 0.75rem;
  }

  .site-links svg {
    width: 1rem;
    height: 1rem;
  }

  .site-links a {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .social-links {
    align-items: end;
  }

  .social-links svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .social-links a {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    color: var(--off-neutral);
    background-color: var(--accent);
    padding: 0.5rem;
    border-radius: 8px;
  }

  @media (min-width: 650px) {
    ul {
      flex-direction: row;
    }

    .social-links svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    .social-links a div {
      display: none;
    }

    ul {
      gap: 1rem;
    }
  }
</style>
