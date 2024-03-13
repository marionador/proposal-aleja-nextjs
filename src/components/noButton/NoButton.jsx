import '../joinButton/joinButton.css';
import Swal from 'sweetalert2';

export function NoButton(){
    const handleClick = () => {
        let timerInterval;
        Swal.fire({
            icon: 'warning',
            title: "¿Q HACESSSS!?!?",
            html: "Te dejo pensartelo mejor...",
            timer: 2000,
            timerProgressBar: true,
            willClose: () => {
                clearInterval(timerInterval);
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    };

    return(
        <>
            <button  className="joinButton animate-on-scroll" title="Registrarse" style={{marginTop: '15px'}} onClick={handleClick}>
            No
            <svg height="32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.53656 6.9226 1.20176 11.2639 4.81373L9.81064 8.20467C9.6718 8.52862 9.77727 8.90554 10.0641 9.1104L12.8973 11.1341L10.4306 14.012C10.1755 14.3096 10.1926 14.7533 10.4697 15.0304L12.1694 16.7302L11.2594 20.3702C10.5043 20.1169 9.74389 19.5275 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z" fill="red"/>
                <path d="M12.8118 20.3453C13.5435 20.0798 14.2807 19.5081 15.0383 18.9109C15.3153 18.6925 15.6019 18.4717 15.8937 18.2468C18.7018 16.0833 22 13.5422 22 9.1371C22 4.62221 17.259 1.32637 12.9792 4.61919L11.4272 8.24067L14.4359 10.3898C14.6072 10.5121 14.7191 10.7007 14.7445 10.9096C14.7699 11.1185 14.7064 11.3284 14.5694 11.4882L12.0214 14.4609L13.5303 15.9698C13.7166 16.1561 13.7915 16.4264 13.7276 16.682L12.8118 20.3453Z" fill="red"/>
            </svg>
            </button>
        </>
        )
    }