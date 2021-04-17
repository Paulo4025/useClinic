package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.empresa.impl.EmpresaManagerImpl;
import core.model.dto.ConsultarEmpresaDto;
import core.model.dto.MensagemDto;
import core.model.dto.PerfilEmpresaDto;
import core.model.dto.PreRegistroEmpresaDto;

@Path("/empresaService")
public class EmpresaService {

	@POST
	@Path("/preRegistrarEmpresa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto preRegistrarEmpresa(PreRegistroEmpresaDto preRegistroEmpresaDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new EmpresaManagerImpl().preRegistrarEmpresa(preRegistroEmpresaDto);
	}

	@POST
	@Path("/consultarPerfilEmpresa")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public PerfilEmpresaDto consultarPerfilEmpresa(ConsultarEmpresaDto consultarEmpresaDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new EmpresaManagerImpl().consultarPerfilEmpresa(consultarEmpresaDto);
	}
}
