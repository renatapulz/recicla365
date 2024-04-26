import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

function Buttom({ buttonText, onClick }) {
    return (
        <Button variant="contained" style={{ backgroundColor: '#36909A' }} onClick={onClick}>
            {buttonText}
        </Button>
    )
}

Buttom.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Buttom;


