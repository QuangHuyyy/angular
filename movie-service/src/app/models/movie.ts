export class Movie{
  private _id: number;
  private _name: string;
  private _link: string;
  private _director: string;

  constructor(id: number, name: string, link: string, director: string) {
    this._id = id;
    this._name = name;
    this._link = link;
    this._director = director;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get director(): string {
    return this._director;
  }

  set director(value: string) {
    this._director = value;
  }
}
