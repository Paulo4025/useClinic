package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.cargo.impl.CargoManagerImpl;
import core.manager.funcionario.impl.FuncionarioManagerImpl;
import core.manager.pessoa.impl.PessoaManagerImpl;
import core.model.dto.GerenciarCargoFuncionarioDto;
import core.model.dto.ListaTipoCargoDto;
import core.model.dto.MensagemDto;
import core.model.dto.PersonNaturalDto;

@Path("/funcionarioService")
public class FuncionarioService {

	@POST
	@Path("/inserirFuncionario")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto managerPersonNaturalUseClinic(PersonNaturalDto personNaturalDto) {
		return new PessoaManagerImpl().gerenciarPessoaNatural(personNaturalDto);
	}

	@POST
	@Path("/adicionarCargoFuncionario")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto adicionarCargoFuncionario(GerenciarCargoFuncionarioDto gerenciarCargoFuncionarioDto) {
		return new FuncionarioManagerImpl().adicionarCargoFuncionario(gerenciarCargoFuncionarioDto);
	}

	@POST
	@Path("/consultarCargoFuncionario")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ListaTipoCargoDto consultarListaCargosPorFuncionario(
			GerenciarCargoFuncionarioDto gerenciarCargoFuncionarioDto) {
		return new CargoManagerImpl().consultarListaCargosPorFuncionario(gerenciarCargoFuncionarioDto);
	}

	@POST
	@Path("/desvincularCargoFuncionario")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto desvincularCargoFuncionario(GerenciarCargoFuncionarioDto gerenciarCargoFuncionarioDto) {
		return new CargoManagerImpl().desvincularCargoFuncionario(gerenciarCargoFuncionarioDto);
	}

}
