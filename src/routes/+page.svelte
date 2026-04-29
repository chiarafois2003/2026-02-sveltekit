<script lang="ts">
  import TopBar from "$lib/components/TopBar.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  import FilterBar from "$lib/components/FilterBar.svelte";
  import Card from "$lib/components/Card.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { base } from '$app/paths';

  let activeFilter = $state("");

  // Immagini collegate alla cartella static/images/
  const images = {
    img1: `${base}/images/Coccois.webp`,
    img2: `${base}/images/Pizza.webp`,
    img3: `${base}/images/PizzaCondita.webp`,
    img4: `${base}/images/Frittelle.webp`,
    img5: `${base}/images/Carbonara.webp`,
    img6: `${base}/images/Malloreddus.webp`,
    img7: `${base}/images/Ravioli.webp`,
    img8: `${base}/images/Pappardelle.webp`,
    img9: `${base}/images/Arrosto.webp`,
    img10: `${base}/images/Polpette.webp`,
    img11: `${base}/images/Cotoletta.webp`,
    img12: `${base}/images/Cordonbleu.webp`,
    img13: `${base}/images/Bigne.webp`,
    img14: `${base}/images/Cardinali.webp`,
    img15: `${base}/images/Crostata.webp`,
    img16: `${base}/images/Cookies.webp`,
    img17: `${base}/images/Sbriciolona.webp`,
    img18: `${base}/images/Sacher.webp`,
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
  
  <Footer />
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
      padding: var(--spacing-4) var(--spacing-4); /* Margini laterali più piccoli */
      row-gap: var(--spacing-8); /* Più spazio verticale tra un piatto e l'altro */
    }
  }
</style>