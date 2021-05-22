package base.service;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.contato.impl.ContatoManagerImpl;
import core.model.dto.InserirContatoDto;
import core.model.dto.InserirContatoEmpresaDto;
import core.model.dto.MensagemDto;
import core.model.entity.ExcluirContatoDto;

@Path("/contatoService")
public class ContatoService {
	@POST
	@Path("/gerenciarContatoPessoa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<MensagemDto> gerenciarContatoPessoa(InserirContatoDto contactDto) {
		return new ContatoManagerImpl().inserirContato(contactDto);
	}

	@POST
	@Path("/inserirContatoEmpresa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto inserirContatoEmpresa(InserirContatoEmpresaDto inserirContatoEmpresaDto) {
		return new ContatoManagerImpl().inserirContatoEmpresa(inserirContatoEmpresaDto);
	}

	@POST
	@Path("/alterarContatoEmpresa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto alterarContatoEmpresa(InserirContatoEmpresaDto inserirContatoEmpresaDto) {
		return new ContatoManagerImpl().alterarContatoEmpresa(inserirContatoEmpresaDto);
	}

	@POST
	@Path("/excluirContato")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto excluirContato(ExcluirContatoDto excluirContatoDto) {
		return new ContatoManagerImpl().excluirContato(excluirContatoDto);
	}

}
