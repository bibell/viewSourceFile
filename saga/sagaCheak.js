import test from 'tape';
import { rSaga } from './sagaReducer';

test('some kind of word',(value)=>{
   const gen=rSaga();
   gen.next();
})