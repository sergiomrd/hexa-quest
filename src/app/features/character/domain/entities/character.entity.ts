import { Experience } from '../value-objects/experience.vo';
import { Level } from '../value-objects/level.vo';

export type CharacterProps = Readonly<{
  id: string;
  name: string;
  level: Level;
  experience: Experience;
  createdAt: Date;
  updatedAt: Date;
}>;

export class Character {
  private _id: string;
  private _name: string;
  private _level: Level;
  private _experience: Experience;

  private constructor(
    id: string,
    name: string,
    level: Level,
    experience: Experience
  ) {
    this._id = id;
    this._name = name;
    this._level = level;
    this._experience = experience;
  }

  static create(props: CharacterProps): Character {
    const id = props.id;
    const name = props.name?.trim();

    if (!name) {
      throw new Error('Name is required');
    }

    const level = Level.of(props.level.value);
    const experience = Experience.of(props.experience.value);

    return new Character(id, name, level, experience);
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get level(): Level {
    return this._level;
  }

  get experience(): Experience {
    return this._experience;
  }
}
