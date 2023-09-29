import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../ErrorModal/ErrorModal';

const initialuserData = {
    id: "",
    name: "",
    age: ""
};

const AddUser = (props) => {

    const [userData, setUserData] = useState(initialuserData);
    const [error, setError] = useState();

    const cleanForm = () => {
        setUserData(initialuserData)
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        if (!userData.name || !userData.age) {
            
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }

        if (+userData.age < 1) {
            setError({
                title: "Invalid age",
                message: "Age must be bigger than 0."
            });
            return;
        }


        props.onUserAdded(userData);
        cleanForm();
    };

    const inputNameChangeHandler = (value) => {
        setUserData((prevUserData) => {
            return {
                id: prevUserData.id,
                name: value,
                age: prevUserData.age
            };
        });
    };

    const inputAgeChangeHandler = (value) => {
        setUserData((prevUserData) => {
            return {
                id: prevUserData.id,
                name: prevUserData.name,
                age: +value
            };
        });
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onOkClick={errorHandler} />}
            <Card className={classes.input}>
                <form>
                    <label htmlFor="user-name">Username</label>
                    <input type="text" id="user-name"
                        onChange={(event) => inputNameChangeHandler(event.target.value)}
                        value={userData.name} />

                    <label htmlFor="user-age">Age (Years)</label>
                    <input type="number" id="user-age"
                        onChange={(event) => inputAgeChangeHandler(event.target.value)}
                        value={userData.age} />

                    <Button onClick={addUserHandler}> Add User</Button>
                </form>
            </Card>
        </div>

    );
};

export default AddUser;
