<script lang="ts">
  interface Props {
    text?: string;
    leadingIcon?: boolean;
    trailingIcon?: boolean;
    href?: string;
  }

  let { text = "About", leadingIcon = true, trailingIcon = true, href = "#" }: Props = $props();
</script>

<a {href} class="link-desktop">
  <div class="link-content">
    {#if leadingIcon}
      <div class="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
    {/if}
    <span class="text">{text}</span>
    {#if trailingIcon}
      <div class="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
    {/if}
  </div>
</a>

<style>
  .link-desktop {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-2) var(--spacing-2);
    gap: var(--spacing-1);
    text-decoration: none;
    color: var(--color-link-default);
    /* 1. Aggiungiamo una transizione morbida */
    transition: color 0.2s ease; 
  }

  /* 2. Regola magica: quando il mouse passa sopra, usa il colore Brand */
  .link-desktop:hover {
    color: var(--color-link-hover);
  }

  .link-content {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .text {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 24px;
    white-space: nowrap;
    /* 3. Diciamo al testo di ereditare il colore del genitore (che cambierà in hover) */
    color: inherit; 
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }
</style>