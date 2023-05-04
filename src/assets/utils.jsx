const encantamentos=[
[
    {"name":"Ataque","icon":"https://i.imgur.com/J6ZhMIz.png"},
    {"name":"Vitalidade","icon":"https://i.imgur.com/J6ZhMIz.png"},
    {"name":"Defesa Física","icon":"https://i.imgur.com/J6ZhMIz.png"},
    {"name":"Defesa Mágica","icon":"https://i.imgur.com/J6ZhMIz.png"}
],
[
    {"name":"Critico","icon":"https://i.imgur.com/HTIRAr5.png"},
    {"name":"Cdr","icon":"https://i.imgur.com/HTIRAr5.png"},
    {"name":"Vel. Ataque","icon":"https://i.imgur.com/HTIRAr5.png"},
    {"name":"Cdr Especial","icon":"https://i.imgur.com/HTIRAr5.png"}
],[
    {"name":"Aum dano hab","icon":"https://i.imgur.com/suqeqVI.png"},
    {"name":"Red dano rec hab","icon":"https://i.imgur.com/suqeqVI.png"},
    {"name":"Red dano rec atk","icon":"https://i.imgur.com/suqeqVI.png"},
    {"name":"Aum dano atk bas","icon":"https://i.imgur.com/suqeqVI.png"}
]
]
const subAtributos=[
    [
        {"name":"chance de ignorar defesa","icon":"https://i.imgur.com/J6ZhMIz.png"},
        {"name":"aumentar duração de debuffs em inimigos","icon":"https://i.imgur.com/J6ZhMIz.png"},
        {"name":"redução de duração de debuffs","icon":"https://i.imgur.com/J6ZhMIz.png"},
        {"name":"chance de defender crítico","icon":"https://i.imgur.com/J6ZhMIz.png"}
    ],
    [
        {"name":"aumentar dano em pvp","icon":"https://i.imgur.com/J6ZhMIz.png"},
        {"name":"redução de dano recebido em pvp","icon":"https://i.imgur.com/J6ZhMIz.png"}, 
        {"name":"aumentar dano causada à chefes","icon":"https://i.imgur.com/J6ZhMIz.png"}
    ],
    [
        {"name":"chance de crítico","icon":"https://i.imgur.com/J6ZhMIz.png"},
        {"name":"chance de defender crítico","icon":"https://i.imgur.com/J6ZhMIz.png"},
        {"name":"aumenta a cura recebida","icon":"https://i.imgur.com/J6ZhMIz.png"}
    ],
    [
        {"name":"aumentar dano crítico causado","icon":"https://i.imgur.com/J6ZhMIz.png"},
        {"name":"redução de dano crítico recebido","icon":"https://i.imgur.com/J6ZhMIz.png"},
        {"name":"aumentar a cura recebida","icon":"https://i.imgur.com/J6ZhMIz.png"}]
    ]
