<script>
    const projects = [
        {
            title: "Trouve Ton Sport",
            url: "https://www.trouvetonsport.com/",
            description: "Search engine for sport slots near your home. Filters by sport, age, sex, day, type of practice... With geolocation of nearby sports facilities.",
            image: {
                src: "/projects/trouve-ton-sport.webp",
                alt: "mobile mockups of 'Trouve Ton Sport'. Featuring the search results, the map and the filter panel."
            }
        },
        {
            title: "SlowLettuce",
            url: "https://slowlettuce.io/",
            description: "SlowLettuce is a small task force of digital natives that obsess over design. They covers both business strategy, UX UI design, and all your other product design essentials for the needs of early-stage tech startups.",
            image: {
                src: "/projects/slowlettuce.webp",
                alt: "homepage of the SlowLettuce website. Featuring 'Berlin's product design agency'.",
                class: "shadow"
            },
        },
        {
            title: "Bead weaving pattern editor",
            url: "https://www.trouvetonsport.com/",
            description: "Web app to create bead weaving bracelets and pins. Made specifically for Miyuki beads. More than 2000 Miyuki beads available for the patterns.",
            image: {
                src: "/projects/bead-weaving.webp",
                alt: "Bead weaving pattern editor. Featuring the Togepi pokemon",
                class: "shadow"
            }
        },
    ]
</script>

<h1>Past projects</h1>

<section>
    {#each projects as project}
        <h2>{project.title}</h2>
        <p>{project.description} <a href={project.url}>Link to the website</a>.</p>
        <img {...project.image} width="500" height="350" alt="">
    {/each}
</section>

<p>Want to see how we could work together? <a href="/services">See my services</a>.</p>

<style>
    img {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 32px auto 96px;
    }

    section :global(.shadow) {
        box-shadow: 0 0 10px #cecede, 0 0 30px #eaeafa;
    }
</style>