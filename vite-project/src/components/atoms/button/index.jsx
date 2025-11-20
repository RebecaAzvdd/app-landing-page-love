import React from "react";

const Button = ({ children, onClick, icon, width = "auto", type = "button", disabled = false }) => {

    const style = {
        backgroundColor: disabled ? '#D7CCC8' : '#9E7F68',
        color: '#FFF',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: width,
        transition: 'opacity 0.2s',
        opacity: disabled ? 0.7 : 1
    };
    
    return (
        <button type={type} onClick={onClick} style={style} disabled={disabled}>
            {icon && <img src={icon} alt="" style={{ width: '20px', height: '20px'}} />}
            {children}
        </button>
    );
};

export default Button;