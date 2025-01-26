
<script lang="ts">
    import type {PageData} from './$types'; 
    import { page } from '$app/stores';
    import { generations } from "./generations";
    import Monster from './Monster.svelte';
    import { goto } from '$app/navigation';

    export let data: PageData;

    let form = {
        searchString: ''
    }
    let searchString = '';
    $: selectedMonsters = data.monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchString.toLowerCase());
    })

    $: monsterId = $page.url.searchParams.get("monsterId") || '';
    $: monster = data.monsters.find(monster => monster.id === monsterId);
    $: monsterId2 = $page.url.searchParams.get("monsterId2") || '';
    $: monster2 = data.monsters.find(monster => monster.id === monsterId2);

    const updateSearchParams = (key:string, value:string) =>{
        const searchParams = new URLSearchParams($page.url.searchParams);
        searchParams.set(key, value);
        goto(`?${searchParams.toString()}`);
    }

    const submitSearch = (e:Event) => {
        searchString = form.searchString;

    }
</script>

<!-- TEMPLATE -->
{#if monster}
    <Monster monster={monster} updateSearchParams={updateSearchParams}/>    
{/if}

{#if monster2}
    <Monster monster={monster2} updateSearchParams={updateSearchParams}/>    
{/if}

<div class="generations">
    {#each generations as generation (generation.id)}
        <div class="generation">{generation.main_region}</div>    
    {/each}
</div>

<form class="search" on:submit={submitSearch}>
    <input class="search-field" type="text" bind:value={form.searchString} placeholder="pokemon name">
    <input class="search-button" value="Search" type="submit"/>    
</form>

<div class="monsters">
    {#each selectedMonsters as monster(monster.id)}
        <Monster 
        monster={monster} 
        updateSearchParams={updateSearchParams}
        isInteractive={true}
        />    
    {/each}
</div>

<!-- STYLING -->
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: monospace;        
    }
    
    .generations{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .generation {
        color: #333;
        margin: 1rem;
        padding: .5em;
        border: 1px solid rgb(223, 203, 161);
        border-radius: 20px;
        background-color: rgb(255, 238, 202);
        transition: all .3s ease-in-out;
        cursor: pointer;
    }

    .generation:hover {
        transition: all .3s ease-in-out;
        transform: translateY(-5px);
        background-color: rgb(238, 208, 175);
        border-color: rgb(204, 154, 97);
        font-weight: 700;
    }

    .search{
        display: flex;
        justify-content: center;
        gap: .4rem;
        margin: 20px 0;

        .search-field {
            padding: 5px 10px;
        }

        .search-button {
            padding: 10px;
        }
    }

    .monsters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;        
        justify-content: center;
    }
</style>
