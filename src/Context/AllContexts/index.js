import React from 'react';
import { ThemeProvider } from '../Theme';
import { LanguageeProvider } from '../Language';


const AllContexts = ({ children }) => (
    <>
        <ThemeProvider>
            <LanguageeProvider>
                {children}
            </LanguageeProvider>
        </ThemeProvider>
    </>
);

export default AllContexts;
