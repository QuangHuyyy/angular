import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
  }

  addMovie(name: string, link: string, director: string) {
    this._movieService.addMovie(new Movie(1, name, link, director))
  }
}
