import { createAction, props } from '@ngrx/store';

export const heroeAction = createAction(
    '[Counter Component] heroeAction',
    props<{texto: string}>()
    );