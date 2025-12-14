<script lang="ts">
  interface LinkProps {
    href: string;
    variant?: "primary" | "outline" | "ghost" | "destructive";
    preventLoad?: boolean;
  }

  let linkProps: LinkProps = $props();
</script>

<a
  href={linkProps.href}
  class={linkProps.variant ?? ""}
  data-sveltekit-preload-data={linkProps.preventLoad ? "off" : "on"}
>
  <slot />
</a>

<style>
  /* TODO: Make all the variants  */
  a {
    text-decoration: none;
    color: var(--neutral);
    transition: all 200ms ease-in-out;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  /* .ghost {

  } */

  .primary {
    background-color: var(--accent);
    font-weight: 600;
    color: var(--off-neutral);
  }

  .primary:hover {
    background-color: var(--off-accent);
  }
</style>
