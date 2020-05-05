import { useState } from 'react';
import '../src/styles/App.css';

export default function CustomApp({ Component, pageProps }) {
    const [ siteId, setSiteId ] = useState('turku');

    return <Component site={ siteId } setSiteId={ setSiteId } { ...pageProps} />
}
