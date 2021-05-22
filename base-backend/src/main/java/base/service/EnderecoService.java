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
	public MensagemDto gerenciarEnderecoPessoaNatural(EnderecoDto enderecoDto) {
		return new EnderecoManagerImpl().inserirEndereco(enderecoDto);
	}

	@POST
	@Path("/inserirEnderecoEmpresa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto gerenciarEnderecoEmpresa(EnderecoDto enderecoDto) {
		return new EnderecoManagerImpl().inserirEnderecoEmpresa(enderecoDto);
	}
	
	@POST
	@Path("/alterarEnderecoEmpresa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto alterarEnderecoEmpresa(EnderecoDto enderecoDto) {
		return new EnderecoManagerImpl().alterarEnderecoEmpresa(enderecoDto);
	}
	
	@POST
	@Path("/excluirEndereco")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto excluirEndereco(EnderecoDto enderecoDto) {
		return new EnderecoManagerImpl().excluirEndereco(enderecoDto);
	}
}
