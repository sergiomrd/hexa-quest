
import { CharacterWidgetState } from "../stores/character-widget.store";
import { CharacterWidgetVM } from "../viewmodels/character-widget.viewmodel";

export class CharacterWidgetPresenter {
  toViewModel(characterWidgetState: CharacterWidgetState): CharacterWidgetVM {
    const { name, avatarUrl, level, experience } = characterWidgetState;

    const experiencePercentage = level.progressPercent(experience.value);
    return {
      name,
      avatarUrl,
      level: level.value,
      experience: experience.value,
      experiencePercentage,
    };
  }
}
