import React from "react";
import { IMaskInput } from "react-imask";
import { TextFieldElement } from "react-hook-form-mui";

const MaskedInput = (props) => {
    const { mask, radix, InputProps, unmask, definitions , ...otherProps } = props;

    const defaultDefinitions = {
        a: /^[a-z]$/,
        A: /^[A-Z]$/,
        z: /^[a-zA-Z]$/,
    };

    const allDefinitions = Object.assign({}, defaultDefinitions, definitions);

    const MaskCustom = React.forwardRef(function MaskCustom(props, ref) {
        return <IMaskInput {...props} mask={mask} radix={radix} lazy={true} inputRef={ref} definitions={allDefinitions} unmask={unmask} />;
    });

    return <TextFieldElement {...otherProps} InputProps={{ ...InputProps, inputComponent: MaskCustom }} />;
};

export default MaskedInput;
