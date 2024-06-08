const createLinkCanonical = (url: string) => {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
};

const renderLinkCanonical = () => {
    const currentCanonicalLink = document.querySelector('link[rel="canonical"]');
    if (currentCanonicalLink) currentCanonicalLink.remove();
    createLinkCanonical(window.location.href);
};

export default renderLinkCanonical;
