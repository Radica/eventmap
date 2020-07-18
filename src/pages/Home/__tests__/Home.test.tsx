// import React from 'react';
// import { render } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import axios from 'axios';

// import createMockStore from '../../../utils/mockStore';
// import { initialState as initialHomeState } from '../../../reducers/home';
// import { GET_GEOM } from '../../../types';

// import { Home } from '../Home';

jest.mock('axios');

describe('<Home />', () => {
    // const getWrapper = (
    //     props: object,
    //     { ProviderWithStore } = createMockStore({ home: initialHomeState })
    // ) =>
    //     render(
    //         <ProviderWithStore>
    //             <MemoryRouter>
    //                 {/* @ts-ignore */}
    //                 <Home {...props} />
    //             </MemoryRouter>
    //         </ProviderWithStore>
    //     );
    // const getComponent = (
    //     props: object,
    //     mockStore?: ReturnType<typeof createMockStore>
    // ) => getWrapper(props, mockStore).container.firstChild;

    it('should call fetchGeomIfNeeded when componentDidMount', async () => {
        // const mockStore = createMockStore({ home: initialHomeState });
        //
        // // @ts-ignore
        // axios.get.mockResolvedValue({});
        //
        // getWrapper(null, mockStore);
        // expect(mockStore.getActions()).toEqual([
        //     {
        //         type: GET_GEOM,
        //         payload: {
        //             request: {
        //                 method: 'GET',
        //                 url: `/pods/1/geom`,
        //             },
        //         },
        //     },
        // ]);
    });

    it('renders the loading status if data invalid', () => {
        // const homeState = { readyStatus: 'invalid' };
        // const mockStore = createMockStore({ home: homeState });
        //
        // // @ts-ignore
        // axios.get.mockResolvedValue({});
        //
        // expect(getComponent(null, mockStore)).toMatchSnapshot();
    });

    it('renders the loading status if requesting data', () => {
        // const homeState = { readyStatus: 'request' };
        // const mockStore = createMockStore({ home: homeState });
        //
        // // @ts-ignore
        // axios.get.mockResolvedValue({});
        //
        // expect(getComponent(null, mockStore)).toMatchSnapshot();
    });

    it('renders an error if loading failed', () => {
        // const homeState = { readyStatus: 'failure' };
        // const mockStore = createMockStore({ home: homeState });
        //
        // // @ts-ignore
        // axios.get.mockResolvedValue({});
        //
        // expect(getComponent(null, mockStore)).toMatchSnapshot();
    });

    it('renders the <UserList /> if loading was successful', () => {
        // const homeState = {
        //     readyStatus: 'success',
        //     list: [{ id: '1', name: 'Welly' }],
        // };
        // const mockStore = createMockStore({ home: homeState });
        //
        // // @ts-ignore
        // axios.get.mockResolvedValue({});
        //
        // expect(getComponent(null, mockStore)).toMatchSnapshot();
    });
});
