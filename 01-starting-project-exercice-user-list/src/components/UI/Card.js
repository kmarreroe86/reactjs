import classses from './Card.module.css';

const Card = (props) => {

    return(
        <div className={`${classses.card} ${props.className}`}>
            {/* returns the content is passed inside the tags where the component is used */}
            {props.children}
        </div>
    );

};

export default Card;
