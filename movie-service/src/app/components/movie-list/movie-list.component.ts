import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies!: Movie[];
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this._movieService.getAllMovies();
  }

}
