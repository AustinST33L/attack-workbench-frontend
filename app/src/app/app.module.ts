//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppRoutingStixModule } from "./app-routing-stix.module"
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';

// other library imports
import { BreadcrumbModule } from "angular-crumbs";
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MarkdownModule } from "ngx-markdown";

// custom components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResourcesDrawerComponent } from './components/resources-drawer/resources-drawer.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SubheadingComponent } from './components/subheading/subheading.component';

// STIX components
import { StixListComponent } from './components/stix/stix-list/stix-list.component';
import { ExternalReferencesComponent } from "./components/stix/external-references/external-references.component";

import { TimestampPropertyComponent } from "./components/stix/timestamp-property/timestamp-property.component";
import { TimestampViewComponent } from "./components/stix/timestamp-property/timestamp-view/timestamp-view.component";
import { TimestampDiffComponent } from "./components/stix/timestamp-property/timestamp-diff/timestamp-diff.component";

import { AttackIDPropertyComponent } from "./components/stix/attackid-property/attackid-property.component";
import { AttackIDEditComponent } from "./components/stix/attackid-property/attackid-edit/attackid-edit.component";
import { AttackIDViewComponent } from "./components/stix/attackid-property/attackid-view/attackid-view.component";

import { ListPropertyComponent } from "./components/stix/list-property/list-property.component";
import { ListEditComponent } from "./components/stix/list-property/list-edit/list-edit.component";
import { ListViewComponent } from "./components/stix/list-property/list-view/list-view.component";

import { VersionPropertyComponent } from "./components/stix/version-property/version-property.component";
import { VersionEditComponent } from "./components/stix/version-property/version-edit/version-edit.component";
import { VersionViewComponent } from "./components/stix/version-property/version-view/version-view.component";


// views

import { HelpPageComponent } from './views/help-page/help-page.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

import { CollectionListComponent } from './views/stix/collection/collection-list/collection-list.component';
import { CollectionViewComponent } from './views/stix/collection/collection-view/collection-view.component';
import { CollectionImportComponent } from './views/stix/collection/collection-import/collection-import.component';
import { CollectionExportComponent } from './views/stix/collection/collection-export/collection-export.component';

import { GroupViewComponent } from './views/stix/group/group-view/group-view.component';
import { GroupListComponent } from './views/stix/group/group-list/group-list.component';

import { MatrixViewComponent } from './views/stix/matrix/matrix-view/matrix-view.component';
import { MatrixListComponent } from './views/stix/matrix/matrix-list/matrix-list.component';

import { MitigationListComponent } from './views/stix/mitigation/mitigation-list/mitigation-list.component';
import { MitigationViewComponent } from './views/stix/mitigation/mitigation-view/mitigation-view.component';

import { SoftwareViewComponent } from './views/stix/software/software-view/software-view.component';
import { SoftwareListComponent } from './views/stix/software/software-list/software-list.component';

import { TacticViewComponent } from './views/stix/tactic/tactic-view/tactic-view.component';
import { TacticListComponent } from './views/stix/tactic/tactic-list/tactic-list.component';

import { TechniqueViewComponent } from './views/stix/technique/technique-view/technique-view.component';
import { TechniqueListComponent } from './views/stix/technique/technique-list/technique-list.component';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    LoadingOverlayComponent,
    ToolbarComponent,
    ResourcesDrawerComponent,
    SubheadingComponent,
    
    StixListComponent,
    ExternalReferencesComponent,
    TimestampPropertyComponent,
    TimestampViewComponent,
    TimestampDiffComponent,
    AttackIDPropertyComponent,
    AttackIDEditComponent,
    AttackIDViewComponent,
    ListPropertyComponent,
    ListEditComponent,
    ListViewComponent,
    VersionPropertyComponent,
    VersionEditComponent,
    VersionViewComponent,
    
    LandingPageComponent,
    HelpPageComponent,

    CollectionListComponent,
    CollectionViewComponent,
    CollectionImportComponent,
    CollectionExportComponent,

    GroupListComponent,
    GroupViewComponent,

    MatrixListComponent,
    MatrixViewComponent,

    MitigationListComponent,
    MitigationViewComponent,

    SoftwareListComponent,
    SoftwareViewComponent,

    TacticListComponent,
    TacticViewComponent,

    TechniqueListComponent,
    TechniqueViewComponent,
  ],
  imports: [
    BreadcrumbModule,
    MaterialFileInputModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    
    BrowserModule,

    AppRoutingModule,
    AppRoutingStixModule,
    HttpClientModule,
    
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    
    OverlayModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,

    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
