<script lang="ts">
  interface LinkProps {
    href: string;
    variant?: "primary" | "outline" | "ghost" | "destructive";
  }

  let linkProps: LinkProps = $props();
</script>

<a href={linkProps.href} class={linkProps.variant ?? ""}>
  <slot />
</a>

<style>
  a {
    text-decoration: none;
    color: var(--neutral);
  }

  .primary {
    background-color: var(--accent);
    font-weight: 600;
    color: var(--off-neutral);
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    transition: all 200ms ease-in-out;
  }

  .primary:hover {
    background-color: var(--off-accent);
  }
</style>
