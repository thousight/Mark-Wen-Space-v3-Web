// Angular
import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { Title } from './components/title';
import { Timeline } from './components/timeline';
import { HomeIcons } from './components/home-icons';
import { NavBar } from './components/navBar';
import { OnLoad } from './components/onLoad';
// Main
import { Home } from "./home";
import { About } from "./about";
import { Exp } from "./exp";
import { Portfolio } from "./portfolio";
import { Edu } from "./edu";
import { Skills } from "./skills";
import { Contact } from "./contact";
import { MWFooter } from "./footer";
import { App }   from './app';

@NgModule({
    declarations: [App, Title, Timeline, HomeIcons, NavBar, OnLoad, Home, About, Exp, Portfolio, Edu, Skills, Contact, MWFooter],
    imports:      [BrowserModule],
    bootstrap:    [App],
})
export class AppModule {}
