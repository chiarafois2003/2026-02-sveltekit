<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import FilterButton from "./FilterButton.svelte";

  interface Props {
    activeFilter?: string;
  }

  let { activeFilter = "" }: Props = $props();
  const dispatch = createEventDispatcher();
  const filters = ["Starters", "Pasta", "Mains", "Desserts"];

  function handleFilterChange(filter: string) {
    activeFilter = filter;
    dispatch("change", filter);
  }
</script>

<div class="filter-bar">
  {#each filters as filter (filter)}
    <FilterButton
      label={filter}
      active={activeFilter === filter}
      on:click={() => handleFilterChange(filter)}
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
    cursor: pointer;
  }
</style>