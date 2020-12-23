import React from 'react';
import Products from '../components/Products.jsx';
import initialState from '../initialState.js';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Conf Merch - Productos</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@TU_USER" />
                <meta name="twitter:creator" content="@TU_USER" />
                <meta name="twitter:title" content="Conf Store" />
                <meta name="twitter:description" content="Conf Store" />
                <meta
                    name="twitter:image"
                    content="https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/matiasnnr%2Fmnnr.jpeg?alt=media&token=f824195c-e1b5-4a41-b1ef-6b2daff4280e"
                />
                <meta property="og:title" content="Conf Store" />
                <meta property="og:description" content="Conf Store" />
                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/matiasnnr-repository.appspot.com/o/matiasnnr%2Fmnnr.jpeg?alt=media&token=f824195c-e1b5-4a41-b1ef-6b2daff4280e"
                />
                <meta property="og:url" content="platzistore.xyz" />
                <meta property="og:site_name" content="Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
            </Helmet>
            <Products products={initialState.products} />
        </>
    )
};

export default Home;