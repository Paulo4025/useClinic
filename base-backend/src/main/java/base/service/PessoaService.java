package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.pessoa.impl.PessoaManagerImpl;
import core.model.dto.ConsultaPessoaNaturalRespostaDto;
import core.model.dto.ConsultarPerfilPessoaNaturalDto;
import core.model.dto.MensagemDto;
import core.model.dto.PersonNaturalDto;

@Path("/pessoaService")
public class PessoaService {

	@POST
	@Path("/gerenciarPessoaNatural")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto managerPersonNaturalUseClinic(PersonNaturalDto personNaturalDto) {
		return new PessoaManagerImpl().gerenciarPessoaNatural(personNaturalDto);
	}

	@POST
	@Path("/consultarPessoaNatural")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ConsultaPessoaNaturalRespostaDto consultarPessoaNaturalPerfil(
			ConsultarPerfilPessoaNaturalDto consultarPerfilPessoaNaturalDto) {
		return new PessoaManagerImpl().consultarPessoaNaturalPerfil(consultarPerfilPessoaNaturalDto);
	}
}
