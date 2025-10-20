import { Observable } from "rxjs";
import { Character } from "../entities/character.entity";

export interface CharacterRepositoryPort {
  getByName(name: string): Observable<Character>;
}
