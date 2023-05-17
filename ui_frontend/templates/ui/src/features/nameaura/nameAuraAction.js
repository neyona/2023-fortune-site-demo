
import { NAME_AURA } from './types';

export function getNameAura(nameAura) {
  return {
    type: NAME_AURA,
    payload: [nameAura],
  };
};
