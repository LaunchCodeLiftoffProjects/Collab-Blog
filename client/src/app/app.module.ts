import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
=======
>>>>>>> 44c4987538795d74f17dda05cfff89169d04c252

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    AddBlogComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSliderModule,
    MatMenuModule,
    MatFormFieldModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    FormsModule,
=======
    FormsModule,
    BrowserAnimationsModule
>>>>>>> 44c4987538795d74f17dda05cfff89169d04c252
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }