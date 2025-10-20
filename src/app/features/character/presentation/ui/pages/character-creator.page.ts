import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharacterCreatorFormComponent } from '../components/character-creator-form/character-creator-form.component';
import { CharacterCreatorStore } from '../../state/stores/character-creator.store';
import { GenerateCharacterImageUseCase } from '../../../application/use-cases/generate-character-image.use-case';

@Component({
  standalone: true,
  imports: [CharacterCreatorFormComponent],
  templateUrl: './character-creator.page.html',
  styleUrls: [],
  providers: [CharacterCreatorStore, GenerateCharacterImageUseCase],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCreatorPage {
  store = inject(CharacterCreatorStore);
}
