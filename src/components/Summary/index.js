import React, { useState } from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';

import { getMapDataByCountryId } from '../../apis';
import HighMaps from '../Charts/HighMaps';
import LineChart from '../Charts/LineChart';

export default function Summary({ report, selectedCountryId }) {
    const [mapData, setMapData] = useState({});

    useEffect(() => {
        //'vn' , 'us'
        if (selectedCountryId) {
            getMapDataByCountryId(selectedCountryId)
                .then((res) => {
                    setMapData(res);
                })
                .catch((err) => console.log(err));
        }
    }, [selectedCountryId]);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LineChart data={report} />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <HighMaps mapData={mapData} />
                </Grid>
            </Grid>
        </div>
    );
}
