import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        // change alias
        alias: {
            // ~ --> `./src`
            '~': path.resolve(__dirname, './src'),
            '~components': `${path.resolve(__dirname, './src/components')}`,
            '~pages': path.resolve(__dirname, './src/pages'),
            '~hooks': path.resolve(__dirname, './src/hooks'),
            '~assets': path.resolve(__dirname, './src/assets'),
            '~layouts': path.resolve(__dirname, './src/layouts'),
        },
    },
    server: {
        // Open Browser when sta run dev`
        open: true,
        // Set port to listen on 3000
        port: 3000,
    },
    base: './',
});
