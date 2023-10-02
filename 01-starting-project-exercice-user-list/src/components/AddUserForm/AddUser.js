import { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../ErrorModal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const initialuserData = {
    id: "",
    name: "",
    age: ""
};

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    
    const [error, setError] = useState();
//  const [userData, setUserData] = useState(initialuserData);

    const cleanForm = () => {
        // setUserData(initialuserData)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (!enteredName || !enteredAge) {

            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Age must be bigger than 0."
            });
            return;
        }


        props.onUserAdded({name: enteredName, age: enteredAge});
        // props.onUserAdded(userData);
        cleanForm();
    };

    // const inputNameChangeHandler = (value) => {
    //     setUserData((prevUserData) => {
    //         return {
    //             id: prevUserData.id,
    //             name: value,
    //             age: prevUserData.age
    //         };
    //     });
    // };

    // const inputAgeChangeHandler = (value) => {
    //     setUserData((prevUserData) => {
    //         return {
    //             id: prevUserData.id,
    //             name: prevUserData.name,
    //             age: +value
    //         };
    //     });
    // };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onOkClick={errorHandler} />}
            <Card className={classes.input}>
                <form>
                    <label htmlFor="user-name">Username</label>
                    <input type="text" id="user-name"
                        ref={nameInputRef} /* store the html input element. can be used for reading the value */
                        />

                    <label htmlFor="user-age">Age (Years)</label>
                    <input type="number" id="user-age"
                        ref={ageInputRef} /* store the html input element. can be used for reading the value */
                        />

                    <Button onClick={addUserHandler}> Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
