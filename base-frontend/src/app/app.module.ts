import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./../../plugins/plugin-login/plugin-login-frontend/src/app/signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./../../plugins/plugin-core/plugin-core-frontend/src/app/profile/profile.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./../../plugins/plugin-login/plugin-login-frontend/src/app/login/login.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Configuration } from "configuration/ambient/configuration";
import { ServiceConfig } from "plugins/plugin-login/plugin-login-frontend/src/app/service/ServiceConfig";
import { HttpClientModule } from "@angular/common/http";
import { Service } from "plugins/plugin-login/plugin-login-frontend/src/app/service/Service";
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { RecuperarSenhaComponent } from "plugins/plugin-login/plugin-login-frontend/src/app/recuperar-senha/recuperar-senha.component";
import { PreRegistrarEmpresaComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/pre-registrar-empresa/pre-registrar-empresa.component";
import { MatCardModule } from "@angular/material/card";
import { DadosAcessoUsuarioComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/dados-acesso-usuario/dados-acesso-usuario.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { ListaLojasProprietarioComponent } from "plugins/plugin-core/plugin-core-frontend/src/app/components/lista-lojas-proprietario/lista-lojas-proprietario.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ProfileEmpresaComponent } from "plugins/plugin-core/plugin-core-frontend/src/app/profile-empresa/profile-empresa.component";
import { DadosEmpresaProfileComponent } from "plugins/plugin-core/plugin-core-frontend/src/app/components/dados-empresa-profile/dados-empresa-profile.component";
import { PreRegistrarFuncionarioComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/pre-registrar-funcionario/pre-registrar-funcionario.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { UtilConstants } from "plugins/plugin-common/plugin-common-frontend/src/app/util-constants";
import { UtilFuncoes } from "plugins/plugin-common/plugin-common-frontend/src/app/util-funcoes";
import { UtilLoader } from "plugins/plugin-common/plugin-common-frontend/src/app/util-loader/util-loader";
import { UtilService } from "plugins/plugin-common/plugin-common-frontend/src/app/util-service";
import { UtilExpressaoRegular } from "plugins/plugin-common/plugin-common-frontend/src/app/util-expressao-regular";
import { ListaCargosFuncionarioComponent } from "plugins/plugin-core/plugin-core-frontend/src/app/components/lista-cargos-funcionario/lista-cargos-funcionario.component";
import { ListaFuncionarioEmpresaComponent } from "plugins/plugin-core/plugin-core-frontend/src/app/components/lista-funcionario-empresa/lista-funcionario-empresa.component";
import { ListaAdicionarCargosComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/lista-adicionar-cargos/lista-adicionar-cargos.component";
import { AlterarContatoComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/alterar-contato/alterar-contato.component";
import { AlterarEnderecoComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/alterar-endereco/alterar-endereco.component";
import { ConfirmarAcaoComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/confirmar-acao/confirmar-acao.component";
import { InserirContatoComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/inserir-contato/inserir-contato.component";
import { InserirEnderecoComponent } from "plugins/plugin-common/plugin-common-frontend/src/app/modal/inserir-endereco/inserir-endereco.component";
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    UtilLoader,
    PreRegistrarEmpresaComponent,
    DadosAcessoUsuarioComponent,
    ListaLojasProprietarioComponent,
    ProfileEmpresaComponent,
    DadosEmpresaProfileComponent,
    ListaFuncionarioEmpresaComponent,
    PreRegistrarFuncionarioComponent,
    ListaCargosFuncionarioComponent,
    ListaAdicionarCargosComponent,
    AlterarContatoComponent,
    AlterarEnderecoComponent,
    ConfirmarAcaoComponent,
    InserirContatoComponent,
    InserirEnderecoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
  ],
  entryComponents: [PreRegistrarEmpresaComponent, DadosAcessoUsuarioComponent],
  providers: [
    UtilFuncoes,
    Configuration,
    ServiceConfig,
    Service,
    UtilLoader,
    UtilService,
    UtilConstants,
    UtilExpressaoRegular,
    { provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
