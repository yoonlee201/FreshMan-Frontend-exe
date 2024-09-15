/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                tablet: '600px',
            },
        },
        extend: {
            // figma 기준, 필요시 옵션 추가
            width: {
                default: 'var(--min-w)',
            },
            maxWidth: {
                default: 'var(--max-w)',
            },
            fontFamily: {
                sans: ['Apple SD Gothic Neo', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'login-success': `url(./assets/images/login-success.svg)`,
                'gradient-bk':
                    'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.2) 100%)',
            },
            fontSize: {
                title1: ['1.625rem', {}],
                title2: ['1.25rem', {}],
                title3: ['1.125rem', {}],
                subTitle: ['1.375rem', {}],
                body1: ['1rem', {}],
                body2: ['0.875rem', {}],
                body3: ['0.75rem', {}],
                body4: ['0.6875rem', {}],
                body5: ['0.625rem', {}],

                title1_b: ['1.625rem', { fontWeight: '700' }],
                title2_b: ['1.25rem', { fontWeight: '700' }],
                title3_b: ['1.125rem', { fontWeight: '700' }],
                subTitle_b: ['1.375rem', { fontWeight: '700' }],
                body1_b: ['1rem', { fontWeight: '700' }],
                body2_b: ['0.875rem', { fontWeight: '700' }],
                body3_b: ['0.75rem', { fontWeight: '700' }],
                body4_b: ['0.6875rem', { fontWeight: '700' }],
                body5_b: ['0.625rem', { fontWeight: '700' }],
            },
            colors: {
                background: 'white',
                border: 'var(--radius)',
                input: 'hsl(var(--input))',
                bk: 'var(--bk)',
                gray100: 'var(--gray100)',
                gray200: 'var(--gray200)',
                gray300: 'var(--gray300)',
                gray400: 'var(--gray400)',
                pointRed: 'var(--pointRed)',
                muted: 'hsl(var(--muted))',
                primary: {
                    DEFAULT: 'var(--primary)',
                    review: 'var(--review)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            borderWidth: {
                10: '10px',
            },
            gridTemplateColumns: {
                header: '60px 1fr 60px',
            },
            boxShadow: {
                top: '-3px -17px 42px -7px rgba(184,184,184,0.24);',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('tailwindcss-animate'),
        // eslint-disable-next-line global-require
        require('@tailwindcss/line-clamp'),
    ],
};
