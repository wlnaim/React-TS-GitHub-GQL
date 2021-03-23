import React from 'react';

import packageJson from '../package.json';

import { SharedEmoji } from './components/SharedEmoji';

/**
 * Main app config
 */
export const config = {
    repo: {
        name: packageJson.name,
        url: packageJson.name,
    },
};

interface RoutesNode {
    label: React.ReactNode;
    link: string;
}

export interface Routes {
    repos: RoutesNode;
}

/**
 * Routes
 */
export const routes: Routes = {
    repos: {
        label: (
            <>
                <SharedEmoji label="Box">📦</SharedEmoji> My repositories
            </>
        ),
        link: '/',
    },
    // starred: {
    //     label: (
    //         <>
    //             <SharedEmoji label="Star">🌟</SharedEmoji> Stars
    //         </>
    //     ),
    //     link: '/Stars',
    // },
};
