import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Navigation/configuration';
import MyProfile from './MyProfile';

describe('test missions component', () => {
    it('Render missions row', () => {
        const app = renderer
        .create(
            <Provider store={store}>
                <MyProfile />
            </Provider>
        ).toJSON();
        expect(app).toMatchSnapshot()
    })
})