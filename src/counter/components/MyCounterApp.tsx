import { useCounter } from '../hooks/useCounter'

export const MyCounterApp = () => {

    const { counter, handleAdd, handleSubstract, handleReset } = useCounter()

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <h1>counter: {counter}</h1>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSubstract}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
