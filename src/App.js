import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import moment from 'moment';
import 'moment/locale/vi';

import { getCountries, getReportByCountry } from './apis';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';

moment.locale('vi');

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountryID, setSelectedCountryID] = useState('');
    const [report, setReport] = useState([]);

    useEffect(() => {
        getCountries().then((res) => {
            // console.log({ res });
            setCountries(res.data);

            setSelectedCountryID('vn');
        });
    }, []);

    const handleChange = (e) => {
        setSelectedCountryID(e.target.value);
    };

    useEffect(() => {
        if (selectedCountryID) {
            const { Slug } = countries.find(
                (country) => country.ISO2.toLowerCase() === selectedCountryID,
            );

            // call API
            getReportByCountry(Slug).then((res) => {
                // xoa di item cuoi cung trong array res.data
                res.data.pop();
                setReport(res.data);
            });
        }
    }, [countries, selectedCountryID]);

    return (
        <Container style={{ marginTop: 20 }}>
            <Typography variant="h2" component="h2">
                Số liệu COVID-19
            </Typography>
            <Typography>{moment().format('LLL')}</Typography>
            <CountrySelector
                countries={countries}
                handleChange={handleChange}
                value={selectedCountryID}
            />
            <Highlight report={report} />
            <Summary selectedCountryId={selectedCountryID} report={report} />
        </Container>
    );
}

export default App;
