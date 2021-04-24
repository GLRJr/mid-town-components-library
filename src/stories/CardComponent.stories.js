import React from 'react';
import { storiesOf } from '@storybook/react';
import CardComponent from '../components/CardComponent/CardComponent';

const stories = storiesOf('CardComponent', module);

stories.add('App', () => {
    return (
    <CardComponent />
    );
});