const espLvl=[
    {"name":"critico","icon":"https://i.imgur.com/BReDeIb.jpg"},
    {"name":"cdr","icon":"https://i.imgur.com/MHUtttJ.jpg"},
    {"name":"Velocidade de Ataque","icon":"https://i.imgur.com/we3ui4Q.jpg"},
    {"name":"reduzir dano recebido de ataque básico","icon":"https://i.imgur.com/X8gYS1g.jpg"},
    {"name":"reduzir dano recebido de habilidades","icon":"https://i.imgur.com/tyFwzRY.jpg"},
    {"name":"aumentar dano de ataque básico","icon":"https://i.imgur.com/Um2w7io.jpg"},
    {"name":"aumentar dano de habilidades","icon":"https://i.imgur.com/5luTYTd.jpg"},
    {"name":"aumentar dano ao ignorar defesa","icon":"https://i.imgur.com/2URP7xi.jpg"},
    {"name":"aumentar cura recebida","icon":"https://i.imgur.com/G84eQdu.jpg"}

]
const equipamentos=[
    {"name":"Força da Raiva","icon":"https://i.imgur.com/7wlMZNz.jpg"},
    {"name":"Pesar da Paixão", "icon":"https://i.imgur.com/cyj0AcV.jpg"},
    {"name":"Energia da Sorte","icon":"https://i.imgur.com/ZVyFN8x.jpg"},
    {"name":"Promessa da Fúria", "icon":"https://i.imgur.com/XFoGOLM.jpg"},
    {"name":"Vingança Sangrenta", "icon":"https://i.imgur.com/X6D8s3f.jpg"}
]
const accessorios=[
    [
    {"name":"cdr especial","icon":"https://i.imgur.com/dWXnJ8B.jpg"},
    {"name":"critico","icon":"https://i.imgur.com/NLO0k2L.jpg"},
    {"name":"Velocidade de ataque","icon":"https://i.imgur.com/EKJipcy.jpg"},
    {"name":"red dano rec atk bas","icon":"https://i.imgur.com/xHyoaBI.jpg"}
],
[
    {"name":"red dano rec hab","icon":"https://i.imgur.com/bcsQpN5.jpg"},
    {"name":"cdr","icon":"https://i.imgur.com/nzsrT6x.jpg"},
    {"name":"critico","icon":"https://i.imgur.com/9GTB9vU.jpg"},
    {"name":"cdr especial","icon":"https://i.imgur.com/4Sk6fOO.jpg"}

],
[
    {"name":"cdr","icon":"https://i.imgur.com/PfhAuFT.jpg"},
    {"name":"Velocidade de ataque","icon":"https://i.imgur.com/Ws4QRPf.jpg"},
    {"name":"red dano rec atk bas","icon":"https://i.imgur.com/XJga6Qp.jpg"},
    {"name":"red dano rec hab","icon":"https://i.imgur.com/JPlfUUA.jpg"}

]
]
const type={
    "guerreiro":"https://i.imgur.com/GcoK8Yh.png",
    "mago":"https://i.imgur.com/rdyCtKh.png",
    "guardião":"https://i.imgur.com/NoysvOs.png",
    "suporte":"https://i.imgur.com/EovI6WU.png",
    "atirador":"https://i.imgur.com/2EPUmgq.png"
}
const pets=[{"name": "Candy", "avatar": "https://i.imgur.com/4h32Tw7.png", "owner": "Lapis"}, {"name": "Nia", "avatar": "https://i.imgur.com/bx19nby.png", "owner": "Lin"}, {"name": "Sefira", "avatar": "https://i.imgur.com/H2GlvC4.png", "owner": "Cindy"}, {"name": "Hoya", "avatar": "https://i.imgur.com/FUIOzL6.png", "owner": "Jin Kaien"}, {"name": "Habek", "avatar": "https://i.imgur.com/UhI9PPd.png", "owner": "Harpe Noir"}, {"name": "Porco Dourado", "avatar": "https://i.imgur.com/6npq0eh.png", "owner": "Werner Burning Canyon"}, {"name": "Alto", "avatar": "https://i.imgur.com/dpyfcPF.png", "owner": "Myst"}, {"name": "Diangel", "avatar": "https://i.imgur.com/8BjhNkt.png", "owner": "Dio Burning Canyon"}, {"name": "Howl", "avatar": "https://i.imgur.com/Nn6WDnF.png", "owner": "Europa Júpiter"}, {"name": "Musa", "avatar": "https://i.imgur.com/KD54w4V.png", "owner": "Amy Plie"}, {"name": "Sin", "avatar": "https://i.imgur.com/5C6CSVO.png", "owner": "Asin Tairin"}, {"name": "Nar", "avatar": "https://i.imgur.com/CDR5PJo.png", "owner": "Esnar Din Canaban"}, {"name": "Tempy", "avatar": "https://i.imgur.com/pgw3kKo.png", "owner": "Ronan Erudon"}, {"name": "Hunt", "avatar": "https://i.imgur.com/1sYsKaj.png", "owner": "Ercnard Sieghart"}, {"name": "T-Con", "avatar": "https://i.imgur.com/YVcSgpM.png", "owner": "Mari Ming Ornette"}, {"name": "Nellion", "avatar": "https://i.imgur.com/wmDJaQM.png", "owner": "Nelia Ironwood"}, {"name": "Balor", "avatar": "https://i.imgur.com/msvTor6.png", "owner": "Callisto Júpiter"}, {"name": "Luche", "avatar": "https://i.imgur.com/3GWo709.png", "owner": "Caxias Grandiel"}, {"name": "Pion", "avatar": "https://i.imgur.com/XMT3gAy.png", "owner": "Tia"}, {"name": "Lirubi", "avatar": "https://i.imgur.com/43ZCAFW.png", "owner": "Lire Eruell"}, {"name": "Holy", "avatar": "https://i.imgur.com/NRCwBJI.png", "owner": "Lime Serenity"}, {"name": "Ruri", "avatar": "https://i.imgur.com/N8uY3yX.png", "owner": "Io Júpiter"}, {"name": "Armon", "avatar": "https://i.imgur.com/TU9ZPfe.png", "owner": "Arme Glenstid"}, {"name": "Dia", "avatar": "https://i.imgur.com/jnbIiBR.png", "owner": "Edel Frost"}, {"name": "Hwarang", "avatar": "https://i.imgur.com/O0g0cJh.png", "owner": "Myung Hwarin"}, {"name": "Ellion", "avatar": "https://i.imgur.com/ebSH99Q.png", "owner": "Elesis Sieghart"}, {"name": "Ellion (t)", "avatar": "https://i.imgur.com/0FHP8kS.png", "owner": "Elesis Sieghart(t)"}, {"name": "Seli", "avatar": "https://i.imgur.com/BtatoQ2.png", "owner": "Scarde Vi Serdin"}, {"name": "Lupin", "avatar": "https://i.imgur.com/KuRMAOY.png", "owner": "Lupus Wilde"}, {"name": "Montero", "avatar": "https://i.imgur.com/n0WgAFp.png", "owner": "Ryan Woodguard"}, {"name": "Sebastian", "avatar": "https://i.imgur.com/5krBsNR.png", "owner": "Rey von Crimson River"}, {"name": "Raul", "avatar": "https://i.imgur.com/6FZVamX.png", "owner": "Lass Isolet"}, {"name": "Zeta", "avatar": "https://i.imgur.com/h95WRFC.png", "owner": "Zero Zephyrum"}, {"name": "Croccel", "avatar": "https://i.imgur.com/EunAbYX.png", "owner": "Veigas Terrea"}, {"name": "Piunix", "avatar": "https://i.imgur.com/vCAvbtR.png", "owner": "Ragna"}, {"name": "Lirubi (t)", "avatar": "https://i.imgur.com/QIRUso1.png", "owner": "Lire Eruell(t)"}, {"name": "Armon (t)", "avatar": "https://i.imgur.com/VerY0Mt.png", "owner": "Arme Glenstid(t)"}]



