import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import ContactService from 'services/contactService';
import { ContactFields } from 'types/forms';
import parseError from 'utils/parseError';

export const question = createAsyncThunk('contact/question', async (question: ContactFields) => {
  try {
    const { data } = await ContactService.questions(question);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const resetContactStatus = createAction('contact/question/reset');
