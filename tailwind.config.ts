import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// Brand colors
				brand: {
					navy: 'hsl(var(--brand-navy))',
					'deep-blue': 'hsl(var(--brand-deep-blue))',
					blue: 'hsl(var(--brand-blue))',
					cyan: 'hsl(var(--brand-cyan))',
					'light-cyan': 'hsl(var(--brand-light-cyan))',
					sky: 'hsl(var(--brand-sky))',
					mustard: 'hsl(var(--brand-mustard))',
					'mustard-dark': 'hsl(var(--brand-mustard-dark))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-interactive': 'var(--gradient-interactive)',
				'gradient-hover': 'var(--gradient-hover)',
				'gradient-navy': 'var(--gradient-navy)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'elegant': 'var(--shadow-elegant)',
				'intense': 'var(--shadow-intense)',
				'cyan': 'var(--shadow-cyan)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'brightness(1.2)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float-gentle': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(-1deg)'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(1deg)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'hero-move': {
					'0%': {
						transform: 'scale(1) translateX(0) translateY(0)'
					},
					'33%': {
						transform: 'scale(1.05) translateX(5px) translateY(-3px)'
					},
					'66%': {
						transform: 'scale(1.02) translateX(-3px) translateY(5px)'
					},
					'100%': {
						transform: 'scale(1) translateX(0) translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-up-text': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'10%': {
						transform: 'translateY(0)',
						opacity: '1'
					},
					'90%': {
						transform: 'translateY(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: '0'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.1)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'marquee': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(185 75% 50% / 0.4)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(185 75% 50% / 0.6), 0 0 60px hsl(185 75% 50% / 0.3)'
					}
				},
				'fade-up-enterprise': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float-rotate': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-25px) rotate(15deg)'
					}
				},
				'drift-diagonal': {
					'0%, 100%': {
						transform: 'translate(0, 0)'
					},
					'50%': {
						transform: 'translate(20px, -20px)'
					}
				},
				'scale-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '0.1'
					},
					'50%': {
						transform: 'scale(1.1)',
						opacity: '0.2'
					}
				},
				'ken-burns': {
					'0%': {
						transform: 'scale(1) translate(0, 0)'
					},
					'33%': {
						transform: 'scale(1.08) translate(-2%, -1%)'
					},
					'66%': {
						transform: 'scale(1.05) translate(1%, 2%)'
					},
					'100%': {
						transform: 'scale(1) translate(0, 0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 3s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite',
				'hero-move': 'hero-move 25s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
				'slide-up-text': 'slide-up-text 3.5s ease-in-out',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'marquee': 'marquee 30s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-up-enterprise': 'fade-up-enterprise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'float-rotate': 'float-rotate 8s ease-in-out infinite',
				'drift-diagonal': 'drift-diagonal 12s ease-in-out infinite',
				'scale-pulse': 'scale-pulse 6s ease-in-out infinite',
				'ken-burns': 'ken-burns 30s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;