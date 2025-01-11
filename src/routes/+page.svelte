
<script lang="ts">
 import type {PageData} from './$types'; 

 export let data: PageData;
</script>

{#each data.monsters as monster(monster.url)}
    <h3>[{monster.id}] {monster.name}</h3>
{/each}