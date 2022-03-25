import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'state/reducers';

const useSession = () =>
  useSelector(
    ({ session: { authenticated, accessToken } }: RootState) => ({
      authenticated,
      accessToken
    }),
    shallowEqual
  );

export default useSession;