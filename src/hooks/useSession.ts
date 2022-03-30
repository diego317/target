import { shallowEqual } from 'react-redux';
import { useAppSelector } from './redux';

const useSession = () =>
  useAppSelector(
    ({ session: { authenticated, accessToken } }) => ({
      authenticated,
      accessToken
    }),
    shallowEqual
  );

export default useSession;