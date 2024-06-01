// Change title's website to title's current Page

// Type of function updateTitle
type updateTitleProps = (title: string) => void;

// get Title of website
const currentTitle = document.getElementsByTagName('title')[0].innerText;

// update title's website
const updateTitle: updateTitleProps = (title) => {
    document.getElementsByTagName('title')[0].innerText = title + ' | ' + currentTitle;
};

export default updateTitle;
