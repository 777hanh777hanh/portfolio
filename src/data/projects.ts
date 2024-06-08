import { staticImages } from '~assets/images';
import { projectsLink } from '~/routes';

type projectsProps = {
    title: string;
    description?: string;
    image: string;
    demo?: string;
    src?: string;
};

const projects: projectsProps[] = [
    {
        title: 'Static Website',
        description:
            'Developed a static website using HTML, SCSS, and JavaScript based on the design provided in Figma. The project aimed to translate the design prototype into a functional website, focusing on optimizing both structure and performance.',
        image: staticImages.staticWebsite,
        demo: projectsLink.staticWebsite.demo,
        src: projectsLink.staticWebsite.src,
    },
    // {
    //     title: 'Laptop Sale Application',
    //     description: 'A mobile application for selling laptops using Flutter and Firebase technologies.',
    //     image: staticImages.portfolio,
    //     src: projectsLink.portfolio.src,
    // },
    {
        title: 'Real-time Web chat Application',
        description:
            'This is a real-time web chat application enabling users to create accounts and engage in live conversations. Enhanced proficiency in Node.js and React.js.',
        image: staticImages.chatify,
        src: projectsLink.chatify.src,
    },
    {
        title: 'Learning tracker web Application',
        description: 'Web application to track ongoing learning progress and manage study notes.',
        image: staticImages.learnit,
        demo: projectsLink.learnit.demo,
        src: projectsLink.learnit.src,
    },
    {
        title: 'Besnik Landing Page',
        description: 'My personal landing page build base on figma file. ',
        image: staticImages.besnik,
        demo: projectsLink.besnik.demo,
        src: projectsLink.besnik.src,
    },
    {
        title: 'Todo Application',
        description:
            'This website is a robust to-do application built using Redux for state management. It allows users to efficiently manage their tasks by adding, editing, and deleting tasks. Additionally, users can filter tasks based on their status to easily track their progress.',
        image: staticImages.todoApp,
        demo: projectsLink.todoApp.demo,
        src: projectsLink.todoApp.src,
    },
];

export default projects;
