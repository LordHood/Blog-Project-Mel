import React, {useEffect, useState} from 'react';
import { Layout } from '../components';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import "@fontsource/playfair-display";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
