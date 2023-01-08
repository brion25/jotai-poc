import React from "react";
import {createBrowserRouter} from 'react-router-dom'

import { Home } from './Home'
import { Messages } from './Messages'
import { Root } from './Root'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/messages/:userId',
                element: <Messages />
            }
        ]
    }
])

export default router