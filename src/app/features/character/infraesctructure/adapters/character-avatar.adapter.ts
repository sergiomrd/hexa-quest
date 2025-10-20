import { Observable, of } from "rxjs";
import { CharacterAvatarPort } from "../../application/ports/character-avatar.port";
import { Injectable } from "@angular/core";

@Injectable()
export class CharacterAvatarAdapter implements CharacterAvatarPort {
  generate(name: string): Observable<string> {
    return of(`https://avatar.iran.liara.run/public/boy?username=${name}`);
  }
}
