

export interface CharacterCreatorVM {
  name: string;
  nameHelp: string;
  avatarUrl: string;
  canSubmit: boolean;
  generating: boolean;
  submitting: boolean;
  isAvatarGenerated: boolean;
  error: string | null;
}
