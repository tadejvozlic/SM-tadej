import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  /**
   * @description Array of images that are shown in features carousel
   * Optional TODO: show captions
   */
  images: { img: string; caption: string }[] = [
    {
      img: "assets/images/logo/Logo_Provider Picks_1.png",
      caption: "Title positioning of the leading OTTs",
    },
    {
      img: "assets/images/logo/Logo_STAR_3.png",
      caption: "Series Title Availabilty Report Online",
    },
    {
      img: "assets/images/logo/Logo_nSTAR_4.png",
      caption: "non-Series Title Availability Report Online",
    },
    {
      img: "assets/images/logo/Logo_Paywall_2.png",
      caption: "TV Everywhere Report Online",
    },
    {
      img: "assets/images/logo/SM Fast report.png",
      caption: "Tracking first airing and reruns on Live TV.",
    },
    {
      img: "assets/images/logo/Advanced Report logo neg trans.png",
      caption: "Tailor Made reports using all SM capabilities.",
    },
  ];

  constructor(private router: Router) {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {}

  /**
   * TODO: make it route to right page
   *
   * @description navigates user to get started page
   */
  onGetStartedClick() {
    // this.router.navigate([""]);
  }
}
