import Typewriter from 'typewriter-effect';

const TextAnimation = () => {
    const textList = ['Web Developer', 'Javascript Developer', 'Front-end Developer', 'Freelancer'];

    return (
        <div className="TypeEffect">
            <Typewriter
                options={{
                    strings: textList,
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 30,
                }}
            />
        </div>
    );
};

export default TextAnimation;
