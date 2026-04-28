<script lang="ts">
  import TopBar from "$lib/components/TopBar.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import FilterBar from "$lib/components/FilterBar.svelte";
  import Card from "$lib/components/Card.svelte";

  let activeFilter = $state("");

  // Immagini collegate alla cartella static/images/
  const images = {
    img1: "/images/Coccois.jpg",
    img2: "/images/Pizza.jpg",
    img3: "/images/PizzaCondita.jpg",
    img4: "/images/Frittelle.jpg",
    img5: "/images/Carbonara.jpg",
    img6: "/images/Malloreddus.jpg",
    img7: "/images/Ravioli.jpg",
    img8: "/images/Pappardelle.jpg",
    img9: "/images/Arrosto.jpg",
    img10: "/images/Polpette.jpg",
    img11: "/images/Cotoletta.jpg",
    img12: "/images/Cordonbleu.jpg",
    img13: "/images/Bigne.jpg",
    img14: "/images/Cardinali.jpg",
    img15: "/images/Crostata.jpg",
    img16: "/images/Cookies.jpg",
    img17: "/images/Sbriciolona.jpg",
    img18: "/images/Sacher.jpg",
  };

  const dishes = [
    { title: "Coccois", category: "Starters", image: images.img1 },
    { title: "Pizza Margherita", category: "Starters", image: images.img2 },
    { title: "Asparagus and Sausage Pizza", category: "Starters", image: images.img3 },
    { title: "Asparagus fritters", category: "Starters", image: images.img4 },
    { title: "Mezze Maniche alla Carbonara", category: "Pasta", image: images.img5 },
    { title: "Malloreddus", category: "Pasta", image: images.img6 },
    { title: "Ricotta and Spinach Ravioli", category: "Pasta", image: images.img7 },
    { title: "Potatoes and Sausage Stuffed Pappardelle", category: "Pasta", image: images.img8 },
    { title: "Roast Pork Loin", category: "Mains", image: images.img9 },
    { title: "Beef Meatballs", category: "Mains", image: images.img10 },
    { title: "Cotoletta", category: "Mains", image: images.img11 },
    { title: "Cordon Bleu", category: "Mains", image: images.img12 },
    { title: "Cream Puffs", category: "Desserts", image: images.img13 },
    { title: "Cardinali Pastries", category: "Desserts", image: images.img14 },
    { title: "Jam Tart", category: "Desserts", image: images.img15 },
    { title: "Crumble Cookies", category: "Desserts", image: images.img16 },
    { title: "Custard and Strawberries Sbrisolona", category: "Desserts", image: images.img17 },
    { title: "Sacher Torte", category: "Desserts", image: images.img18 },
  ];

  // Sintassi corretta per Svelte 5 senza () =>
  const filteredDishes = $derived(
    activeFilter ? dishes.filter((dish) => dish.category === activeFilter) : dishes
  );
</script>

<svelte:head>
  <title>MOKADO - Culinary Portfolio</title>
</svelte:head>

<main class="page">
  <TopBar />
  <HeroSection />
  <FilterBar 
    activeFilter={activeFilter} 
    onchange={(nuovoFiltro) => {
      console.log("Il filtro richiesto è:", nuovoFiltro);
      activeFilter = nuovoFiltro;
    }} 
  />

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
    gap: var(--spacing-6);
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