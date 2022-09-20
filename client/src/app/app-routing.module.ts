import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  {path: "blog-list", component: BlogListComponent },
  {path: "add-blog", component: AddBlogComponent },
  {path: "welcome", component: WelcomePageComponent },
  {path: "view-blog/:id", component: ViewBlogComponent},
  {path: "update-blog/:id", component: UpdateBlogComponent },
  {path: "", component: WelcomePageComponent},
  {path: "search-bar", component: SearchBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
