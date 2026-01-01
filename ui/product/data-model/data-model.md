# Data Model

## Entities

### WhoAmI
Collection of interactive cards about you — the first impression visitors get.

### ProfileCard
Individual card with multiple layers of detail, revealed progressively on click with soft rotation animations. Each click reveals more information.

### Experience
Places you've worked — companies, roles, and timeframes that tell your professional story.

### MyToolbox
Container for your skills, organized into soft skills, hard skills, and linked projects.

### SoftSkill
Interpersonal and cognitive skills (communication, leadership, problem-solving, etc.).

### HardSkill
Technical skills and tools you work with (React, Figma, Python, etc.).

### Project
Work you've done, linked to the skills used to build it.

### MutualFit
What you value and look for in work — signals for mutual fit assessment.

### Value
Individual thing you care about in work (autonomy, impact, growth, etc.).

### ContactMe
Container for ways aligned visitors can reach out.

### ContactMethod
Individual contact option (email, LinkedIn, calendar link, etc.).

## Relationships

- WhoAmI has many ProfileCard
- MyToolbox has many SoftSkill
- MyToolbox has many HardSkill
- MyToolbox has many Project
- Project links to many HardSkill (skills used)
- MutualFit has many Value
- ContactMe has many ContactMethod