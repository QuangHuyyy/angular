import {Injectable} from '@angular/core';
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    new Movie(1, "NHỮNG KẺ XẤU XA", "https://www.cgv.vn/default/bad-guys.html", "Pierre Perifel"),
    new Movie(2, "THÀNH PHỐ MẤT TÍCH", "https://www.cgv.vn/default/lost-city.html", "Aaron Nee, Adam Nee")
  ];

  constructor() {
  }

  public getAllMovies(): Movie[] {
    return this.movies;
  }

  public addMovie(movie: Movie): void {
    movie.id = this.getLastId(this.movies) + 1;
    this.movies.push(movie);
  }

  private getLastId = (movies: Movie[]): number => {
    return  movies.length <= 0 ? 1 : (movies.sort((a, b) => {
      return b.id - a.id
    }))[0].id;
  }
}
