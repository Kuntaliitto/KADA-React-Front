import { useState } from 'react';
import '../src/styles/App.css';
import withApollo from '../src/components/apollo';

const CustomApp = ({ Component, pageProps, apollo }) => {
    const [ siteId, setSiteId ] = useState('turku');

    return <Component site={ siteId } setSiteId={ setSiteId } { ...pageProps} />
}

export default withApollo({ ssr: true })(CustomApp);