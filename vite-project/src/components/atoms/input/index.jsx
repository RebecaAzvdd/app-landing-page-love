import React from 'react';

const Input = ({ label, placeholder, onChange, value, type = "text", icon, width = "100%" }) => {

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        width: width,
        marginBottom: '15px'
    };

    const inputWrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #D7CCC8', 
        borderRadius: '8px',
        backgroundColor: '#FFF',
        padding: '0 12px'
    };

    const inputStyle = {
        border: 'none',
        outline: 'none',
        padding: '12px 0',
        flex: 1,
        color: '#3E2723',
        fontSize: '14px',
        background: 'transparent'
    };

    return (
        <div style={containerStyle}>
            {label && (
                <label style={{ color: '#5D4037', fontWeight: 'bold', fontSize: '14px'}}>
                    {label}
                </label>
            )}

            <div style={inputWrapperStyle}>
                {icon && (
                    <img
                        src={icon}
                        alt="icon"
                        style={{width: '18px', height: '18px', marginRight: '8px', opacity: 0.7 }}
                    />
                )}

                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    style={inputStyle}
                />
            </div>   
        </div>
    );
};

export default Input;