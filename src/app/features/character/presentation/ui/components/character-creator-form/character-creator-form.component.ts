import { NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterCreatorVM } from '../../../state/viewmodels/character-creator.viewmodel';

@Component({
  selector: 'app-character-creator-form',
  templateUrl: './character-creator-form.component.html',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCreatorFormComponent {

  @Input() viewModel!: CharacterCreatorVM;
  @Output() nameChange = new EventEmitter<string>();
  @Output() generateImage = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<void>();

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitForm.emit();
  }

  onGenerateImage(event: Event): void {
    event.preventDefault();
    this.generateImage.emit();
  }

  onNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.nameChange.emit(target.value);
  }

}
