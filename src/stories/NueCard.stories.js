import React from 'react';
import { storiesOf } from '@storybook/react';
import IntroCard from '../components/IntroCard/IntroCard';
import NeuCard from '../components/NueCard/NueCard';



const stories = storiesOf('NueCard', module);


stories.add('App', () => {
    return (
    <NeuCard />
    );
});