package base.service;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.tipo.impl.TipoManagerImpl;
import core.model.dto.ListaTipoEstadoDto;
import core.model.dto.TipoCidadeDto;

@Path("/tipoService")
public class TipoService {

	@POST
	@Path("/consultarListaTipoEstado")
	@Produces(MediaType.APPLICATION_JSON)
	public ListaTipoEstadoDto consultListaTipoEstado()
			throws ClassNotFoundException, Exception, NullPointerException {
		return new TipoManagerImpl().consultarListaTipoEstado();
	}
	@POST
	@Path("/consultarListaTipoCidade")
	@Produces(MediaType.APPLICATION_JSON)
	public TipoCidadeDto consultListaTipoCidade(TipoCidadeDto tipoCidadeDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new TipoManagerImpl().consultarListaTipoCidade(tipoCidadeDto);
	}
}
