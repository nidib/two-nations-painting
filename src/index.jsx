import React from 'react';
import { hydrate, render } from 'react-dom';
import App from 'app';
import 'styles';

const rootElement = document.getElementById('root');
const rootHasChildren = rootElement.hasChildNodes();
let renderer = render;

if (rootHasChildren) {
	renderer = hydrate;
}

renderer(<App />, rootElement);