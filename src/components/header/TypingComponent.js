import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
    <Typing>
        I am... curious.
        <Typing.Backspace count={8} delay={3000} speed={80} />
        an engineer.
        <Typing.Backspace count={23} delay={3000} speed={80} />
        I am Kim Vo.
        <Typing delay={3000} speed={80} />
    </Typing>
);



export default AnimatedTypingComponent;