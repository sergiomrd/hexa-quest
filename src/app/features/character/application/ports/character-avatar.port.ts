import { Observable } from "rxjs";


export interface CharacterAvatarPort {
  generate(name: string): Observable<string>;
}
