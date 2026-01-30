<script lang="ts">
    import { onMount } from 'svelte';

    let data: any = null;
    let trimmedData: any = null;

    type Hotel = {
        name: string;
        thumbnail: string;
        price: string;
        overall_rating: number;
    };

    let allHotels: Hotel[] = [];

    onMount(async () => {
        const res = await fetch('/api/hotels'); // server-side endpoint
        data = await res.json();
        trimmedData = data['ads'];
        allHotels = (trimmedData as Hotel[]).slice(0, 2);
    });

</script>



<section>
    <subtitle>Hotels</subtitle>
    <h2>All Hotels</h2>

    {#each allHotels as hotel}
        <pre>
            <section>
                <h2>{hotel.name}</h2>
                <img src={hotel.thumbnail} alt={hotel.name} />
                <p>Price: {hotel.price}</p>
                <p>Rating: {hotel.overall_rating}</p>
            </section>
        </pre> 
    {/each}
</section>



<!-- <pre>{JSON.stringify(trimmedData, null, 2)}</pre> -->

