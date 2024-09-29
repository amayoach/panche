<script lang="ts">
    import socials from "$lib/data/socials";
    import projects from "$lib/data/projects";
    import InlineLink from "$lib/components/InlineLink.svelte";
    import PhArrowUpRightBold from "~icons/ph/arrow-up-right-bold";
    import PhArrowRightBold from "~icons/ph/arrow-right-bold";
    import RiDiscordFill from "~icons/ri/discord-fill";
    import SimpleIconsPython from "~icons/simple-icons/python";
    import SimpleIconsFastapi from "~icons/simple-icons/fastapi";
    import SimpleIconsSvelte from "~icons/simple-icons/svelte";
    import SimpleIconsTailwindcss from "~icons/simple-icons/tailwindcss";
    import Button from "$lib/components/Button.svelte";

    let dim: boolean;
    $: dim = false;

    const enableDim = () => {
        dim = true;
    };
    const disableDim = () => {
        dim = false;
    };
</script>

<svelte:head>
    <title>Johanna Amaya-Panche</title>
</svelte:head>

<div class="min-h-screen lg:max-w-screen-xl block m-auto p-5 lg:py-0">
    <!-- Main Page -->
    <div
        class="lg:flex lg:justify-between lg:items-start pt-10 lg:pt-0 transition-all"
    >
        <!-- Sidebar -->
        <header
            class="lg:top-0 lg:py-24 lg:sticky flex justify-between items-center lg:h-screen lg:w-1/2 transition-all"
        >
            <!-- Profile -->
            <div class="flex flex-col justify-start items-start m-auto">
                <div class="flex justify-start items-center gap-x-2">
                    <div class="flex flex-col justify-center items-start">
                        <h1 class="font-semibold text-4xl lg:text-5xl">
                            Johanna <br /> Amaya-Panche
                        </h1>
                        <p class="text-lg text-slate-200 font-base">
                            Scholar in International Relations <br /> and Political
                            Science
                        </p>
                        <img
                            style="max-height: 500px; border-radius:2px; padding-top: 20px;"
                            src="project/img.PNG"
                            alt=""
                        />
                    </div>
                </div>
                <p class="text-slate-400 mt-2 lg:max-w-sm"></p>

            <!-- Socials -->
            <div class="flex justify-start items-center gap-x-4 mt-1">
                {#each Object.entries(socials) as [name, data]}
                    <a
                        href={data.url}
                        target="_blank"
                        title={name}
                        class="text-slate-400 hover:text-slate-100 transition-colors duration-200"
                    >
                        <svelte:component this={data.icon} class="size-8" />
                    </a>
                {/each}
            </div>
            </div>
        </header>
        <!-- Content -->
        <main class="lg:py-24 mt-10 lg:mt-0 lg:w-1/2 transition-all">
            <!-- About -->
            <section aria-label="About Me">
                <h1 class="text-xl font-semibold visible">
                    ABOUT ME
                </h1>
                <p class="text-slate-400 mt-2">
                    I am a Postdoctoral Researcher at the University of
                    Edinburgh. Before that, I was a Lecturer in Latin American
                    Politics at the Institute of the Americas and served as the
                    Director of the Master's Program in Latin American Studies
                    at University College London. Additionally, I am a member of
                    the Conflict & Change Cluster within the UCL Department of
                    Political Science. In 2023, I earned my PhD in Government
                    from the University of Essex in the United Kingdom. I have a
                    Master of Research in Latin American Studies and a Bachelor
                    of Honours in Political Science and International Relations
                    from Pontificia Universidad Javeriana in Colombia.
                    
                </p>
            </section>
            <!-- Projects -->
            <section aria-label="Projects" class="mt-10">
                <h1 class="text-xl font-semibold visible lg:hidden">
                    PROJECTS
                </h1>
                <div class="mt-2 flex flex-col gap-y-5">
                    <!-- {#each Object.entries(projects) as [name, data]}
                        <a
                            href={data.url}
                            target="_blank"
                            class="hover:bg-slate-800 hover:!opacity-100 rounded-lg p-2 transition-all duration-200 group"
                            on:mouseenter={enableDim}
                            on:mouseleave={disableDim}
                            class:opacity-50={dim}
                        >
                            <div
                                class="flex flex-col md:flex-row justify-start items-center md:items-start gap-y-4 md:gap-y-0 md:gap-x-4"
                            >
                                <img
                                    src={data.img}
                                    alt={name}
                                    class="rounded-lg object-cover border-2 border-slate-800 md:h-24 md:w-48"
                                />
                                <div
                                    class="flex flex-col justify-center items-start"
                                >
                                    <div
                                        class="w-full flex justify-between items-center"
                                    >
                                        <div
                                            class="flex justify-start items-center gap-x-1"
                                        >
                                            <h2 class="text-lg font-semibold">
                                                {name}
                                            </h2>
                                            <PhArrowUpRightBold
                                                class="size-4 group-hover:translate-x-2 group-hover:-translate-y-0.5 transition-transform"
                                            />
                                        </div>
                                        <p
                                            class="text-slate-400 text-sm font-semibold"
                                        >
                                            {data.time}
                                        </p>
                                    </div>
                                    <p class="text-slate-400 mt-2">
                                        {data.desc}
                                    </p>
                                    <div
                                        class="flex flex-wrap justify-start items-center gap-2 mt-2"
                                    >
                                        {#each data.tags as tag}
                                            <span
                                                class=" bg-slate-100 text-slate-950 text-xs rounded-lg px-2 py-1"
                                                >{tag}</span
                                            >
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </a>
                    {/each} -->
                </div>
            </section>
            <!-- More Projects -->
            <!-- <footer class="mt-10 w-fit">
                <InlineLink
                    href="{socials.GitHub.url}?tab=repositories"
                    class="flex justify-start items-center gap-x-1 group"
                >
                    <span>Get more projects here</span>
                    <PhArrowRightBold
                        class="size-4 group-hover:translate-x-2 transition-transform"
                    />
                </InlineLink>
            </footer> -->
        </main>
    </div>
</div>
