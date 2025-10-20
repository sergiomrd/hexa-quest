import { InjectionToken } from "@angular/core";
import { CharacterAvatarPort } from "../ports/character-avatar.port";


export const CHARACTER_AVATAR_PORT = new InjectionToken<CharacterAvatarPort>('CHARACTER_AVATAR_PORT');
