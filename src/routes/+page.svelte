
<script lang="ts">
 import {generations} from './generations'    
</script>

{#each generations as gen (gen.id)}
    <h2>{gen.name}</h2>
    <p>Games:</p>
    <ul>
        {#each gen.games as game}
           <li>{game}</li>
        {/each}
    </ul>
    <p>Main Region: {gen.main_region}</p>
{/each}