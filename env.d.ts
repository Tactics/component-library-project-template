/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly STORYBOOK_THEME_FOLDER: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}