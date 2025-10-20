import { inject, Injectable } from "@angular/core";
import { CHARACTER_AVATAR_PORT } from "../tokens/character-avatar.token";
import { Observable } from "rxjs";


@Injectable()
export class GenerateCharacterImageUseCase {
  private characterAvatarPort = inject(CHARACTER_AVATAR_PORT);

  execute(name: string): Observable<string> {
    return this.characterAvatarPort.generate(name);
  }
}
