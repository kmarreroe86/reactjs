import classes from './ErrorModal.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ErrorModal = (props) => {

    const dissMissModal = () => {
        props.onOkClick();
    };

    return (
        <div>
            <div className={classes.backdrop} onClick={dissMissModal}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>

                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>

                <footer className={classes.actions}>
                    <Button onClick={dissMissModal}>Ok</Button>
                </footer>
            </Card>
        </div>

    );

};

export default ErrorModal;
