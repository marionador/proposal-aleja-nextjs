import './joinButton.css';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';

export default function JoinButton(){
    const handleClick = () => {
        confetti();
        showAlert()
    };

    const showAlert = () => {
        Swal.fire('Gracias <3',  
        '<img src="/gracias.jpg" style="max-width: 100%; max-height: 100%;" />');
    };

    return(
        <>
            <button  className="joinButton animate-on-scroll" title="Registrarse" onClick={handleClick}>
                Sí
                <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H24V24H0z" fill="none"></path>
                    <path
                    d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z">
                    </path>
                </svg>
            </button>
        </>
    )
}