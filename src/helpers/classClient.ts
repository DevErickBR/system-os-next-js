class Cliente {
    idCliente: number | null
    nomeCliente: string
    telefoneCliente: string
    idTipoDocumento: number
    documentoCliente: string
    emailCliente: string | ""

    constructor(idCliente: number | null, nomeCliente: string, telefoneClient: string, idTipoDocumento: number, documentoCliente: string, emailCliente: string) {
        this.idCliente = idCliente;
        this.nomeCliente = nomeCliente;
        this.telefoneCliente = telefoneClient;
        this.idTipoDocumento = idTipoDocumento;
        this.documentoCliente = documentoCliente;
        this.emailCliente = emailCliente
    }
}

export default Cliente;