const contentsT= [
"wb-1",
"wb-2",
"wb-3",
"wb-4",
"vulc-KTest-1",
"vulc-KTest-2",
"vulc-KTest-3",
"vulc-subj",
"atChefesLuta",
"fenda-1",
"fenda-2",
"fenda-3"]
const wb=[
    {
        "content_id": "wb",
        "name": "World Boss",
        "description": "Conteúdo de pontuação, onde você recompensas, de acordo com a pontuação(dano) total adquirida. Só é possível conseguir a recompensa 1 vez.",
        "image": "https://i.imgur.com/fRAflb7.png",
        "is_main": true,
        "is_children": false
    },
    {
        "content_id": "wb-1",
        "name": "World Boss - 1",
        "description":"Elemento:Punição <br/>Reduz dano mágico recebido em 80%",
        "image": "https://i.imgur.com/zOruvFd.png",
        "is_main": false,
        "is_children": "wb"
    },
 {
        "content_id": "wb-2",
        "name": "World Boss - 2",
        "description": "Elemento:Vida <br/>Reduz dano mágico recebido em 80%",
        "image": "https://i.imgur.com/cnd2XGO.png",
        "is_main": false,
        "is_children": "wb"
    },
 {
        "content_id": "wb-3",
        "name": "World Boss - 3",
        "description": "Elemento:Equilibrio <br/>Reduz dano físico recebido em 80%",
        "image": "https://i.imgur.com/0h6xVdc.png",
        "is_main": false,
        "is_children": "wb"
    },
 {
        "content_id": "wb-4",
        "name": "World Boss - 4",
        "description": "Elemento:Vida <br/>Reduz dano físico recebido em 80%",
        "image":"https://i.imgur.com/kDP9lk2.png",
        "is_main": false,
        "is_children": "wb"
    }

]
const vulc=[
    {"content_id": "vulc",
        "name": "Fornalha Infernal",
        "description": "Conteúdo de pontuação, onde você ganha recompensas, de acordo com seu desempenho. nesse conteúdo, você inicialmente vai desafiar alguns testes para conseguir um rank para depois desafiar o vulcanus",
        "image": "https://i.imgur.com/tB8AO3E.png",
        "is_main": true,
        "is_children": false,
    },
     {"content_id": "vulc-KTest-1",
        "name": "Fornalha Infernal - Teste do Cavaleiro 1",
        "description": "Elemento:Punição <br/>Teste voltado para matar vários inimigos, então, nesse caso personagens que conseguem lidar com vários alvos ou juntar mobs são bastante úteis",
        "image": "https://i.imgur.com/BkVyI5h.png",
        "is_main": false,
        "is_children": "vulc",
    },
    {"content_id": "vulc-KTest-2",
        "name": "Fornalha Infernal - Teste do Cavaleiro 2",
        "description": "Elemento:Vida <br/>Neste teste você vai precisar causar dano em um cavaleiro, enquanto, também precisa lidar com canhões que causam dano e paralisam. ",
        "image": "https://i.imgur.com/iaKTh1b.png",
        "is_main": false,
        "is_children": "vulc",
    },
    {"content_id": "vulc-KTest-3",
        "name": "Fornalha Infernal - Teste do Cavaleiro 3",
        "description": "Elemento:Equilibrio <br/>Neste teste, você vai ficar numa sala, com 4 torres, que ficam mudando de classe de tempos em tempos, e no meio da sala vão ficar surgindo inimigos. A tática nesse teste é ficar parado numa única torre, enquanto causa dano nela, e cuida dos inimigos que vão atrás de você.",
        "image": "https://i.imgur.com/ZnLPtP1.png",
        "is_main": false,
        "is_children": "vulc",
    },
    {"content_id": "vulc-subj",
        "name": "Fornalha Infernal - Teste do Cavaleiro - Subjugação",
        "description": "Elemento:Cada nível tem um elemento diferente <br/>esta fase só fica dispónivel para quem se classificou através dos testes do cavaleiro, e nela você precisa enfrentar o vulcanus em várias lutas( 12 no máximo, recompensas semanais até o lvl 8),e para cada luta(lvl) da modo, os status do vulcanus, e também a forma que ele ataca mudam.",
        "image": "https://i.imgur.com/R0FEzUl.png",
        "is_main": false,
        "is_children": "vulc",
    },
    ]

