import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';

export default function CountrySelector({ value, handleChange, countries }) {
    return (
        <FormControl style={{marginTop:10,marginBottom:10}}>
            <InputLabel htmlFor="country-selector" shrink>
                Quốc gia
            </InputLabel>
            <NativeSelect
                value={value}
                onChange={handleChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector',
                }}
            >
                {countries.map((country,index) => {
                    return <option key={index} value={country.ISO2.toLowerCase()}>{country.Country}</option>;
                })}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    );
}
