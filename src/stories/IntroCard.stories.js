import React from 'react';
import { storiesOf } from '@storybook/react';
import IntroCard from '../components/IntroCard/IntroCard';



const stories = storiesOf('IntroCard', module);


stories.add('App', () => {
    return (
    <IntroCard />
    );
});