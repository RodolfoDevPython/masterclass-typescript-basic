interface IMailTo {
    name: string,
    email: string
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: Array<string> // passei ? para falar que é opcional -- Array<string> é igual a string[]
}

//Data Transfer Object(DDD)
interface IMessageDTO {
    to: IMailTo, 
    message: IMailMessage
}

//craindo um modelo para minha classe
interface IEmailServide {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailServide {
    
    constructor() {
        this.sendMail
    }

    //foi feito dessa forma para deixar os types com atributos nomeados
    sendMail({ to, message }: IMessageDTO ) {
        console.log(`Email enviado para ${to.email}: ${message.subject}`)
    }

}

export default EmailService