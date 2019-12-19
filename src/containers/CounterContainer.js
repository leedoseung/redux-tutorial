import React from 'react';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { useActions } from '../lib/useAction';

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);

  /* const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]); */

  const [onIncrease, onDecrease] = useActions([increase, decrease], []);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
/* const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  ({ counter }) => ({
    number: counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
 */
