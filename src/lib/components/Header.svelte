<script lang="ts">
  export let imageSrc: string = "/default-logo.png"; // default fallback
  export let alt: string = "Logo"; // good for accessibility
</script>


<header>
    <img src={imageSrc} alt={alt} />
    <nav>
        <a href="/Home">Home</a>
        <a href="/Home">Aanbod</a>
        <a href="/Home">Diensten</a>
        <a href="/Home">Over Ons</a>
        <a href="/Home">Contact</a>
    </nav>
</header>
