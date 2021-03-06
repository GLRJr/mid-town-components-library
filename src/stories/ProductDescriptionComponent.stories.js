import React from 'react';
import { storiesOf } from '@storybook/react';

import { Requirements } from '../components/Requirements';
import { ProductDescriptionComponent } from '../components/ProductDescriptionComponent';
import { ProductLister } from '../components/ProductLister';

const stories = storiesOf('ProductDescription Test', module);

stories.add('App', () => {
    return (
    <ProductDescriptionComponent />
    );
});