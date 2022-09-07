import { Grid } from '@mui/material';
import React from 'react';
import HighlightCard from './HighlightCard';

export default function Highlight({ report }) {
    // lay ra phan tu cuoi cung cua report
    const data = report && report.length ? report[report.length - 1] : [];
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed',
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered',
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'death',
        },
    ];

    return (
        <Grid style={{ marginBottom: 20 }} container spacing={3}>
            {summary.map((item, index) => (
                <Grid key={index} item sm={4} xs={12}>
                    <HighlightCard title={item.title} count={item.count} type={item.type} />
                </Grid>
            ))}
        </Grid>
    );
}
