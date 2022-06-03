# Description

This is a submission to "Advice generator app" challenge from frontendmentor.io.

Link to challenge:

https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db

# Demo on Pages

https://osato28.github.io/FEM-advice-generator-app/

# Current status

Mostly ready, as it was a very simple project. 

Basic accessibility tested, functionality tested, the way it looks fits the challenge's criteria.

Optional steps for the future:

- [ ] Minify JS, see if that improves performance
- [ ] Double-check all accessibility issues again, this time more thoroughly
- [ ] No earlier than 2022-06-10: see if CSS and JS are hard to read once you've forgotten them; add comments in troublesome places if so
- [ ] Google Fonts has been troublesome, set up static fonts
- [ ] Try switching to a fluidly responsive design (with calc, clamp). Use current static values as fallback.
- [ ] Experiment with GitHub Actions a bit more and set up a custom workflow to run `git subtree push --prefix dist origin gh-pages` with every push to origin/main.
# Comments

## Languages/frameworks used

This challenge was taken specifically to learn how to work with postprocessors: PostCSS, SASS and TypeScript.

Because of that, languages used are: HTML, SCSS, TypeScript.
## What I learned

- Even style-agnostic frameworks like Tailwind are more impediment than help on small precise projects. It is best to stick with pure SASS unless you need to rapidly prototype something big like an entire page.

- Basics of working with PostCSS (surprisingly easy), SASS (glorious) and TypeScript (harder than its documentation makes it look like).

- In order to work around GitHub Pages' inability to root a folder of our own choosing, `git subtree push` a folder with static files (in this case, `dist/`) to a separate branch for Pages (in this case, `gh-pages`).

- Using a Node.JS .gitignore template without double-checking it was a MAJOR MISTAKE. Most of the development in the `dist/` folder wasn't recorded in git, so the branch history only shows development of SCSS and TS files.

- SASS is love. SASS is life. 

- As for Typescript... I can see how it'll make things much easier in a very large project. But in tiny ones like this one, where you **know* that all of your shortcuts will work 100% of the time, I'd spent more time working around TypeScript's errors than doing anything useful.

- Figuring out the best file/folder structure for SCSS files *is not a trivial task*. Note to self: learn best practices for file/folder structure and SASS-oriented architecturing in general.