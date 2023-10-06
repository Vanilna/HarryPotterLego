import { atom } from 'jotai';

import { Minifig } from '@/types/minifigs';

export const selectedMinifigAtom = atom<Minifig | undefined>(undefined);
