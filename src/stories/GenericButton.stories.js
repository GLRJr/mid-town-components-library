import React from 'react';
import { storiesOf } from '@storybook/react';
import GenericButton  from '../components/GenericButton/GenericButton';

const stories = storiesOf('GenericButton', module);

stories.add('App', () => {
    return (
    <GenericButton />
    );
});