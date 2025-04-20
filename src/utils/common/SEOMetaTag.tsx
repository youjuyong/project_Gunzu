import { Helmet     } from 'react-helmet-async';
import { HelmetType } from './types';

const MetaTag = ( props: HelmetType ) => {
    return (
      <Helmet>
        <title>{props.title}</title>

        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="title" content={props.title} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:site_name" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.ogimgsrc} />
        <meta property="og:url" content={props.ogUrl} />

        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.twitterImgsrc} />

      </Helmet>
    );
};

export default  MetaTag;