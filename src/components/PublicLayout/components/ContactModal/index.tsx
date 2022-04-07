import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { question, resetContactStatus } from 'state/actions/contactActions';
import CustomModal from 'components/CustomModal';
import ContactForm from '../ContactForm';
import ContactResponse from '../ContactResponse';
import { useAppDispatch } from 'hooks/redux';
import useStatus from 'hooks/useStatus';
import { FULFILLED, PENDING, REJECTED } from 'constants/actionStatus';
import { ContactFields } from 'types/forms';
import styles from './styles.module.scss';

function ContactModal({ open, onClose }: ContactModalProps) {
  const dispatch = useAppDispatch();
  const { status } = useStatus(question);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: ContactFields) => {
    dispatch(question(data));
  }

  const renderComponent = () => {
    if(status === FULFILLED || status === REJECTED) {
      return <ContactResponse status={status}/>
    }
    return <ContactForm onSubmit={handleSubmit} loading={loading}/>
  }

  useEffect(() => {
    setLoading(status === PENDING);
  }, [status])

  return (
    <CustomModal 
      open={open} 
      onClose={() => {
        dispatch(resetContactStatus())
        onClose()
      }}
      loading={loading}
    >
      <div className={clsx("column middle", styles.contactModalContainer)}>
        {
          renderComponent()
        }
      </div>
    </CustomModal>
  ) 
}

export interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default ContactModal;
