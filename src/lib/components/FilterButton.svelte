<script lang="ts">
  interface Props {
    label?: string;
    active?: boolean;
  }

  let { label = "Filter", active = false }: Props = $props();
</script>

<button class="filter-button" class:active>
  {label}
</button>

<style>
  .filter-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--radius-full);
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
    background-color: var(--color-filters-bg-active);
  }
</style>