import React from "react";

const Button = ({ children, onClick, icon, width = "auto", type = "button", disabled = false, variant = "primary" }) => {

    const colors = {
        primary: '#9E7F68', 
        secondary: '#FFF',
        disabled: '#D7CCC8'
    };

    const style = {
        backgroundColor: variant === 'light' ? colors.secondary : (disabled ? colors.disabled : colors.primary),
        color: variant === 'light' ? colors.primary : '#FFF',
        border: variant === 'light' ? `1px solid ${colors.primary}` : 'none',
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