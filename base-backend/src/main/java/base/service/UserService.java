package base.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import core.manager.usuario.impl.UsuarioManagerImpl;
import core.model.dto.AlterarUsuarioDto;
import core.model.dto.MensagemDto;
import core.model.dto.UserDto;
import core.model.dto.UserResponseDto;

@Path("/userService")
public class UserService {

	@POST
	@Path("/consultarInformacoesUsuario")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public UserResponseDto consultUserData(UserDto userDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new UsuarioManagerImpl().consultarInformacoesUsuarioPessoaNatural(userDto);
	}

	@POST
	@Path("/recuperarSenhaUsuario")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto recuperarSenhaUsuario(UserDto userDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new UsuarioManagerImpl().recuperarSenhaUsuario(userDto);
	}

	@POST
	@Path("/alterarDadosUsuario")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MensagemDto alterarDadosUsuario(AlterarUsuarioDto alterarUsuarioDto)
			throws ClassNotFoundException, Exception, NullPointerException {
		return new UsuarioManagerImpl().alterarDadosUsuario(alterarUsuarioDto);
	}

}
