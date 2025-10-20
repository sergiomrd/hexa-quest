import { Experience } from "../../../domain/value-objects/experience.vo";
import { Level } from "../../../domain/value-objects/level.vo";


export interface CharacterWidgetState {
  name: string;
  avatarUrl: string;
  level: Level;
  experience: Experience;
  experiencePercentage: number;
}
