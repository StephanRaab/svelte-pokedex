
<script lang="ts">
 import type {PageData} from './$types'; 

 export let data: PageData;
</script>

<div class="monsters">
    {#each data.monsters as monster(monster.id)}
        
        <div class="monster">
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


<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: monospace;        
    }
    
    .monsters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
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