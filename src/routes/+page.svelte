<script lang="ts">
  import TopBar from "$lib/components/TopBar.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import FilterBar from "$lib/components/FilterBar.svelte";
  import Card from "$lib/components/Card.svelte";

  let activeFilter = $state("");

  // Asset images from Figma
  const images = {
    img1: "https://www.figma.com/api/mcp/asset/3f67970e-384e-41b8-9679-a0c3e8f56e3e",
    img2: "https://www.figma.com/api/mcp/asset/7543430b-a17e-4ca7-980d-f1de8769fb81",
    img3: "https://www.figma.com/api/mcp/asset/42c72523-793a-4da5-afd2-90bdcb156f5d",
    img4: "https://www.figma.com/api/mcp/asset/2d46e775-c68a-4e16-a8b9-2f4e4383f6a7",
    img5: "https://www.figma.com/api/mcp/asset/7115e547-9cbb-434f-92d1-49e71b067b80",
    img6: "https://www.figma.com/api/mcp/asset/01383244-0c19-466c-be80-002554845fb3",
    img7: "https://www.figma.com/api/mcp/asset/0ef9b359-a912-4aa1-b08d-8ad826af6ded",
    img8: "https://www.figma.com/api/mcp/asset/470af4c0-2e9c-4488-8ba7-3dadf28f83a9",
    img9: "https://www.figma.com/api/mcp/asset/262de8c7-89ef-4c1f-8c41-23fc5cf34b45",
    img10: "https://www.figma.com/api/mcp/asset/3128e1d1-72e5-4183-8215-c2eff3162f98",
    img11: "https://www.figma.com/api/mcp/asset/9312b081-1448-438e-9ad9-b5517b7e2193",
    img12: "https://www.figma.com/api/mcp/asset/f3751f71-3b95-4e60-95b5-5077a2910b33",
    img13: "https://www.figma.com/api/mcp/asset/0634d478-9716-4783-bf02-dee8ad495ef0",
    img14: "https://www.figma.com/api/mcp/asset/81b02f5b-4b8f-468c-834d-f7d175e7dca3",
    img15: "https://www.figma.com/api/mcp/asset/eca7c3a6-e26e-4991-bfe3-646dab44c09d",
    img16: "https://www.figma.com/api/mcp/asset/a7a8727e-5fa0-468c-bd7f-9916d671b22e",
    img17: "https://www.figma.com/api/mcp/asset/49e61e5d-5137-4360-94f7-06b36d513516",
    img18: "https://www.figma.com/api/mcp/asset/929d8ee3-26df-4a1b-b453-48d5694ec1c4",
  };

  const dishes = [
    { title: "Coccois", category: "Starters", image: images.img1 },
    { title: "Pizza Margherita", category: "Starters", image: images.img2 },
    { title: "Asparagus and Sausage Pizza", category: "Starters", image: images.img3 },
    { title: "Asparagus fritters", category: "Starters", image: images.img13 },
    { title: "Mezze Maniche alla Carbonara", category: "Pasta", image: images.img4 },
    { title: "Malloreddus", category: "Pasta", image: images.img5 },
    { title: "Ricotta and Spinach Ravioli", category: "Pasta", image: images.img6 },
    { title: "Pappardelle stuffed with Potatoes and Sausage", category: "Pasta", image: images.img7 },
    { title: "Roast Pork Loin", category: "Mains", image: images.img8 },
    { title: "Beef Meatballs", category: "Mains", image: images.img9 },
    { title: "Cotoletta", category: "Mains", image: images.img10 },
    { title: "Cordon Bleu", category: "Mains", image: images.img11 },
    { title: "Cream Puffs", category: "Desserts", image: images.img12 },
    { title: "Cardinali Pastries", category: "Desserts", image: images.img14 },
    { title: "Jam Tart", category: "Desserts", image: images.img15 },
    { title: "Crumble Cookies", category: "Desserts", image: images.img16 },
    { title: "Sbrisolona with Custard and Strawberries", category: "Desserts", image: images.img17 },
    { title: "Sacher Torte", category: "Desserts", image: images.img18 },
  ];

  const filteredDishes = $derived(() =>
    activeFilter ? dishes.filter((dish) => dish.category === activeFilter) : dishes
  );
</script>

<svelte:head>
  <title>MOKADO - Culinary Portfolio</title>
</svelte:head>

<main class="page">
  <TopBar />
  <HeroSection />
  <FilterBar activeFilter={activeFilter} on:change={(event) => (activeFilter = event.detail)} />
  
  <div class="grid">
    {#each filteredDishes as dish (dish.title)}
      <Card image={dish.image} title={dish.title} category={dish.category} />
    {/each}
  </div>
</main>

<style>
  :global(body) {
    background-color: var(--color-background-primary);
    color: var(--color-content-primary);
    font-family: var(--font-primary);
    margin: 0;
    padding: 0;
  }

  .page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-background-primary);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-3);
    padding: var(--spacing-6) var(--spacing-11);
    width: 100%;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
