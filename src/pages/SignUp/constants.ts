import i18n from 'i18n';
import { GenderEnum } from 'types/forms';

export const genderOptions = [
  { value: GenderEnum.male, label: i18n.t('signUp:fields.gender.options.male') }, 
  { value: GenderEnum.female, label: i18n.t('signUp:fields.gender.options.female') }, 
  { value: GenderEnum.other, label: i18n.t('signUp:fields.gender.options.other') }
]