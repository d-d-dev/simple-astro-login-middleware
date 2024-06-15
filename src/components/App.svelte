<script lang="ts">
    let contador:number=0;
    
    const dec = () => contador--
    const inc = () => contador++
</script>

<div id="app" class="border-4 border-dashed border-orange-500 p-2">
    <h2 class="text-2xl font-bold text-center">Componente Svelte!</h2>
    <p class="text-base">Esta sección usa javascript en el cliente!</p>
    <div class="flex justify-center gap-2 text-4xl">
        <button class="bg-accent1 px-2 text-text-light font-bold" on:click={dec}><i class="fa-solid fa-minus"></i></button>
        <span class="font-bold">{contador}</span>
        <button class="bg-accent1 px-2 text-text-light font-bold" on:click={inc}><i class="fa-solid fa-plus"></i></button>
    </div>
</div>