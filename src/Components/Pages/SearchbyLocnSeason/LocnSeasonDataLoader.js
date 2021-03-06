import React, { useEffect } from 'react';

function LocnSeasonDataLoader({ pathType, keyword, setData }) {
    //fetches data from my api and uses setData to save the data it gets from the api
    //construct url and url encode it and then use that variable in the fetch
    useEffect(() => {
        if (pathType && pathType !== '' && keyword && keyword !== '') {
            const url = encodeURI(`http://localhost:3000/${pathType}/${keyword}`);
            getData(setData, url);
        }
    });

    return (
        <></>
    );
}

function getData(setData, url) {
    (async () => {
        const response = await fetch(url);
        const jsObject = await response.json();
        setData(jsObject);
    })();
}

export default LocnSeasonDataLoader;