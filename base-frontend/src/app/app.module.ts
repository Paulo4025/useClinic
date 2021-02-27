import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./../../plugins/plugin-login/plugin-login-frontend/src/app/signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./../../plugins/plugin-login/plugin-login-frontend/src/app/login/login.component";
import { UtilFuncoes } from "plugins/plugin-util-common/util-common-frontend/src/app/util-funcoes";
import { UtilConstant } from "plugins/plugin-util-common/util-common-frontend/src/app/util-constants";
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
import { UtilService } from "plugins/plugin-util-common/util-common-frontend/src/app/util-service";
import { HttpClientModule } from "@angular/common/http";
import { UtilLoader } from "plugins/plugin-util-common/util-common-frontend/src/app/util-loader/util-loader";
import { UtilDefinicoes } from "plugins/plugin-util-common/util-common-frontend/src/app/util-definicoes";
import { Service } from "plugins/plugin-login/plugin-login-frontend/src/app/service/Service";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UtilLoader,
  ],
  imports: [
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
  ],
  providers: [
    UtilConstant,
    UtilFuncoes,
    Configuration,
    ServiceConfig,
    UtilService,
    UtilDefinicoes,
    UtilLoader,
    Service,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
