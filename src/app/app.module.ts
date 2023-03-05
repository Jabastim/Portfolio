import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { AboutmeComponent } from './componentes/about-me/aboutme.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    AboutmeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
