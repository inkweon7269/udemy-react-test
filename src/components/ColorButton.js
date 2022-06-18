import React, {useState} from 'react';

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

const ColorButton = () => {

    const [disabled, setDisabled] = useState(false)
    const [buttonColor, setButton] = useState('MediumVioletRed');
    const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

    return (
        <div>
            <button
                style={{backgroundColor: disabled ? 'gray' : buttonColor, color: 'white'}}
                onClick={() => setButton(newButtonColor)}
                disabled={disabled}
            >
                Change to {replaceCamelWithSpaces(newButtonColor)}
            </button>

            <input
                id="disable-button-checkbox"
                type="checkbox"
                aria-checked={disabled}
                defaultChecked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
            />
            <label htmlFor="disable-button-checkbox">Disable Button</label>
        </div>
    );
};

export default ColorButton;