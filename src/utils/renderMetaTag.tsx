import { links } from '~/routes';
import { staticImages } from '~/assets/images';

const image = staticImages.ogImage;
const title = 'Personal Portfolio | Tran Thien Thanh';
const desc = 'This project is my portfolio which features some of my skills, GitHub projects, and my resume.';
const keywords = 'portfolio, Tran Thien Thanh, React, HTML, CSS, SCSS, TypeScript, JavaScript';
const contentType = 'text/html; charset=utf-8';

const createMetaTag = ({
    httpEquiv,
    name,
    content,
    property,
}: {
    httpEquiv?: string;
    name?: string;
    content?: string;
    property?: string;
}) => {
    const meta = document.createElement('meta');
    name && (meta.name = name);
    property && meta.setAttribute('property', property);
    httpEquiv && (meta.httpEquiv = httpEquiv);
    content && (meta.content = content);
    document.getElementsByTagName('head')[0].appendChild(meta);
};

const dataMeta = [
    {
        name: 'title',
        content: title,
    },
    {
        name: 'description',
        content: desc,
    },
    {
        name: 'keywords',
        content: keywords,
    },
    {
        name: 'robots',
        content: 'index, follow',
    },
    {
        httpEquiv: 'Content-Type',
        content: contentType,
    },
    {
        httpEquiv: 'language',
        content: 'English',
    },
    {
        property: 'og:type',
        content: 'website',
    },
    {
        property: 'og:url',
        content: links.url,
    },
    {
        property: 'og:title',
        content: title,
    },
    {
        property: 'og:description',
        content: desc,
    },
    {
        property: 'og:image',
        content: image,
    },
    {
        property: 'twitter:card',
        content: 'summary_large_image',
    },
    {
        property: 'twitter:url',
        content: links.url,
    },
    {
        property: 'twitter:title',
        content: title,
    },
    {
        property: 'twitter:description',
        content: desc,
    },
    {
        property: 'twitter:image',
        content: image,
    },
];

const renderMetaTags = () => {
    dataMeta.forEach((meta) => {
        createMetaTag(meta);
    });
};

export default renderMetaTags;
