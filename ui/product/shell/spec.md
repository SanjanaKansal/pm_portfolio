# Application Shell Specification

## Overview
A minimal, Notion-inspired top navigation shell for Sanjana's Portfolio. Clean and functional with separate pages for each section.

## Navigation Structure
- Who Am I? → `/who-am-i`
- My Toolbox → `/my-toolbox`
- Mutual Fit → `/mutual-fit`
- Contact Me → `/contact-me`

## Header Layout
- **Left:** Name "Sanjana" (logo/brand)
- **Right:** Navigation links

## Layout Pattern
Top navigation bar fixed at the top, content area below. No sidebar.

## Responsive Behavior
- **Desktop:** Full horizontal navigation visible in header
- **Tablet:** Same as desktop, slightly reduced spacing
- **Mobile:** Hamburger menu icon, expands to show navigation links

## Design Tokens
- **Primary:** neutral (text, nav items)
- **Secondary:** amber (active states, hover accents)
- **Neutral:** stone (backgrounds, borders)
- **Typography:** Inter for all text

## Design Notes
- Minimal aesthetic inspired by Notion
- Soft animations on interactions
- Interactive cards with progressive reveal throughout sections
- Clean, airy spacing