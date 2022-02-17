import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {path: "blog-list", component: BlogListComponent },
  {path: "add-blog", component: AddBlogComponent },
  {path: "welcome", component: WelcomePageComponent },
  {path: "view-blog/:id", component: ViewBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
