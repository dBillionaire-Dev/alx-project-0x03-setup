import { ReactNode } from "react";

interface PageRouteProps {
    pageRoute: string
}


export interface PageRouteProps {
    pageRoute: string;
}

interface LayoutProps {
    children: ReactNode;
}

export interface LayoutProps {
    children: ReactNode;
}

interface ButtonProps {
    buttonLabel: string
    buttonSize?: string
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
    action?: () => void
}

export interface ButtonProps {
    buttonLabel: string;
    buttonSize?: string;
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
    action?: () => void;
}
