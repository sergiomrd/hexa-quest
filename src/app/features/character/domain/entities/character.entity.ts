import { Experience } from '../value-objects/experience.vo';
import { Level } from '../value-objects/level.vo';

export type CharacterProps = Readonly<{
  id: string;
  name: string;
  level: Level;
  experience: Experience;
  avatarUrl: string;
}>;

export class Character {
  private _id: string;
  private _name: string;
  private _level: Level;
  private _experience: Experience;
  private _avatarUrl: string;

  private constructor(
    id: string,
    name: string,
    level: Level,
    experience: Experience,
    avatarUrl: string
  ) {
    this._id = id;
    this._name = name;
    this._level = level;
    this._experience = experience;
    this._avatarUrl = avatarUrl;
  }

  static create(props: CharacterProps): Character {
    const id = props.id;
    const name = props.name?.trim();

    if (!name) {
      throw new Error('Name is required');
    }

    const level = Level.of(props.level.value);
    const experience = Experience.of(props.experience.value);
    const avatarUrl = props.avatarUrl;

    return new Character(id, name, level, experience, avatarUrl);
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

  get avatarUrl(): string {
    return this._avatarUrl;
  }
}
