async function getBaseEmail(senderName : string) :Promise<string> {
    let base = await getHeaderText()

    base += ` olá ${senderName}, gostaria de me inscrever para uma vaga`;
    base += "\n estou deixando o meu currículo";
    return base;
}

async function getHeaderText(): Promise<string> {
    return "EMAIL PRA VOCE"
}

export {getBaseEmail};