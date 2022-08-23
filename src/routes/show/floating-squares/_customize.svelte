<script lang="ts">
    import type {SquareConfig} from "./_squares";

    export let redraw: number;
    export let squares: Array<SquareConfig> = [];

    function handleRedraw() {
        setTimeout(() => {
            redraw = redraw + 1;
        }, 0);
    }

    function handleAddSquare() {
        squares = [
            ...squares,
            {
                center: {
                    x: Math.random(),
                    y: Math.random()
                },
                size: 300 * Math.random(),
                angle: 90 * Math.random(),
                width: 1,
                color: '#1C2EFF'
            }
        ];
    }
</script>

<pre>{JSON.stringify(squares)}</pre>
<div style:opacity=".2">
    <button on:click={handleAddSquare}>Add new square</button>
    {#each squares as square}
        <div>
            <input
                    type="number"
                    bind:value={square.center.x}
                    min="-.1"
                    max="1.1"
                    step="0.01"
                    on:input={handleRedraw}
            />
            <input
                    type="number"
                    bind:value={square.center.y}
                    min="-.1"
                    max="1.1"
                    step="0.01"
                    on:input={handleRedraw}
            />
            <input type="number" bind:value={square.size} min="5" step="5" on:input={handleRedraw} />
            <input type="number" bind:value={square.angle} on:input={handleRedraw} />
            <input type="radio" bind:group={square.color} value="#1C2EFF" on:input={handleRedraw} />blue 1
            <input type="radio" bind:group={square.color} value="#000EB2" on:input={handleRedraw} />blue 2
            <input type="radio" bind:group={square.color} value="#FFED32" on:input={handleRedraw} />yellow
            1
            <input type="radio" bind:group={square.color} value="#B2A642" on:input={handleRedraw} />yellow
            2
        </div>
    {/each}
</div>

<style>
    pre {
        font-size: 6px;
    }
    input[type='number'] {
        width: 80px;
    }
</style>