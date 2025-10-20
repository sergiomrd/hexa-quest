import { InjectionToken } from "@angular/core";
import { CharacterRepositoryPort } from "../../domain/ports/character-repository.port";


export const CHARACTER_REPOSITORY = new InjectionToken<CharacterRepositoryPort>('CHARACTER_REPOSITORY');
