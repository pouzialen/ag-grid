import React from 'react';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import { dependencies } from './package.json';
import { siteMetadata } from './gatsby-config';

/* It is better to pull these files directly from a CDN rather than bundling them ourselves. However, the packages are
 * still required to be installed as they are used elsewhere, so we import the versions here to ensure we are
 * consistent. */
export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    setHeadComponents([
        <link
            key="fontawesome"
            rel="stylesheet"
            href={`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-svg-core@${dependencies['@fortawesome/fontawesome-svg-core']}/styles.min.css`}
            crossOrigin="anonymous" />,
        <link
            key="roboto"
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fontsource/roboto@4.1.0/index.min.css"
            crossOrigin="anonymous" />,
    ]);

    setPostBodyComponents([
        <script
            key="jquery"
            src={`https://cdnjs.cloudflare.com/ajax/libs/jquery/${dependencies['jquery']}/jquery.slim.min.js`}
            crossOrigin="anonymous" />,
        <script
            key="bootstrap"
            src={`https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/${dependencies['bootstrap']}/js/bootstrap.bundle.min.js`}
            crossOrigin="anonymous" />
    ]);
};

export const wrapPageElement = ({ element, props: { location: { pathname } } }) => {
    if (['/example-runner/', '/404/', '/404.html'].some(exclude => withPrefix(exclude) === pathname)) {
        return element;
    }

    const canonicalUrl = `${siteMetadata.siteUrl}${pathname || '/'}`;

    return (
        <>
            <Helmet link={[{ rel: 'canonical', key: canonicalUrl, href: canonicalUrl }]} />
            {element}
        </>
    );
};