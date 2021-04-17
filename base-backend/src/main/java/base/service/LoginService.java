package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.model.dto.MensagemDto;
import pluginlogin.manager.signin.impl.SignInManagerImpl;
import pluginlogin.model.dto.SignInFormDTO;
import pluginlogin.model.dto.SignInResponseDTO;

@Path("/loginService")
public class LoginService {
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public SignInResponseDTO signInFormBasic(SignInFormDTO signInFormDTO) {
		return new SignInManagerImpl().signIn(signInFormDTO);
	}

	@GET
	@Path("/ativarTokenNovoDispositivo/{token}/{idUsuario}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto ativarTokenNovoDispositivo(@PathParam("token") String token,
			@PathParam("idUsuario") Integer idUsuario) {
		return new SignInManagerImpl().ativarTokenNovoDispositivo(token, idUsuario);
	}
}
