export default [
    {
        name: "Backend",
        stack: [
            {
                icon: "typescript",
                name: "Typescript",
                customIcon: false,
            },
            {
                icon: "javascript",
                name: "Javascript",
                customIcon: false,
            },
            {
                icon: "devicon-express-original",
                customIcon: true,
                name: "ExpressJS",
            },
            {
                icon: "bun",
                name: "Bun",
                customIcon: false,
            },
            {
                icon: "nodejs",
                name: "NodeJS",
                customIcon: false,
            },
            {
                icon: "sqlite",
                name: "SQLite",
                customIcon: false
            },
            {
                name: "MongoDB",
                icon: "mongodb",
                customIcon: false
            },
            {
                name: "DiscordJS",
                icon: "discordjs",
                customIcon: false
            }
        ],
    },
    {
        name: "Frontend",
        stack: [
            {
                icon: "astro",
                name: "Astro",
                customIcon: false,
            },
            {
                icon: "devicon-tailwindcss-original",
                customIcon: true,
                name: "TailwindCSS"
            },
            {
                icon: "html5",
                name: "HTML",
                customIcon: false
            },
            {
                icon: "css3",
                name: "CSS",
                customIcon: false
            },
            {
                name: "Figma",
                icon: "figma",
                customIcon: false
            },
            {
                name: "Bootstrap",
                icon: "bootstrap",
                customIcon: false
            }
        ]
    },
    {
        name: "DevOps",
        stack: [
            {
                icon: "docker",
                name: "Docker",
                customIcon: false,
            },
            {
                icon: "git",
                name: "Git",
                customIcon: false,
            },
            {
                icon: "github",
                name: "Github",
                customIcon: false,
            },
            {
                icon: "linux",
                name: "Linux",
                customIcon: false,
            },
            {
                icon: "nginx",
                name: "NGINX",
                customIcon: false,
            },
        ],
    },
    {
        name: "Learning",
        stack: [
            {
                icon: "cplusplus",
                name: "C++",
                customIcon: false,
            },
            {
                icon: "java",
                name: "Java",
                customIcon: false,
            },
            {
                icon: "rust",
                name: "Rust",
                customIcon: false,
            },
        ],
    },
] as const;