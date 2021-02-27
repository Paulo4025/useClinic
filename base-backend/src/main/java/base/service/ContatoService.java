package base.service;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.contato.impl.ContatoManagerImpl;
import core.model.dto.InserirContatoDto;
import core.model.dto.MensagemDto;

@Path("/contatoService")
public class ContatoService {
	@POST
	@Path("/gerenciarContatoPessoa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<MensagemDto> gerenciarContatoPessoa(InserirContatoDto contactDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new ContatoManagerImpl().gerenciarContatoPessoa(contactDto);
	}
}
