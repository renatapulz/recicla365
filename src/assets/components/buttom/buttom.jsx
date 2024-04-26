import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

function CustomButton({ buttonText, onClick, type = "buttom" }) {
    return (
        <Button variant="contained" type={type} style={{ backgroundColor: '#36909A' }} onClick={onClick}>
            {buttonText}
        </Button>
    )
}

CustomButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit'])
};

export default CustomButton;


