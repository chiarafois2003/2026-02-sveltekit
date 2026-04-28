<script lang="ts">
  interface Props {
    image: string;
    title: string;
    category: string;
  }

  let { image, title, category }: Props = $props();
</script>

<div class="card">
  <div class="card-image">
    <img src={image} alt={title} />
  </div>
  <div class="card-content">
    <div class="card-text">
      <p class="title">{title}</p>
      <p class="category">/ {category}</p>
    </div>
    <div class="card-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  </div>
</div>

<style>
  .card {
    background-color: var(--color-background-primary);
    border-radius: var(--radius-m);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);
  }

  .card-image {
    aspect-ratio: 664 / 401;
    overflow: hidden;
    width: 100%;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-3) var(--spacing-3) 0 var(--spacing-3);
    width: 100%;
    box-sizing: border-box;
  }

  .card-text {
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    white-space: nowrap;
  }

  .title {
    margin: 0;
    color: var(--color-content-primary);
  }

  .category {
    margin: 0;
    color: var(--color-content-secondary);
  }

  .card-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: var(--color-content-primary);
  }

  .card-arrow svg {
    width: 100%;
    height: 100%;
  }
</style>