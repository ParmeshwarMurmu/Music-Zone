import React from 'react'
import { WithoutSidebarLayoutProps } from '../Interfaces/Interfce';

export const WithoutSideBarLayout : React.FC<WithoutSidebarLayoutProps> = ({ children }) => {
    return <div>{children}</div>;
}
