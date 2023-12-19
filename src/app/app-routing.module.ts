import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education/education.component';
import { AboutMeComponent } from './about-me/about-me/about-me.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { CertificationsComponent } from './certifications/certifications/certifications.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  {path: "", component: AppComponent},
  {path: "about me", component: AboutMeComponent},
  {path: "education", component: EducationComponent},
  {path: "skills", component: SkillsComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "certifications", component: CertificationsComponent},
  {path: "contact me", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
