import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export const DollarInput = ({ id, labelName, targetValue, handleChange, disabledVal}) => {
    return (
        <FormControl className="mortgageItem" style={{ "width": "350px", "margin": "8px" }}
            size="small" variant="outlined">
            <InputLabel htmlFor={id}>{labelName}</InputLabel>
            <OutlinedInput
                id={id}
                value={targetValue}
                onChange= {handleChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                labelWidth={100}
                size="small"
                disabled={disabledVal}
            />
        </FormControl>
    )
}