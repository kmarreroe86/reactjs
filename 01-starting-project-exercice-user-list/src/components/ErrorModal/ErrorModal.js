import ReactDom from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.dissMissModal} />
};

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
            <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>
            <Button onClick={props.dissMissModal}>Ok</Button>
        </footer>
    </Card>
};

const ErrorModal = (props) => {

    const dissMissModal = () => {
        props.onOkClick();
    };

    return (
        <> {/* Shortcut for React.Fragment */}

            {/* Renders or Portal this component where this id is */}
            {ReactDom.createPortal(
                <Backdrop dissMissModal={dissMissModal} />,
                document.getElementById("backdrop-root"))}

                {ReactDom.createPortal(
                    <ModalOverlay dissMissModal={dissMissModal} title={props.title} message={props.message} />,
                    document.getElementById("modal-root"))}
        </> /* Shortcut for React.Fragment */

    );

};

export default ErrorModal;
