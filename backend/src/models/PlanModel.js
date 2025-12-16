class PlanModel {
    static plans = {
        ansiedade: [
            {
                dia: 1,
                versiculo: "Filipenses 4:6-7",
                resumo: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus.",
                tarefa: "Reserve um tempo hoje para orar sobre suas ansiedades e entregar suas preocupações a Deus."
            },
            {
                dia: 2,
                versiculo: "Mateus 6:34",
                resumo: "Portanto, não se preocupem com o amanhã, pois o amanhã trará suas próprias preocupações. Basta a cada dia o seu próprio mal.",
                tarefa: "Pratique viver um dia de cada vez, focando no presente e confiando que Deus cuidará do futuro."
            },
            {
                dia:3,
                versiculo: "1 Pedro 5:7",
                resumo: "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
                tarefa: "Escreva suas ansiedades em um papel e simbolicamente entregue-as a Deus, confiando em Seu cuidado."
            }            
        ],
        gratidao: [
            {
                dia: 1,
                versiculo: "Salmos 107:1",
                resumo: "Dêem graças ao Senhor, porque ele é bom; o seu amor dura para sempre.",
                tarefa: "Liste três coisas pelas quais você é grato hoje e agradeça a Deus por elas."
            },
            {
                dia: 2,
                versiculo: "1 Tessalonicenses 5:18",
                resumo: "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.",
                tarefa: "Encontre algo positivo em uma situação desafiadora que você está enfrentando e agradeça a Deus por essa perspectiva."
            },
            {
                dia: 3,
                versiculo: "Salmos 118:24",
                resumo: "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.",
                tarefa: "Celebre o dia de hoje com alegria, reconhecendo que é um presente de Deus."
            }
        ],
        lideranca: [
            {
                dia: 1,
                versiculo: "Provérbios 11:14",
                resumo: "Onde não há conselho, o povo cai; mas na multidão de conselheiros há segurança.",
                tarefa: "Busque conselhos sábios de mentores ou colegas sobre um desafio de liderança que você está enfrentando."
            },
            {
                dia: 2,
                versiculo: "Tiago 1:5",
                resumo: "Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá livremente, de boa vontade; e lhe será concedida.",
                tarefa: "Ore por sabedoria em suas decisões de liderança hoje, confiando que Deus o guiará."
            },
            {
                dia: 3,
                versiculo: "Filipenses 2:3-4",
                resumo: "Nada façam por ambição egoísta ou vaidade, mas humildemente considerem os outros superiores a vocês mesmos. Cada um cuide, não somente dos seus interesses, mas também dos interesses dos outros.",
                tarefa: "Pratique a humildade em sua liderança, colocando as necessidades de sua equipe acima das suas."
            }
        ],
        default: [
            {
                dia: 1,
                versiculo: "Salmos 23:1",
                resumo: "O Senhor é o meu pastor; de nada terei falta.",
                tarefa: "Confie em Deus para suprir todas as suas necessidades hoje."
            },
            {
                dia: 2,
                versiculo: "Isaías 41:10",
                resumo: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
                tarefa: "Lembre-se de que Deus está com você em todos os momentos, oferecendo força e ajuda."
            },
            {
                dia: 3,
                versiculo: "Romanos 8:28",
                resumo: "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados segundo o seu propósito.",
                tarefa: "Confie que Deus está trabalhando em todas as áreas da sua vida para o seu bem."
            }
        ]
    }

    static generatePlan(theme) {
        if(this.plans[theme]) {
            return this.plans[theme]
        }
        return this.plans['default']
    }
}

module.exports = PlanModel;