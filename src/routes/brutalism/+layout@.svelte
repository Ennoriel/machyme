<script>
	import "./base.css";
</script>

<main>
    <slot/>
</main>

<style>
    @font-face {
        font-family: 'Black Ops One';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/black-ops-one.woff2') format('woff2');
    }
    main {
        font-family: 'Black Ops One', sans-serif;
    }
</style>
