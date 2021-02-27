package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import pluginlogin.manager.signin.impl.SignInManagerImpl;
import pluginlogin.model.dto.SignInFormDTO;
import pluginlogin.model.dto.SignInResponseDTO;

@Path("/loginService")
public class LoginService {
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public SignInResponseDTO signInFormBasic(SignInFormDTO signInFormDTO)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new SignInManagerImpl().signIn(signInFormDTO);
	}
}
