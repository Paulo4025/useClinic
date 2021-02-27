import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Service } from "plugins/plugin-login/plugin-login-frontend/src/app/service/Service";
import { ServiceConfig } from "plugins/plugin-login/plugin-login-frontend/src/app/service/ServiceConfig";
import { UtilConstant } from "plugins/plugin-util-common/util-common-frontend/src/app/util-constants";
import { UtilFuncoes } from "plugins/plugin-util-common/util-common-frontend/src/app/util-funcoes";
import { ListaTipoCidadeDto } from "plugins/plugin-util-common/util-common-frontend/src/app/util-interface/ListaTipoCidadeDto";
import { ListaTipoEstadoDto } from "plugins/plugin-util-common/util-common-frontend/src/app/util-interface/ListaTipoEstadoDto";
import { MensagemDto } from "plugins/plugin-util-common/util-common-frontend/src/app/util-interface/MensagemDto";
import { UserResponseDto } from "plugins/plugin-util-common/util-common-frontend/src/app/util-interface/UserResponseDto";
import { UtilLoader } from "plugins/plugin-util-common/util-common-frontend/src/app/util-loader/util-loader";
import { UtilService } from "plugins/plugin-util-common/util-common-frontend/src/app/util-service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(
    private utilConstant: UtilConstant,
    private serviceConfig: ServiceConfig,
    private utilService: UtilService,
    private utilFuncoes: UtilFuncoes,
    private service: Service,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private utilLoader: UtilLoader
  ) {
    this.utilLoader
      .show()
      .then((isLoading: HTMLIonLoadingElement | boolean) => {
        this.utilService
          .service(this.serviceConfig.service.consultarListaTipoEstado)
          .then((listaTipoEstadoDto: ListaTipoEstadoDto) => {
            this.service.listaTipoEstadoDto = listaTipoEstadoDto;
          })
          .then(() => {
            this.utilLoader.hide(isLoading);
          })
          .catch((err) => {
            console.log(err);
            this.utilLoader.hide(isLoading);
          });
      });
  }

  private profileDadosPessoaisForm = new FormGroup({
    numeroDocumentoCPF: new FormControl(
      { value: "", disabled: true },
      Validators.compose([Validators.required])
    ),
    nomeCompleto: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(this.utilConstant.expressaoRegular.nomeCompleto),
      ])
    ),
    dataNascimento: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
  });
  private profileDadosContatoForm = new FormGroup({
    email: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(this.utilConstant.expressaoRegular.email),
      ])
    ),
    numeroCelular: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(this.utilConstant.expressaoRegular.numeroCelular),
      ])
    ),
    numeroTelefone: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(this.utilConstant.expressaoRegular.numeroTelefone),
      ])
    ),
  });

  private profileEnderecoForm = new FormGroup({
    enderecoCompleto: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    numeroEndereco: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    complementoEndereco: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    cep: new FormControl("", Validators.compose([Validators.required])),
    estadoEndereco: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    cidadeEndereco: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
  });

  ngOnInit() {
    if (!this.utilFuncoes.verificarSessaoUsuario()) {
      this.router.navigate(["/login"]);
    } else {
      if (this.service.userInfo === undefined) {
        this.utilLoader
          .show()
          .then((isLoading: HTMLIonLoadingElement | boolean) => {
            this.utilService
              .service(this.serviceConfig.service.consultarInformacoesUsuario)
              .then((userResponseDto: UserResponseDto) => {
                console.log(userResponseDto);
                this.service.userInfo = userResponseDto;
                this.service.userInfo.dataNascimento = new Date(
                  userResponseDto.dataNascimento
                );
                this.profileDadosPessoaisForm
                  .get("dataNascimento")
                  .setValue(new Date(userResponseDto.dataNascimento));
                this.profileDadosPessoaisForm
                  .get("nomeCompleto")
                  .setValue(userResponseDto.nomeCompleto);
                this.profileDadosPessoaisForm
                  .get("numeroDocumentoCPF")
                  .setValue(userResponseDto.numeroDocumentoCPF);
                this.profileDadosPessoaisForm = this.utilFuncoes.adicionarMascaraCNPJCPF(
                  this.profileDadosPessoaisForm
                );
                this.service.userInfo.numeroDocumentoCPF = this.profileDadosPessoaisForm.get(
                  "numeroDocumentoCPF"
                ).value;
                this.profileDadosContatoForm
                  .get("email")
                  .setValue(userResponseDto.email);
                this.profileDadosContatoForm
                  .get("numeroCelular")
                  .setValue(userResponseDto.numeroCelular);
                this.profileDadosContatoForm
                  .get("numeroTelefone")
                  .setValue(userResponseDto.numeroTelefone);

                  this.profileEnderecoForm.get("enderecoCompleto").setValue(userResponseDto.enderecoCompleto)
                  this.profileEnderecoForm.get("numeroEndereco").setValue(userResponseDto.numeroEndereco)
                  this.profileEnderecoForm.get("complementoEndereco").setValue(userResponseDto.complemento)
                  this.profileEnderecoForm.get("cep").setValue(userResponseDto.cep)
                  this.profileEnderecoForm.get("estadoEndereco").setValue(userResponseDto.idTipoEstado)
                  this.consultarTipoCidade()
                  this.profileEnderecoForm.get("cidadeEndereco").setValue(userResponseDto.idTipoCidade)

              })
              .then(() => {
                this.utilLoader.hide(isLoading);
              })
              .catch((err) => {
                console.log(err);
                this.utilLoader.hide(isLoading);
              });
          });
      }
    }
  }

  consultarTipoCidade() {
    this.utilLoader
      .show()
      .then((isLoading: HTMLIonLoadingElement | boolean) => {
        this.serviceConfig.service.consultarListaTipoCidade.json = {
          idTipoEstado: this.profileEnderecoForm.get("estadoEndereco").value,
        };
        this.utilService
          .service(this.serviceConfig.service.consultarListaTipoCidade)
          .then((listaTipoCidadeDto: ListaTipoCidadeDto) => {
            this.service.listaTipoCidadeDto = listaTipoCidadeDto
          }).then(() => {
            this.utilLoader.hide(isLoading);
          })
          .catch((err) => {
            console.log(err);
            this.utilLoader.hide(isLoading);
          });
      });
  }

  gerenciarDadosPessoais() {
    this.profileDadosPessoaisForm.markAllAsTouched();
    if (this.profileDadosPessoaisForm.valid) {
      this.utilLoader
        .show()
        .then((isLoading: HTMLIonLoadingElement | boolean) => {
          this.serviceConfig.service.gerenciarPessoaNatural.json = {
            numeroDocumentoCPF: this.utilFuncoes.removerMascaraCPF(
              this.profileDadosPessoaisForm
            ),
            nomeCompleto: this.profileDadosPessoaisForm.get("nomeCompleto")
              .value,
            dataNascimento: this.profileDadosPessoaisForm.get("dataNascimento")
              .value,
            loginDto: {
              usuarioAcesso: localStorage.getItem(
                this.utilConstant.constants.sessao.usuario
              ),
              token: localStorage.getItem(
                this.utilConstant.constants.sessao.token
              ),
            },
          };
          this.utilService
            .service(this.serviceConfig.service.gerenciarPessoaNatural)
            .then((MensagemDto: MensagemDto) => {
              this.matSnackBar.open(
                MensagemDto.codigo + " - " + MensagemDto.mensagem,
                "X"
              );
            })
            .then(() => {
              this.utilLoader.hide(isLoading);
            })
            .catch((err) => {
              console.log(err);
              this.utilLoader.hide(isLoading);
            });
        });
    } else {
      this.matSnackBar.open(
        "Favor corrigir os campos marcados em vermelho.",
        "X"
      );
    }
  }

  gerenciarDadosContadoPerfilPessoal() {
    this.profileDadosContatoForm.markAllAsTouched();
    if (this.profileDadosContatoForm.valid) {
      this.utilLoader
        .show()
        .then((isLoading: HTMLIonLoadingElement | boolean) => {
          this.serviceConfig.service.gerenciarContatoPessoa.json = {
            numeroTelefone: this.profileDadosContatoForm.get("numeroTelefone")
              .value,
            numeroCelular: this.profileDadosContatoForm.get("numeroCelular")
              .value,
            email: this.profileDadosContatoForm.get("email").value,
            idPessoa: this.service.userInfo.idPessoaPerfilPessoal,
            isWhatssap: "S",
            loginDto: {
              usuarioAcesso: localStorage.getItem(
                this.utilConstant.constants.sessao.usuario
              ),
              token: localStorage.getItem(
                this.utilConstant.constants.sessao.token
              ),
            },
          };
          this.utilService
            .service(this.serviceConfig.service.gerenciarContatoPessoa)
            .then((MensagemDto: MensagemDto[]) => {
              console.log(MensagemDto);
              let mensagemConcat: string = "";
              MensagemDto.forEach((mensagem: MensagemDto) => {
                mensagemConcat +=
                  mensagem.codigo + " - " + mensagem.mensagem + "\n";
              });
              this.matSnackBar.open(mensagemConcat, "X");
            })
            .then(() => {
              this.utilLoader.hide(isLoading);
            })
            .catch((err) => {
              console.log(err);
              this.utilLoader.hide(isLoading);
            });
        });
    }
  }
  gerenciarDadosEndereco() {
    this.profileEnderecoForm.markAllAsTouched();
    if (this.profileEnderecoForm.valid) {
      this.utilLoader
        .show()
        .then((isLoading: HTMLIonLoadingElement | boolean) => {
          this.serviceConfig.service.gerenciarEnderecoPessoa.json = {
            enderecoCompleto: this.profileEnderecoForm.get("enderecoCompleto").value,
            numeroEndereco: this.profileEnderecoForm.get("numeroEndereco").value,
            complemento: this.profileEnderecoForm.get("complementoEndereco").value,
            cep: this.profileEnderecoForm.get("cep").value,
            descricao: "",
            idPessoa: this.service.userInfo.idPessoaPerfilPessoal,
            idTipoCidade: this.profileEnderecoForm.get("cidadeEndereco").value,
            loginDto: {
              usuarioAcesso: localStorage.getItem(this.utilConstant.constants.sessao.usuario),
              token: localStorage.getItem(this.utilConstant.constants.sessao.token),
            }
          }
          this.utilService
            .service(this.serviceConfig.service.gerenciarEnderecoPessoa)
            .then((mensagemDto: MensagemDto) => {
              this.matSnackBar.open(
                mensagemDto.codigo + " - " + mensagemDto.mensagem,
                "X"
              );
            })
            .then(() => {
              this.utilLoader.hide(isLoading);
            })
            .catch((err) => {
              console.log(err);
              this.utilLoader.hide(isLoading);
            });
        });
    }
  }
}
