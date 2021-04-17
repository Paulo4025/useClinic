package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.pessoa.impl.PessoaManagerImpl;
import core.model.dto.MensagemDto;
import core.model.dto.PersonNaturalDto;

@Path("/funcionarioService")
public class FuncionarioService {

	@POST
	@Path("/inserirFuncionario")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto managerPersonNaturalUseClinic(PersonNaturalDto personNaturalDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new PessoaManagerImpl().gerenciarPessoaNatural(personNaturalDto);
	}
}
