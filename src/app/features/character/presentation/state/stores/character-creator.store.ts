import { computed, inject, Injectable, signal } from '@angular/core';
import { CharacterCreatorVM } from '../viewmodels/character-creator.viewmodel';
import { CharacterCreatorPresenter } from '../presenters/character-creator.presenter';
import { GenerateCharacterImageUseCase } from '../../../application/use-cases/generate-character-image.use-case';
import { finalize, first } from 'rxjs';

export interface CharacterCreatorState {
  name: string;
  avatarUrl: string;
  generating: boolean;
  submitting: boolean;
  error: string | null;
  isAvatarGenerated: boolean;
}

@Injectable()
export class CharacterCreatorStore {
  private generateImageUseCase = inject(GenerateCharacterImageUseCase);

  private name = signal<string>('');
  private avatarUrl = signal<string>(`https://imgs.search.brave.com/xt4YHrpKcISfMXJiokD8oZ6ydnBqJ9zlWYeW7rWpJrw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzU0LzM0LzEw/LzM2MF9GXzE1NTQz/NDEwOTlfbUdBM2lZ/TVlzc05ZYXhXQ09z/TFNJZFdCRlY3SUli/SWIuanBn`);
  private generating = signal<boolean>(false);
  private submitting = signal<boolean>(false);
  private isAvatarGenerated = signal<boolean>(false);
  private error = signal<string | null>(null);

  private snapshot = computed<CharacterCreatorState>(() => ({
    name: this.name(),
    avatarUrl: this.avatarUrl(),
    generating: this.generating(),
    submitting: this.submitting(),
    error: this.error(),
    isAvatarGenerated: this.isAvatarGenerated(),
  }));

  viewModel = computed<CharacterCreatorVM>(() =>
    CharacterCreatorPresenter.toViewModel(this.snapshot())
  );

  setName(name: string): void {
    this.name.set(name.trim());
  }

  generateImage(): void {
    this.generating.set(true);
    this.generateImageUseCase
      .execute(this.name())
      .pipe(first(), finalize(() => this.generating.set(false)))
      .subscribe({
        next: (avatarUrl: string) => {
          this.avatarUrl.set(avatarUrl);
          this.isAvatarGenerated.set(true);
        },
        error: (error: Error) => {
          this.error.set(error.message || 'An unexpected error occurred');
          this.isAvatarGenerated.set(false);
        },
      });
  }

  submitForm(): void {
    this.submitting.set(true);
  }
}
