<script lang="ts">
  import type { IndexMonster } from "./+page";

    // these are props
    export let monster:IndexMonster;
    export let updateSearchParams: (key: string, value:string) => void;
</script>

<!-- TEMPLATE -->
 <div class="monsters">
    <div class="monster">
        <div on:click={() => updateSearchParams('monsterId', monster.id)}>
            <div class="monster-id">
                {monster.id}
              </div>
          <div class="monster-content">
            <img src={monster.image} alt={monster.name} />
            <h3>{monster.name}</h3>
          </div>
    
        </div>
        <div on:click={() => updateSearchParams('monsterId2', monster.id)}>
          Add Monster 2
        </div>
      </div>
 </div>
 

  <!-- STYLES -->
  <style>
    .monsters {
       margin: .6rem;
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
        text-align: left;
        color: #969696;
        font-weight: 800;
    }
    .monster-content {
        display: flex;
        flex-direction: column;
        align-items: center;        
    }
  </style>