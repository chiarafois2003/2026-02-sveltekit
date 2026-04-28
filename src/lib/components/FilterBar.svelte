<script lang="ts">
  import FilterButton from "./FilterButton.svelte";

  // 1. Aggiorniamo l'interfaccia per accettare la funzione 'onchange'
  interface Props {
    activeFilter?: string;
    onchange: (filter: string) => void;
  }

  // 2. Estraiamo onchange dalle props (niente più createEventDispatcher!)
  let { activeFilter = "", onchange }: Props = $props();
  const filters = ["Starters", "Pasta", "Mains", "Desserts"];
</script>

<div class="filter-bar">
  {#each filters as filter (filter)}
    <FilterButton
      label={filter}
      active={activeFilter === filter}
      onclick={() => onchange(activeFilter === filter ? "" : filter)} 
    />
  {/each}
</div>

<style>
  .filter-bar {
    display: flex;
    gap: var(--spacing-3);
    align-items: center;
    padding: 0 var(--spacing-11);
    width: 100%;
    box-sizing: border-box;
  }
</style>