package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.model.dto.MensagemDto;
import pluginlogin.manager.signup.impl.SignUpManagerImpl;
import pluginlogin.model.dto.SignUpFormDto;

@Path("/cadastroService")
public class CadastroService {

	@POST
	@Path("/cadastroBasico")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto signUpFormBasic(SignUpFormDto signUpFormDto) {
		return new SignUpManagerImpl().realizarCadastroBasico(signUpFormDto);
	}

}
