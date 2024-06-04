import classNamesBind from 'classnames/bind';
import classNamesDedupe from 'classnames/dedupe';

const useClassNames = (styles: classNamesBind.Binding | undefined) => {
    // Bind classnames to the provided 'thisarg'
    const cxBind = classNamesBind.bind(styles);

    // Return a function that generates de-duped class names
    return (...classes: (string | { [key: string]: string | boolean | undefined })[]) => {
        // Bind the classnames and dedupe the resulting class names
        const cxDedupe = classNamesDedupe(cxBind(...classes));

        return cxDedupe;
    };
};

export default useClassNames;
