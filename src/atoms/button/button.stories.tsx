import {ThemedButton} from './button.themed';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Atoms/Button',
    component: ThemedButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: [],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Button = {
    args: {
        label: 'Click me'
    },
};

export const Button2 = {
    args: {
        label: 'Click me to'
    },
};