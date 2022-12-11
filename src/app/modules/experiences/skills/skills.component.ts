import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { skillsMapping } from '@core/global-values/main';

import { faStar } from '@fortawesome/free-regular-svg-icons';
import { ResumeService } from '@services/resume.service';
import { Subscription } from 'rxjs';
import { ActivityActionsService } from '../services/activity-actions.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  @Input() tabView!: string;

  jobSkillsCategories!: any
  projectSkillsCategories!: any
  volunteerSkillsCategories!: any

  skillsCategories = skillsMapping;

  skillIcon = faStar;

  professionalSkillsSubscription!: Subscription;
  activityEnablingSubscription!: Subscription;

  constructor(
    private resumeService: ResumeService,
  ) { 

    this.professionalSkillsSubscription = this.resumeService.profesionalSkillsDataSubject.subscribe(
      (data: any) => {
        console.log(data)
          this.jobSkillsCategories = data["job"]
          this.projectSkillsCategories = data["personal-project"]
          this.volunteerSkillsCategories = data["volunteer"]
      }
    )
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.professionalSkillsSubscription.unsubscribe();
  }

  trackByMethod(index: number, el: any): number {
    // TODO add an id field
    return el.name;
  }

  keepOrder(): any {
    // check https://stackoverflow.com/a/72286062/13168168
  }

}
