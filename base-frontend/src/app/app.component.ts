import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  ElementRef,
  ViewChild,
  HostListener,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/filter";
import { DOCUMENT } from "@angular/common";
import { Location } from "@angular/common";
import { Configuration } from "configuration/ambient/configuration";
import { Service } from "plugins/plugin-login/plugin-login-frontend/src/app/service/Service";
import { ServiceConfig } from "plugins/plugin-login/plugin-login-frontend/src/app/service/ServiceConfig";
import { ListaTipoEstadoDto } from "plugins/plugin-util-common/util-common-frontend/src/app/util-interface/ListaTipoEstadoDto";
import { UtilService } from "plugins/plugin-util-common/util-common-frontend/src/app/util-service";

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public isLoading = false;
  private _router: Subscription;

  constructor(
    private service: Service,
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    public location: Location,
    private configuration: Configuration
  ) {
    this.configuration.startConfigurationProjectFrontEnd(
      this.configuration.tipoAmbient.idAmbientTeste
    );
    
  }

  @HostListener("window:scroll", ["$event"])
  hasScrolled() {
    var st = window.pageYOffset;
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    var navbar = document.getElementsByTagName("nav")[0];

    // If they scrolled down and are past the navbar, add class .headroom--unpinned.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      if (navbar.classList.contains("headroom--pinned")) {
        navbar.classList.remove("headroom--pinned");
        navbar.classList.add("headroom--unpinned");
      }
      // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
    } else {
      // Scroll Up
      //  $(window).height()
      if (st + window.innerHeight < document.body.scrollHeight) {
        // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
        if (navbar.classList.contains("headroom--unpinned")) {
          navbar.classList.remove("headroom--unpinned");
          navbar.classList.add("headroom--pinned");
        }
      }
    }

    lastScrollTop = st;
  }
  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement.children[0]
      .children[0];
    this._router = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement.scrollTop = 0;
        }
        this.renderer.listen("window", "scroll", (event) => {
          const number = window.scrollY;
          if (number > 150 || window.pageYOffset > 150) {
            // add logic
            navbar.classList.add("headroom--not-top");
          } else {
            // remove logic
            navbar.classList.remove("headroom--not-top");
          }
        });
      });
    this.hasScrolled();
  }
}
