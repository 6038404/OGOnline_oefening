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



<section class="[font-family:'Nunito',sans-serif]">

    <section
    class="h-[70vh] px-[10vw] bg-cover bg-center flex flex-col justify-center items-start text-left text-white
            bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')]
            bg-black/50 bg-blend-overlay
            max-sm:items-center max-sm:text-center"
    >
        <h1 class="text-[70px] font-bold mb-4 max-sm:text-[42px]">
            Lorem ipsum dolor sit amet
        </h1>

        <p class="text-[22px] mb-6 max-w-[40vw] max-sm:text-[18px] max-sm:max-w-[90vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, at massa eleifend purus sagittis sed justo, purus diam.
        </p>

        <div class="flex gap-4 max-sm:flex-col">
            <button class="px-8 py-3 font-semibold bg-[#FF9A00] hover:bg-[#FFAF24] text-black transition max-sm:w-full max-sm:justify-center">
            LOREM IPSUM
            </button>
            <button class="px-8 py-3 font-semibold bg-[#DDDDDD] hover:bg-[#BFBFBF] text-black transition max-sm:w-full max-sm:justify-center">
            LOREM IPSUM
            </button>
        </div>
    </section>






    <section class="flex flex-col pl-[10vw] pt-[5vh] max-sm:items-center max-sm:pl-0">
        <subtitle class="text-[18px] text-[#FF9A00] font-normal tracking-wider max-sm:text-[22px]">LOREM IPSUM</subtitle>
        <h2 class="text-[38px] font-bold">Lorem ipsum</h2>
    </section>

    <section class="max-w-[80vw] mx-auto py-[5vh]">
        <div class="flex justify-between max-sm:flex-col max-sm: mb-[5vh]">
            {#each allHotels as hotel}
                <article class="relative max-sm: mb-[5vh] max-sm:mx-auto">
                    <img
                    src={hotel.thumbnail}
                    alt={hotel.name}
                    class="w-[35vw] h-[45vh] object-cover shadow-lg max-sm:w-[90vw] max-sm:h-[30vh]"
                    />

                    <div
                    class="border border-gray-400 absolute left-1/2 -translate-x-1/2  -bottom-20 w-[20vw]
                            bg-white shadow-lg px-10 py-6 text-center max-sm:w-full max-sm:static max-sm:-translate-x-0 max-sm:px-2"
                    >

                        <h2 class="text-[1.5vw] font-bold text-slate-900 mb-4 max-sm:text-[5vw]">
                            {hotel.name}
                        </h2>

                        <div class="flex justify-center gap-8 text-[14px]">
                            <span class="flex items-center gap-2">
                            <span class="text-orange-500">&#9635</span>
                            {hotel.price}
                            </span>

                            <span class="flex items-center gap-2">
                            <span class="text-orange-500">&#9635</span>
                            Rating {hotel.overall_rating}
                            </span>
                        </div>
                    </div>
                </article>
            {/each}
        </div>

        <div class="h-16"></div>
    </section>

</section>



