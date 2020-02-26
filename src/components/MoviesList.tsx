import React from 'react';

export function MovieItem(i: number, name: string) {
    return(<li key={i}>{name}</li>);
}