# Pomodoro Study Timer 🍅
**A React app implementing the popular Pomodoro time blocking method**

_View live [here](https://aharmon413.github.io/pomodoro-timer/)_

![pomodoro-timer](https://user-images.githubusercontent.com/83358042/168689741-d139e7d5-4b6b-4088-930a-530080770b7f.png)

## About

I originally created this project as part of FreeCodeCamp's [Front End Libraries certification](https://www.freecodecamp.org/learn/front-end-development-libraries/) in January 2022. Recently, I decided to come back to it, clean it up a bit, and add a few new features.

This timer is based on the Pomodoro method, a time blocking technique. You work for 25 minutes, then take a break for 5 minutes, and repeat. Of course, you can alter the length of the time blocks to suit your needs: this timer allows for time blocks between 1 and 60 minutes. It automatically switches between counting down work and study blocks, and has a (mutable) alarm that rings upon reaching 00:00.

The new features I recently added include:
- A mute button for the timer alarm
- Improved UI details
- Changes to how the reset button works (originally, FreeCodeCamp wanted it to reset to 25/5, regardless of what time block lengths you chose. I thought it made more sense to reset the currently running timer, but save the user's time block settings)
- Random inspirational quotes retrieved asynchronously using the fetch API

I also wrote five simple tests using React Testing Library and Jest to ensure basic functionality is working as intended.

## Resources
- [create-react-app](https://github.com/facebook/create-react-app) - initializing the project
- [FontAwesome](https://fontawesome.com/) - icons
- [Quotable API](https://github.com/lukePeavey/quotable) - random inspirational quotes
- [Twemoji](https://twemoji.twitter.com/) - emoji for favicon
- [FreeCodeCamp](https://www.freecodecamp.org/) - for helping me immensely on my coding journey
