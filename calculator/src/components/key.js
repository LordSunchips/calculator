import './styles.css';

export default function numberKey({ number }) {
    return (
        <div className="numberKey">
            <button className='number'>{number}</button>
        </div>
    )
}