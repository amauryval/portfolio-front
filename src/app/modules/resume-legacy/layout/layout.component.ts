import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiLogoUrl, emailIcon, githubIcon, linkedinIcon, pdfFileIcon, phoneIcon, websiteIcon } from '@core/inputs';
import { ControlerService } from '@services/controler.service';
import { ResumeService } from '@services/resume.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('content') PageContent!: ElementRef;
  @ViewChild('legacyResume') legacyResume: any;

  currentDate: number = new Date().getFullYear();

  // icons
  githubIcon = githubIcon;
  linkedinIcon = linkedinIcon;
  emailIcon = emailIcon;
  phoneIcon = phoneIcon;
  websiteIcon = websiteIcon;
  pdfFileIcon = pdfFileIcon;

  apiImgUrl = apiLogoUrl;

  // resume top bar
  profilData: any;
  contactData: any;

  // resume left sidebar
  degreesData: any;
  languagesData: any;
  trainingsData: any;

  // resume center bar
  summaryData!: any; // TODO SHORT VERSION
  publicationsData!: any;

  // resume center bar
  skillsData: any;
  generalData: any;
  jobsData!: any;
  personalProjectsData!: any;

  dataAvailable = false;

  generalDataSubscription!: Subscription;
  activitiesFilteredSubscription!: Subscription;

  constructor(
    private resumeService: ResumeService,
    private controlerService: ControlerService,
  ) {

    this.generalDataSubscription = this.resumeService.resumeData.subscribe(
      (data) => {
        this.contactData = data.contact;
        this.degreesData = data.education;
        this.generalData = data.general;
        this.languagesData = data.languages;
        this.profilData = data.profil;
        this.trainingsData = data.trainings;
        this.summaryData = data.profil.carrier_summary;
        this.publicationsData = data.research_work;

        this.dataAvailable = true;
        console.log(data)
        console.log(this.PageContent.nativeElement.clientWidth)
      }
    );

    this.activitiesFilteredSubscription = this.resumeService.activitiesFilteredData.subscribe(
      (data) => {
        this.jobsData = data.activities_data.jobs;
        this.personalProjectsData = data.activities_data.personal_projects.reverse();
        this.skillsData = data.skills_data;
      }
    );



   }

  ngOnInit(): void {
    this.sendResumeSubMenus()
    this.resumeService.pullResumeGeneralData();
    this.resumeService.pullActivitiesResumeFromGraph(
      this.currentDate,
      true,
      true,
      true,
      null
    );
  }

  ngAfterViewInit(): void {
    this.adjustZoom();
  }


  ngOnDestroy(): void {
    this.generalDataSubscription.unsubscribe();
    this.activitiesFilteredSubscription.unsubscribe();
  }

  sendResumeSubMenus(): void {
    this.controlerService.pullSubMenus([]);

  }


  reverse(value: string): string {
    let output = '';
    for (let i = value.length - 1; i >= 0; i--) {
      output += value[i];
    }
    return output;
  }

  printDiv(divId: string): void {
    let printContents = document.getElementById(divId)
    if (printContents?.innerHTML ) {
      let originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents?.innerHTML;
      window.print();
      window.location.reload();
    }

  }

  @HostListener('window:resize', ['$event']) adjustZoom(): void {
    let documentWidth = window.innerWidth;
    let documentHeight = window.innerHeight;
    console.log(documentWidth, documentHeight)

    // 1cm = 37.795276px;
    // 21cm width + 1cm of margins each sides
    // 29.7cm height + 1cm of margins each sides
    let zoomWidth = documentWidth / (23 * 37.795276);
    let zoomHeight = documentHeight / (31.7 * 37.795276);
    let zoomLevel = Math.min(zoomWidth, zoomHeight);
    // stop zooming when book fits page
    if (zoomLevel >= 1 ) {
      // this.legacyResume.nativeElement.style.transform = "scale(1)"
      return
    };
    // zoomLevel = 0.5
    this.legacyResume.nativeElement.style.transform = "scale(" + zoomLevel + ")"
    console.log(zoomLevel)
  }

}