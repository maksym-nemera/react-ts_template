import { FC } from 'react';
import './Main.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as counterAction } from '../../features/counter/counterSlice';

export const Main: FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const increment = () => dispatch(counterAction.increment());
  const decrement = () => dispatch(counterAction.decrement());
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const incrementByAmount = (value: number) =>
    dispatch(counterAction.incrementByAmount(value));

  return (
    <main className='Main'>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </main>
  );
};