const BossAssault=[
    {
            "content_id": "atChefes",
            "name": "Ataque aos Chefes",
            "description": "Elemento:Você pode escolher o elemento com qual você lutará <br/>modo de jogo onde você adquire materiais para aprimorar acessórios",
            "image": "https://i.imgur.com/B1I7rJL.png",
            "is_main": true,
            "is_children": false
        },
    {
            "content_id": "atChefesLuta",
            "name": "Ataque aos Chefes_Luta",
            "description": "Você vai poder escolher entre certos chefes para lutar. tente escolher chefes que você tenha vantagem elemental.",
            "image": "https://i.imgur.com/ZBgrB17.png",
            "is_main": false,
            "is_children": "atChefes"
        },
    
    ]
const fenda=[
    {
            "content_id": "fenda",
            "name": "fenda",
            "description": "Conteúdo para conseguir material para construção de sub-arma. Você vai ter de desafiar 3 salas, cada uma com um elemento diferente e diversos monstros. Como é um conteúdo de pontuação, o seu desempenho vai garantir recompensas extras. Você pode usar o mesmo time em todas as salas.",
            "image": "https://i.imgur.com/hpOhZId.png",
            "is_main": true,
            "is_children": false
        },
    {
            "content_id": "fenda-1",
            "name": "fenda sala 1",
            "description": "Elemento:Punição <br/>Use de preferência personagens do atributo equilibrio que tem vantagem elemental.",
            "image": "https://i.imgur.com/JU0sdXa.png",
            "is_main": false,
            "is_children": "fenda"
        },
    
    {
            "content_id": "fenda-2",
            "name": "fenda sala 2",
        "description": "Elemento:Vida <br/>Use de preferência personagens do atributo punição que tem vantagem elemental.",
            "image": "https://i.imgur.com/n63sM82.png",
            "is_main": false,
            "is_children": "fenda"
        },
    
    {
            "content_id": "fenda-3",
            "name": "fenda sala 3",
            "description": "Elemento:Equilibrio <br/>Use de preferência personagens do atributo vida que tem vantagem elemental.",
            "image": "https://i.imgur.com/8OCXKyd.png",
            "is_main": false,
            "is_children": "fenda"
        },
    ]
    const secret="0e539c8ea6b6d52ad5611e5a502d4a8aa53cd09e"
export {contentsT,encantamentos,subAtributos,espLvl,equipamentos,accessorios,type,wb,vulc,BossAssault,fenda,pets}