package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.documento.impl.DocumentoManagerImpl;
import core.model.dto.DocumentoDto;
import core.model.dto.MensagemDto;

@Path("/documentoService")
public class DocumentoService {

	@POST
	@Path("/gerenciarImagemPerfilPessoa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto gerenciarImagemPerfilPessoa(DocumentoDto documentoDto) {
		return new DocumentoManagerImpl().gerenciarImagemPerfilPessoaNatural(documentoDto);
	}
}
