
<script lang="ts">
    import type {PageData} from './$types'; 
    import { page } from '$app/stores';
    import type { IndexMonster } from './+page';
    import { generations } from "./generations";
  import { goto } from '$app/navigation';

    export let data: PageData;

    let monsterId:string = $page.url.searchParams.get("monsterId") || '';
    $:monster = data.monsters.find(monster => monster.id === monsterId);
    const monsterClick = (monster:IndexMonster) => {
        monsterId = monster.id;
        goto(`?monsterId=${monsterId}`);
    }
</script>

<!-- TEMPLATE -->
<h1>{monsterId}</h1>
<h2>{monster?.name}</h2>

<div class="generations">
    {#each generations as generation (generation.id)}
    <div class="generation">{generation.main_region}</div>    
{/each}
</div>


<div class="monsters">
    {#each data.monsters as monster(monster.id)}
        
        <div class="monster" on:click={() => monsterClick(monster)}>
            <div class="monster-id">
                {monster.id}
            </div>
            <div class="monster-content">
                <img src="{monster.image}" alt="{monster.name} image">
                 <h3>{monster.name}</h3>
            </div>            
        </div>
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

    .monsters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
    .monster {
        width: 120px;        
        padding: .5em;
        background-color: #eee;   
        border-radius: .5rem;
        cursor: pointer;
        transition: .3s ease-in-out;
        border: 1px solid #ddd;
    }
    .monster:hover {
        background-color: #d1d1d1;
        transition: .3s ease-in-out;
    }
    .monster-id {
        background: white;        
        border-radius: 100%;
        height: 2rem;
        width: 2rem;
        text-align: center;
        vertical-align: middle;
        padding-top: .5rem;                
        color: #1d1d1d;
        font-weight: 800;
        border: 1px solid #ddd;
    }
    .monster-content {
        display: flex;
        flex-direction: column;
        align-items: center;        
    }
</style>