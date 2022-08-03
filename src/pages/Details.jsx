import React from 'react';

export const Details = ({match}) => {
    return (
        <div>
            Country: {match.params.name}
        </div>
    );
};