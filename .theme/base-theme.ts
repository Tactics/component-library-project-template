import {Theme} from "./contracts/theme";

export const base_main_font = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
export const base_secondary_font = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';
export const base_tertiary_font = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const base_font_size_xs = '0.75rem';
export const base_line_height_xs = '1rem';

export const base_font_size_sm = '0.875rem';
export const base_line_height_sm = '1.25rem';

export const base_font_size_base = '1rem';
export const base_line_height_base = '1.5rem';

export const base_font_size_lg = '1.125rem';
export const base_line_height_lg = '1.75rem';

export const base_font_size_xl = '1.25rem';
export const base_line_height_xl = '1.75rem';

export const base_font_size_2xl = '1.5rem';
export const base_line_height_2xl = '2rem';

export const base_font_size_3xl = '1.875rem';
export const base_line_height_3xl = '2.25rem';

export const base_font_size_4xl = '2.25rem';
export const base_line_height_4xl = '2.5rem';

export const base_font_size_5xl = '3rem';
export const base_line_height_5xl = '1';

export const base_font_size_6xl = '3.75rem';
export const base_line_height_6xl = '1';

export const base_font_size_7xl = '4.5rem';
export const base_line_height_7xl = '1';

export const base_font_size_8xl = '6rem';
export const base_line_height_8xl = '1';

export const base_font_size_9xl = '8rem';
export const base_line_height_9xl = '1';

export const BaseTheme : Theme = {
    typography: {
      main: {
          xs: base_font_size_xs + '/' + base_line_height_xs  + ' ' + base_main_font,
          sm: base_font_size_sm + '/' + base_line_height_sm  + ' ' + base_main_font,
          base: base_font_size_base + '/' + base_line_height_base  + ' ' + base_main_font,
          lg: base_font_size_lg + '/' + base_line_height_lg  + ' ' + base_main_font,
          xl: base_font_size_xl + '/' + base_line_height_xl  + ' ' + base_main_font,
          "2xl": base_font_size_2xl + '/' + base_line_height_2xl  + ' ' + base_main_font,
          "3xl": base_font_size_3xl + '/' + base_line_height_3xl  + ' ' + base_main_font,
          "4xl": base_font_size_4xl + '/' + base_line_height_4xl  + ' ' + base_main_font,
          "5xl": base_font_size_5xl + '/' + base_line_height_5xl  + ' ' + base_main_font,
          "6xl": base_font_size_6xl + '/' + base_line_height_6xl  + ' ' + base_main_font,
          "7xl": base_font_size_7xl + '/' + base_line_height_7xl + ' ' + base_main_font,
          "8xl": base_font_size_8xl + '/' + base_line_height_8xl  + ' ' + base_main_font,
          "9xl": base_font_size_9xl + '/' + base_line_height_9xl  + ' ' + base_main_font,
      },
      secondary: {
          xs: base_font_size_xs + '/' + base_line_height_xs  + ' ' + base_secondary_font,
          sm: base_font_size_sm + '/' + base_line_height_sm  + ' ' + base_secondary_font,
          base: base_font_size_base + '/' + base_line_height_base  + ' ' + base_secondary_font,
          lg: base_font_size_lg + '/' + base_line_height_lg  + ' ' + base_secondary_font,
          xl: base_font_size_xl + '/' + base_line_height_xl  + ' ' + base_secondary_font,
          "2xl": base_font_size_2xl + '/' + base_line_height_2xl  + ' ' + base_secondary_font,
          "3xl": base_font_size_3xl + '/' + base_line_height_3xl  + ' ' + base_secondary_font,
          "4xl": base_font_size_4xl + '/' + base_line_height_4xl  + ' ' + base_secondary_font,
          "5xl": base_font_size_5xl + '/' + base_line_height_5xl  + ' ' + base_secondary_font,
          "6xl": base_font_size_6xl + '/' + base_line_height_6xl  + ' ' + base_secondary_font,
          "7xl": base_font_size_7xl + '/' + base_line_height_7xl + ' ' + base_secondary_font,
          "8xl": base_font_size_8xl + '/' + base_line_height_8xl  + ' ' + base_secondary_font,
          "9xl": base_font_size_9xl + '/' + base_line_height_9xl  + ' ' + base_secondary_font,
      },
      tertiary: {
        xs: base_font_size_xs + '/' + base_line_height_xs  + ' ' + base_tertiary_font,
        sm: base_font_size_sm + '/' + base_line_height_sm  + ' ' + base_tertiary_font,
        base: base_font_size_base + '/' + base_line_height_base  + ' ' + base_tertiary_font,
        lg: base_font_size_lg + '/' + base_line_height_lg  + ' ' + base_tertiary_font,
        xl: base_font_size_xl + '/' + base_line_height_xl  + ' ' + base_tertiary_font,
        "2xl": base_font_size_2xl + '/' + base_line_height_2xl  + ' ' + base_tertiary_font,
        "3xl": base_font_size_3xl + '/' + base_line_height_3xl  + ' ' + base_tertiary_font,
        "4xl": base_font_size_4xl + '/' + base_line_height_4xl  + ' ' + base_tertiary_font,
        "5xl": base_font_size_5xl + '/' + base_line_height_5xl  + ' ' + base_tertiary_font,
        "6xl": base_font_size_6xl + '/' + base_line_height_6xl  + ' ' + base_tertiary_font,
        "7xl": base_font_size_7xl + '/' + base_line_height_7xl + ' ' + base_tertiary_font,
        "8xl": base_font_size_8xl + '/' + base_line_height_8xl  + ' ' + base_tertiary_font,
        "9xl": base_font_size_9xl + '/' + base_line_height_9xl  + ' ' + base_tertiary_font,
      }
    },
    colors: {
        light: {
            main: {
                tint_4: '#333333',
                regular: '#333333',
                tint_6: '#FFFFFF'
            },
            secondary: {
                tint_4: '#333333',
                regular: '#333333',
                tint_6: '#FFFFFF'
            },
        },
        dark: {
            main: {
                tint_4: '#333333',
                regular: '#333333',
                tint_6: '#333333'
            },
            secondary: {
                tint_4: '#333333',
                regular: '#333333',
                tint_6: '#333333'
            },
        },
        contrast: {
            main: {
                tint_4: '#333333',
                regular: '#333333',
                tint_6: '#333333'
            },
            secondary: {
                tint_4: '#333333',
                regular: '#333333',
                tint_6: '#333333'
            },
        }
    }
}
