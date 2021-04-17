package base.service;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.tipo.impl.TipoManagerImpl;
import core.model.dto.ListaTipoCargoDto;
import core.model.dto.ListaTipoEmpresaDto;
import core.model.dto.ListaTipoEstadoDto;
import core.model.dto.ListaTipoUsuarioDto;
import core.model.dto.TipoCidadeDto;

@Path("/tipoService")
public class TipoService {

	@POST
	@Path("/consultarListaTipoEstado")
	@Produces(MediaType.APPLICATION_JSON)
	public ListaTipoEstadoDto consultListaTipoEstado() throws ClassNotFoundException, Exception, NullPointerException {
		return new TipoManagerImpl().consultarListaTipoEstado();
	}

	@POST
	@Path("/consultarListaTipoCidade")
	@Produces(MediaType.APPLICATION_JSON)
	public TipoCidadeDto consultListaTipoCidade(TipoCidadeDto tipoCidadeDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new TipoManagerImpl().consultarListaTipoCidade(tipoCidadeDto);
	}

	@POST
	@Path("/consultarTipoUsuarioLoja")
	@Produces(MediaType.APPLICATION_JSON)
	public ListaTipoUsuarioDto consultaTipoUsuarioLoja()
			throws ClassNotFoundException, Exception, NullPointerException {
		return new TipoManagerImpl().consultaTipoUsuarioLoja();
	}
	
	@POST
	@Path("/consultarTipoEmpresa")
	@Produces(MediaType.APPLICATION_JSON)
	public ListaTipoEmpresaDto consultaTipoEmpresa()
			throws ClassNotFoundException, Exception, NullPointerException {
		return new TipoManagerImpl().consultaTipoEmpresa();
	}

	@POST
	@Path("/consultarTipoCargo")
	@Produces(MediaType.APPLICATION_JSON)
	public ListaTipoCargoDto consultaTipoCargo()
			throws ClassNotFoundException, Exception, NullPointerException {
		return new TipoManagerImpl().consultaTipoCargo();
	}
}
