
<script lang="ts">
 import {hello} from './hello'    

 const greetingObject = {
    greeting: 'hello',
    name: 'bob'
 };

 const data = [
    "red","blue", "yellow"
]
</script>

<h1>{greetingObject.greeting} {greetingObject.name}</h1>

{#each data as color}
    <ul>
        <li>{color}</li>
    </ul>
{/each}
