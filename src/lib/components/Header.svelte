<script lang="ts">
  export let imageSrc: string = "/default-logo.png";
  export let alt: string = "Logo";
</script>


<header class="flex items-center h-[8vh] justify-between p-4 bg-gray-100">
  <!-- Logo / afbeelding -->
  <img src={imageSrc} alt={alt} class=" ml-[1vw] w-auto" />

  <!-- Navigatie -->
  <nav class="flex gap-4 max-sm:hidden">
    <a href="/Home" class="text-gray-700 hover:text-gray-900">Home</a>
    <a href="/Home" class="text-gray-700 hover:text-gray-900">Aanbod</a>
    <a href="/Home" class="text-gray-700 hover:text-gray-900">Diensten</a>
    <a href="/Home" class="text-gray-700 hover:text-gray-900">Over Ons</a>
    <a href="/Home" class="text-gray-700 hover:text-gray-900">Contact</a>
  </nav>
</header>
