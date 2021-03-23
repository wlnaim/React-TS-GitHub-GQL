import React from 'react';

import styled from '../utilities/styled';

const SearchRoot = styled.div<{  }>`
    align-items: center;
    font-size: ${props => props.theme.fontSizes.small};
    line-height: ${props => props.theme.lineHeights.single};
    padding-bottom: 10px;
    margin-left: ${props => props.theme.space.half};
    border-radius: 100%;
    display="flex";
`;

export const Search: React.FC = (
    props,
): React.ReactElement | null => {
    return (
        <SearchRoot
            role="search"
            {...props}
        >
            <input name="search" id="search" type="text" placeholder="Search..." />
        </SearchRoot>
    );
};
