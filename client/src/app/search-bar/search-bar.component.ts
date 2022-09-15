import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../service/blogs.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {


  @Output () searchTermEmitter = new EventEmitter<string>();

  blogSearch(value: string){
    console.log(value);
    this.searchTermEmitter.emit(value);
  }

  ngOnInit(): void {
  }

}
