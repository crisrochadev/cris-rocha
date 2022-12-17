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
            path: '#inicio'
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
                    description: "Sou uma mulher apaixonada por programção, estudante de Engenharia de Software, que vive em uma cidade pequena de Santa Catarina, casada e com 3 filhos. Trabalho como programadora a quase 1 ano, mas desenvolvo minhas habilidades a muito mais tempo. Estou sempre buscando evoluir e aprimorar meus conhecimentos.</br> Na seção conhecimentos eu passo mais detalhes, sobre tudo que aprendi, e em prjetos você poderá ver onde e como tenho aplicado tudo isso. Como disse já trabalho como desenvolvedora, amo o que faço, amo tanto que estendo aqui as possibilidades. Quer saber mais sobre mim? Clica em um dos icones aqui abaixo, e acesse minhas redes sociais.",
                    buttons: [
                        {
                            id: 1,
                            url: "https://linkedin.com/in/crisochadev",
                            icon: "fab fa-linkedin"
                        },
                        {
                            id: 2,
                            url: "https://github.com/crisrochadev",
                            label: "fab fa-github",
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
                            description:"Ah o HTML o que seria o desenvolvimento web sem ele? Uma página bem estruturada, com boa semântica faz uma grande diferença na otimização de sum site. E esse conhecimento eu tenho de sobra, por que seja usando um framework ou não, o html precisa ser trabalhado com sabedoria."
                        },
                        {
                            id:2,
                            title:"CSS",
                            level:85,
                            icon:"css",
                            description:"Agora o CSS é a beleza da coisa toda! Uma página bonita bem exibida, com cada coisa no seu devido lugar, atração para os olhos? É com essa belezura do css que coseguimos, e eu amo, por isso sou desenvolvedora front-end, Sei muito sobre o assunto, e por isso posso aplicar e usar qualquer framework de ui, com facilidade!"
                        },
                        {
                            id:3,
                            title:"Javascript",
                            level:80,
                            icon:"js",
                            description:"Meu primeiro amor em programação, você sabe quanta coisa da pra fazer com ele?Web, mobile e desktop, e claro que eu ja fiz todas essas coisas. Async, await, poo, map, filter, slice, splice, replace, export, import... São lindas palavras não são?"
                        },
                        {
                            id:4,
                            title:"Vue",
                            level:95,
                            icon:"vue",
                            description:"Vue.js chegou obrigado na minha vida, por um demanda que precisei atender, e até hoje me pergunto porque não tinha pensado nele antes. Sem duvida é o meu top 1 em framework javascript até o momento, como podemos integrá-lo em mais diversas aplicações web me facinam. Tá aí uma otima opção para seu projeto!"
                        },
                        {
                            id:5,
                            title:"React",
                            level:80,
                            icon:"react",
                            description:"O primeira biblioteca javascript que aprendi, o queridinho do momento. Com muitas possibilidades à mesa, o react é um otima solução quando se trata de desenvolvimento web, eu amo todas como é fácil desenvolver o front-end de sites e e-commerces com react. Você vai vai ver o que já fiz com ele na sessão abaixo."
                        },
                        {
                            id:6,
                            title:"NextJs",
                            level:60,
                            icon:"next",
                            description:"Next! Sem duvida necessário! Olha só, vamos dizer que você só tenha seu banco de dados, e precisa de um front-end e um back-end, para desenvolver sua aplicação, next é a tecnologia facinante que pode sim atender esses quesitos. Com renderização do lado servidor e muitas outras possibilidades, você deveria testar."
                        },
                        {
                            id:7,
                            title:"Tailwind",
                            level:85,
                            icon:"tailwind",
                            description:"Uma biblioteca de interface de usuário, utilizada inclusive nesse portifólio, facilica a vida, evitando a escrita de tanto codigo css, e ainda não nos prende a componentes prontos. Uma boa opção para desenhar as telas no front-end."
                        },
                        {
                            id:8,
                            title:"PHP",
                            level:45,
                            icon:"php",
                            description:"Php foi a linguagem pela qual aprendi a lógica muito tempo atrás, acabei seguindo outros caminhos, e esse ano decidi me dedicar a essa linguagem especializada para web, me especializar, e dominar essa linguagem é meu objetivo. Em breve essa descrição será atualizada!"
                        },
                    ],
                    buttons:[
                        {
                            id:1,
                            label:"Veja meu perfil no GitHub",
                            icon:"fab fa-github",
                            url:"https://github.com/crisrochadev"
                        }
                    ]
                },
                {
                    id:5,
                    type:"projects",
                    title:"Veja os projetos recentes!",
                    description: "Aqui você encontra as minhas paixões, os projetos a quais dediquei algum tempo, são projetos pessoais, mas você pode analizar cada um deles, e descobrir mais sobre minhas habilidades.",
                    projects:[
                        {
                            id:1,
                            title:'sweet Code',
                            tags:['next','react','tailwind'],
                            thumb:'sweet-code.jpg',
                            link:'/sweet-code'
                        },
                        {
                            id:2,
                            title:'OCC Grid System',
                            tags:['js','html','css'],
                            thumb:'occ.png',
                            link:'/occ-grid-system'
                        },
                        {
                            id:2,
                            title:'Esse Portifolio',
                            tags:['vue','tailwind'],
                            thumb:'cris-rocha.png',
                            link:'/cris-rocha'
                        },
                    ]
                },
                {
                    id:6,
                    type:"contact",
                    title:"Entre em contato comigo!",
                    description: "Existem algumas formas pelas quais podemos conversar, se você tem um projeto a ser desenvolvido, recomendo que preencha o formulário abaixo, dessa forma agilizamos o processo!",
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
    ],
    projects:[
        {
            name:'sweet-code',
            title:'Sweet Code Blog de tecnologia',
            link:'https://sweetcode.com.br',
            description:'escrever uma descrição',
            images:[
                {
                    title:'imagem 1',
                    src:'sweet-code.jpg'
                },
                {
                    title:'imagem 1',
                    src:'https://occgridsystem.cf/img/hero_img.png'
                },
                {
                    title:'imagem 2',
                    src:'https://occgridsystem.cf/img/mobile.png'
                },
            ]
        },
        {
            name:'occ-grid-system',
            title:'OCC Grid System, sistema de grid para desenvolvimento web.',
            link:'https://occgridsystem.cf',
            description:'escrever uma descrição',
            images:[
                {
                    title:'imagem 1',
                    src:'occ.png'
                },
                {
                    title:'imagem 2',
                    src:'occ-full.png'
                },
                {
                    title:'imagem 2',
                    src:'https://occgridsystem.cf/img/mobile.png'
                },
            ]
        },
        {
            name:'cris-rocha',
            title:'Cris Rocha portifólio pessoal',
            link:'https://crisrocha.sweetcode.com.br',
            description:'escrever uma descrição',
            images:[
                {
                    title:'imagem 1',
                    src:'cris-rocha.png'
                },
                {
                    title:'imagem 2',
                    src:'occ-full.png'
                },
                {
                    title:'imagem 2',
                    src:'https://occgridsystem.cf/img/mobile.png'
                },
            ]
        }
    ]
}