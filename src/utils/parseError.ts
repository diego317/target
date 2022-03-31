import i18n from 'i18n';

const parseErrors = (errors: any) => {
  if (errors) {
    const { fullMessages, base } = errors;

    if (fullMessages) {
      const [firstMessage] = fullMessages;
      return firstMessage;
    }

    if (base) {
      const [firstMessage] = base;
      return firstMessage;
    }

    if (Array.isArray(errors)) {
      return errors[0];
    }

    const errorKey = Object.keys(errors)[0];
    const error = errors[errorKey][0];
    return `${errorKey} ${error}`;
  }

  return i18n.t('errors:response.default');
};

const bodyParser = (data: any) => {
  if (!data) return i18n.t('errors:response.default');

  const { error, errors } = data;

  if (error) return error;

  return parseErrors(errors);
};

export default bodyParser;
