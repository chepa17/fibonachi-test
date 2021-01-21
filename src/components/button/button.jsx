import './button.css';
import classNames from "classnames";

const Button = ({toggle, children, isActive}) => {
    const onClick = () => {
        if (!isActive) {
            toggle();
        }
    }
    return (
        <div class={classNames('button', {'-active': isActive})} type='button' onClick={onClick}>
            {children}
        </div>
    )
}

export default Button;