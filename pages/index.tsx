import React from 'react';
import App from '../src/App';
import CustomApp from './_app';

export default function Site(props:any) {
  return <CustomApp Component={App} pageProps={ props } />
}
