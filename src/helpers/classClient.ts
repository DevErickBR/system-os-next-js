class Cliente {
    nomeCliente: string
    telefoneCliente: string
    idTipoDocumento: number
    documentoCliente: string
    emailCliente: string | ""

    constructor(nomeCliente: string, telefoneClient: string, idTipoDocumento: number, documentoCliente: string, emailCliente: string) {
        this.nomeCliente = nomeCliente;
        this.telefoneCliente = telefoneClient;
        this.idTipoDocumento = idTipoDocumento;
        this.documentoCliente = documentoCliente;
        this.emailCliente = emailCliente
    }
}

export default Cliente;