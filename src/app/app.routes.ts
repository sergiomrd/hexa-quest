import { Routes } from '@angular/router';
import { CHARACTER_AVATAR_PORT } from './features/character/application/tokens/character-avatar.token';
import { CharacterAvatarAdapter } from './features/character/infraesctructure/adapters/character-avatar.adapter';

export const routes: Routes = [
  {
    path: 'character/create',
    loadComponent: () =>
      import(
        './features/character/presentation/ui/pages/character-creator.page'
      ).then((m) => m.CharacterCreatorPage),
    providers: [
      {
        provide: CHARACTER_AVATAR_PORT,
        useClass: CharacterAvatarAdapter,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'character/create',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'character/create',
    pathMatch: 'full'
  }
];
