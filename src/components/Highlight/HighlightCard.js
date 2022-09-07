import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


export default function HighlightCard({ title, count, type }) {
    
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography component="p" variant="body2">
                        {title}
                    </Typography>
                    <Typography component="span" variant="body2">
                        {count}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
