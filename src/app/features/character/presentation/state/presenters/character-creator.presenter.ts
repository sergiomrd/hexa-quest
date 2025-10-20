import { CharacterCreatorState } from '../stores/character-creator.store';
import { CharacterCreatorVM } from '../viewmodels/character-creator.viewmodel';

export class CharacterCreatorPresenter {
  static toViewModel(
    characterCreatorStore: CharacterCreatorState
  ): CharacterCreatorVM {
    const { name, avatarUrl, generating, submitting, error, isAvatarGenerated } =
      characterCreatorStore;
    const nameLength = name.trim().length;
    const canSubmit =
      nameLength >= 3 && nameLength <= 20 && !generating && !submitting && isAvatarGenerated;

    return {
      name,
      nameHelp: `Min 3 chars. Max 20 chars.`,
      avatarUrl,
      canSubmit: canSubmit,
      generating,
      submitting,
      isAvatarGenerated,
      error,
    };
  }
}
