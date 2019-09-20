import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
    <Typing>
        I am... a designer.
        <Typing.Backspace count={11} delay={3000} speed={80} />
        a developer.
        <Typing.Backspace count={12} delay={3000} speed={80} />
        an explorer.
        <Typing.Backspace count={23} delay={3000} speed={80} />
        I am Kim Vo.
        <Typing delay={3000} speed={80} />
    </Typing>
);



export default AnimatedTypingComponent;