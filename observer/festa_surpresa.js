const readline = require('readline')

function obterResposta (pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    });
}
//observer
function namorada () {
    console.log(`N: Apagar as luzes`)
    console.log(`N: Pedir silencio`)
    console.log(`N: Surpessa!!!`)
}

//observer
function sindico (evento) {
    console.log(`S: Monitorando o barulho`)
    console.log(`S: evento --> ${evento.resposta}`)
    console.log(`S: evento --> ${evento.data}`)

}

//subject
async function porteiro (...interessados) {
    while (true) {
        const resp = await obterResposta(`O namardo chegou? (s/N/q)`)
        if (resp.toLowerCase() === `s`)
            interessados.forEach(obs => obs({resposta: resp, data: new Date()}))
        else if (resp.toLowerCase() === `q`) {
            break
        }
    }
}

/**
 * Chamadas da funcao -> Registrado dois observadores
 * Os abservadores sao: namorado e sindico
 * O subject eh o porteiro
 */
porteiro(namorada, sindico)
