import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConversationComponent } from './components/conversation/conversation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ConversationComponent
  ]
})
export class DashboardModule { }
