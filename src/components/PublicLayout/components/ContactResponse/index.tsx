import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { smiles, sadness } from 'assets/images';
import styles from './styles.module.scss';
import { FULFILLED } from 'constants/actionStatus';

function ContactResponse({ status }: ContactResponseProps) {
  const isFulfilled = status === FULFILLED;
  const { t } = useTranslation('common');

  return (
    <div className={clsx("column center m-top-7", styles.contactSuccessContainer)}>
      <img 
        src={isFulfilled ? smiles : sadness} 
        alt={isFulfilled ? "two smiles faces" : "two sadness faces"}
        className="m-bottom-20 self-center"
      />
      <h2 className="title-normal bold">{t(`modals.contact.title.${isFulfilled ? 'success' : 'error'}`)}</h2>
      <p className="title-normal">{t(`modals.contact.body.${isFulfilled ? 'success' : 'error'}`)}</p>
    </div>
  )
}

export interface ContactResponseProps {
  status: string
}

export default ContactResponse;
