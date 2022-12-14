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
                },
                {
                    id: 3,
                    type: "acquirements",
                    title: "Saiba um pouco sobre meus conhecimentos!",
                    description: "Apesar de eu estar sempre me aprofundando em conhecimentos voltados a programação e também amar desenvolver no backend, meu foco principal é o frontend, mas precisamente javascript, onde eu tenho maior afinidade e dessa forma posso entregar trabalhos com qualidade!",
                    cards:[
                        {
                            id:1,
                            title:"HTML",
                            level:95,
                            icon:"html",
                            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod cum eveniet quibusdam mollitia? Ullam vitae possimus quisquam, beatae sunt blanditiis, delectus alias excepturi odio, voluptatum unde ipsa. Harum, deserunt!"
                        },
                        {
                            id:2,
                            title:"CSS",
                            level:85,
                            icon:"css",
                            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod cum eveniet quibusdam mollitia? Ullam vitae possimus quisquam, beatae sunt blanditiis, delectus alias excepturi odio, voluptatum unde ipsa. Harum, deserunt!"
                        },
                        {
                            id:3,
                            title:"Javascript",
                            level:80,
                            icon:"js",
                            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod cum eveniet quibusdam mollitia? Ullam vitae possimus quisquam, beatae sunt blanditiis, delectus alias excepturi odio, voluptatum unde ipsa. Harum, deserunt!"
                        },
                        {
                            id:4,
                            title:"Vue",
                            level:95,
                            icon:"vue",
                            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod cum eveniet quibusdam mollitia? Ullam vitae possimus quisquam, beatae sunt blanditiis, delectus alias excepturi odio, voluptatum unde ipsa. Harum, deserunt!"
                        },
                        {
                            id:5,
                            title:"React",
                            level:80,
                            icon:"react",
                            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod cum eveniet quibusdam mollitia? Ullam vitae possimus quisquam, beatae sunt blanditiis, delectus alias excepturi odio, voluptatum unde ipsa. Harum, deserunt!"
                        },
                        {
                            id:6,
                            title:"NextJs",
                            level:60,
                            icon:"next",
                            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod cum eveniet quibusdam mollitia? Ullam vitae possimus quisquam, beatae sunt blanditiis, delectus alias excepturi odio, voluptatum unde ipsa. Harum, deserunt!"
                        },
                        {
                            id:7,
                            title:"Tailwind",
                            level:85,
                            icon:"tailwind",
                            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod cum eveniet quibusdam mollitia? Ullam vitae possimus quisquam, beatae sunt blanditiis, delectus alias excepturi odio, voluptatum unde ipsa. Harum, deserunt!"
                        },
                        {
                            id:8,
                            title:"PHP",
                            level:45,
                            icon:"php",
                            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quod cum eveniet quibusdam mollitia? Ullam vitae possimus quisquam, beatae sunt blanditiis, delectus alias excepturi odio, voluptatum unde ipsa. Harum, deserunt!"
                        },
                    ],
                    buttons:[
                        {
                            id:1,
                            label:"Veja meu perfil no GitHub",
                            icon:"fab fa-github",
                            path:"https://github.com/crisrochadev"
                        }
                    ]
                },
                {
                    id:5,
                    type:"projects",
                    title:"Veja os projetos recentes!",
                    description: "Apesar de eu estar sempre me aprofundando em conhecimentos voltados a programação e também amar desenvolver no backend, meu foco principal é o frontend, mas precisamente javascript, onde eu tenho maior afinidade e dessa forma posso entregar trabalhos com qualidade!",
                    projects:[
                        {
                            id:1,
                            title:'Apesar de eu estar',
                            tags:['php','html','css'],
                            thumb:'banner_light.png',
                            link:'/apesar-de-eu-estar'
                        },
                        {
                            id:2,
                            title:'Apesar de eu estar',
                            tags:['js','html','css'],
                            thumb:'banner_light.png',
                            link:'/apesar-de-eu-estar'
                        },
                        {
                            id:3,
                            title:'Apesar de eu estar',
                            tags:['react','html','css'],
                            thumb:'banner_light.png',
                            link:'/apesar-de-eu-estar'
                        },
                        {
                            id:4,
                            title:'Apesar de eu estar',
                            tags:['vue','html','css'],
                            thumb:'banner_light.png',
                            link:'/apesar-de-eu-estar'
                        },
                        {
                            id:5,
                            title:'Apesar de eu estar',
                            tags:['next','html','css'],
                            thumb:'banner_light.png',
                            link:'/apesar-de-eu-estar'
                        },
                        {
                            id:5,
                            title:'Apesar de eu estar',
                            tags:['html','css'],
                            thumb:'banner_light.png',
                            link:'/apesar-de-eu-estar'
                        }
                    ]
                },
                {
                    id:6,
                    type:"contact",
                    title:"Entre em contato comigo!",
                    description: "Existem algumas formas pelas quais podemos conversar, se você tem um projeto a ser desenvolvido, recomento que preencha o formulário abaixo, dessa forma agilizamos o processo!",
                    description2:"Se preferir pode entrar em contato pelos seguintes canais de relacionamento.",
                    buttons:[
                        {
                            id:1,
                            label:'email',
                            icon:'far fa-envelope',
                            link:'crisrocha.dev@gmail.com',
                            type:'icon'
                        },
                        {
                            id:2,
                            label:'whatsapp',
                            icon:'whatsapp',
                            type:'element',
                            link:'https://wa.me/5547992321879?text=Ol%C3%A1%2C+vamos+conversar+sobre+um+projeto+front-end%3F'
                        }
                    ]
                }
            ]
        }
    ]
}