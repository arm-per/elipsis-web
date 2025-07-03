import { ReactElement, ReactNode, createContext } from 'react';

import { useAccessibility, UseAccessibilityInterface } from '../Hooks/useAccessibility';

export const AccessibilityContext = createContext<UseAccessibilityInterface>({} as UseAccessibilityInterface);

export const Accessibility = ({ children }: {children: ReactNode} ): ReactElement => {
    const accesibility = useAccessibility();

    return <AccessibilityContext.Provider value={accesibility}>
        {children}
    </AccessibilityContext.Provider>
}
