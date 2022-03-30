import { GenericAsyncThunk } from 'state/reducers/statusReducer';
import { useAppSelector } from './redux';

 const useStatus = (action: GenericAsyncThunk) =>
 useAppSelector(
   ({ statusReducer }) => {
     const { status, error } = statusReducer[(action?.typePrefix)] || {};

     return { status, error };
   },
 );

  export default useStatus;
