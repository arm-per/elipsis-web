import React from 'react';
import {Helmet} from 'react-helmet'
import { useLocation } from 'react-router-dom';

const Meta = ({ title, description, image }: { title: string; description: string; image: string }): React.ReactElement => {
  const location = useLocation();

  return (
    <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://revistaelipsis.com.mx/${location.pathname}`} />
        <meta property="og:site_name" content="Elipsis Digital" />
        <meta property="og:locale" content="es_MX" />
    </Helmet>
  );
};

export { Meta };
