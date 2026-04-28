<script lang="ts">
  // 1. Aggiungiamo 'onclick' alle Props che il bottone può ricevere
  interface Props {
    label?: string;
    active?: boolean;
    onclick?: () => void;
  }

  // 2. Estraiamo 'onclick'
  let { label = "Filter", active = false, onclick }: Props = $props();
</script>

<button class="filter-button" class:active {onclick}>
  {label}
</button>

<style>
  .filter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--radius-s);
    border: none;
    background-color: var(--color-filters-bg-default);
    color: var(--color-filters-text-default);
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .filter-button:hover {
    background-color: var(--color-filters-bg-active);
  }

.filter-button.active {
    background-color: var(--brand-500);
    font-weight: 600;
  }</style>