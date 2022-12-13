export default {
    title: "Cris Rocha",
    description: "Desenvolvedora FrontEnd com foco em Vue.js e React.js",
    socialMedia: [
        // {
        //     id: 1,
        //     name: "Facebook",
        //     path: "http://github.com/crisrochadev",
        //     icon: "fab fa-facebook"
        // },
        {
            id: 2,
            name: "Linkedin",
            path: "http://linkedin.com/in/crisrochadev",
            icon: "fab fa-linkedin"
        },
        {
            id: 3,
            name: "GitHub",
            path: "http://github.com/crisrochadev",
            icon: "fab fa-github"
        },
        {
            id: 4,
            name: "Email",
            path: "#contato",
            icon: "far fa-envelope"
        }
    ],
    menu: [
        {
            id: 1,
            name: 'inicio',
            path: ''
        },
        {
            id: 2,
            name: 'sobre',
            path: '#sobre'
        },
        {
            id: 3,
            name: 'conhecimentos',
            path: '#conhecimentos'
        },
        {
            id: 4,
            name: 'projetos',
            path: '#projetos'
        },
        {
            id: 5,
            name: 'contato',
            path: '#contato'
        }
    ],
    pages: [
        {
            id: 1,
            type: "home",
            children: [
                {
                    id: 1,
                    type: "hero",
                    buttons: [
                        {
                            id: 1,
                            url: "https://sweetcode.com.br",
                            label: "Veja os Projetos"
                        },
                        {
                            id: 2,
                            url: "https://vidara.website",
                            label: "Fale comigo",
                        }
                    ]
                },
                {
                    id: 2,
                    type: "about",
                    title: "Olá, eu sou a Cris!",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper ultricies vestibulum. Donec eleifend arcu quis eros sollicitudin posuere. Cras magna neque, faucibus quis mattis at, commodo eget purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque non erat nunc. Mauris vitae felis sem. ",
                    buttons: [
                        {
                            id: 1,
                            url: "https://sweetcode.com.br",
                            label: "Veja os Projetos"
                        },
                        {
                            id: 2,
                            url: "https://vidara.website",
                            label: "Fale comigo",
                        }
                    ]
                }
            ]
        }
    ]
}