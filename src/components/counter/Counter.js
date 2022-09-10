import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, byAmount } from '../../redux/state/counter/counterSlice';


const Counter = () => {

    const count = useSelector( ( state ) => state.counter.value );
    const dispatch = useDispatch();
    const inputCounter = useRef('');

    return (
        <>
            <div className='mh-card__header'>
                <h1>Learning Redux</h1>
            </div>
            <div className='mh-card__content'>
                <h2>{count}</h2>
                <div className='mh-card__actions'>
                    <button
                        onClick = { () => dispatch( increment() ) }
                    >Increment</button>
                    <button
                        onClick = { () => dispatch( decrement() ) }
                    >Decrement</button>
                </div>
                <div className='mh-card__custom-action'>
                    <input type="text" name="" id="" ref={ inputCounter }/>
                    <button
                    onClick={
                        () => {
                            dispatch( byAmount( Number( inputCounter.current.value ) ) );
                        }
                    }
                    >Update</button>
                </div>
            </div>
        </>
    )
}

export default Counter