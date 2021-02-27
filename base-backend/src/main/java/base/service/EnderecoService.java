package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.endereco.impl.EnderecoManagerImpl;
import core.model.dto.EnderecoDto;
import core.model.dto.MensagemDto;

@Path("/enderecoService")
public class EnderecoService {
	@POST
	@Path("/gerenciarEnderecoPessoaNatural")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto gerenciarEnderecoPessoaNatural(EnderecoDto enderecoDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new EnderecoManagerImpl().inserirEndereco(enderecoDto);
	}
}
