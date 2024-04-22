import { create } from '@storybook/theming/create';
import projectConfig from "../project.config";

export default create({
    base: 'light',
    brandTitle: projectConfig.label,
});