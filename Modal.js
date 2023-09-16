const Modal = () => {

    const mode = 'DELETE this book from'

    return (
        <div className="overlay">
            <div className="modal">
                <div>
                    <h3>Warning! The following action will PERMANENTLY {mode} our records. Are you absolutely sure?</h3>
                    <button>X</button>
                </div>
                <input type="submit"/>
            </div>
        </div>
    )
}

export default Modal