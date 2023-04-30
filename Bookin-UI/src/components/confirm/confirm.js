import { Link, useNavigate } from 'react-router-dom';
import { SelectSeat } from '../Reservation/SelectSeat/SelelctSeat';
import './confirm.css'



export function Confirm(props) {
    console.log(props);
    let navigate = useNavigate();
    function handleCnf() {
        navigate('/ticket')
    }
    function handleEdit() {
        navigate('/seat');
    }

    const styles = {

    }
    return (
        <div className='body'>
            <div>
                <div className="container" style={styles}>
                    <h1>you Selected 5 ticket</h1>
                    <h3>click ok to continue? </h3>
                    <div className='btn-cnf'>
                        <button className="cnf-btn" onClick={handleEdit}>cancel</button>
                        <button className="cnf-btn" onClick={handleCnf}>ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}