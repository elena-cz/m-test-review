# Monograph challenge write-up

## Goals

Before deciding how to add emoji to our restaurant reviews, we should first make sure we know why we’re adding it. Here are two potential reasons for adding this feature:
- **Need a rating system** - For users, a rating system offers an easy way to summarize their experience, especially if they don’t feel like writing a review. For the restaurant, a numeric rating is important to have as a business performance indicator because it’s easier to track and identify trends compared with freeform text feedback.
- **Opportunity for delight** - If the brand identity of the restaurant has a playful side, using emoji is an opportunity to reinforce that identity and offer a moment of delight and surprise.

Emoji are not a typical feature of restaurant reviews, so there could be some risks involved with this approach:
- **Ambiguous meaning** - Emoji are somewhat notorious for having hidden meanings and connotations, so using emoji could end up being more confusing than helpful.
- **Mismatch with user emotion** - Since emoji are often a “fun” brand element, that attitude may not match with a user who had a negative experience.

Given the potential benefits and risks, we can put together a goal for this feature:

Add a way for users to rate the restaurant using emoji with clear meanings, while respecting their emotional state.

## Approach

Figma mocks: https://www.figma.com/file/neyw7dQ5g0p7c8otyPMMwX/Take-home-frontend-test-Copy?node-id=601%3A24

If our goal is to design a rating system, we can limit our design options to something that resembles a scale from negative to positive. Since we’ve decided to use emoji, we can create a scale of emoji that matches each possible rating. For the sake of clarity, we’ll use a somewhat standard set of facial expression emoji: 🙁😐🙂😍

Luckily, this type of frown-to-smile rating system is a somewhat common pattern for asking for feedback, so many users should find it intuitive. Typically the faces are arranged in a row with  labels underneath, which reduces ambiguity and increases accessibility. It’s a simple design that allows users to clearly understand their options.

This design also gives us an opportunity to use motion in our design in a way that emphasizes delight for users with a positive experience, while respecting users who didn’t. When an option is selected the emoji gets bigger to indicate that it was selected. The transitions for scaling up go from slower for negative ratings to more energetic, with a fun animation added for the best rating.

Note: Typically restaurant reviews are on a 5-point scale, but in this case, having only 4 options means that the expressions can be more distinct (i.e. avoid a half-frown). Plus, an “OK” or neutral rating should probably be considered negative, so now we have 2 negative and 2 positive ratings. But if the rating is going to be used to compare restaurants, the scale should be adjusted accordingly.

## Alternative

Another approach to consider is using a standard slider input that changes the emoji as it slides. This potentially offers more opportunity for surprise since the emoji aren’t visible until interacting with it. But it’s ultimately less clear, because users can’t compare the options as easily. However, if we were asking the users to rate multiple things (i.e. the food, service, ambiance), multiple sliders could be a bit cleaner than multiple rows of emoji.




# Monograph challenge goals
We're a team that prides itself on building software that is wonderful to use (almost magical), and this challenge hopes to surface candidates that align with that way of building. How we gauge the test is based on the following metrics:

#### Product thinking
Iterate concepts (preferrably in Figma), articulate ideas (in text), and ultimately execute in code
#### Styling and transitions
To build magical software, whimsy and delight are taken extra seriously at Monogragh. We'd love to see your instinctual take on a simple form option input. CSS is a core strength of our team.
#### Basic react knowledge
We're more concerned with your product skills than your intimate knowledge of react lifecycle methods. Feel free to implement the most basic version of react with props passed to the children and back to the parent. 

## Deliverables
- Link to a public github repo with your code
- One paragraph (or more) write-up about your product decision
- *(bonus)* Figma mock-up of different concepts
- *(bonus)* Animations and/or transitions when options are selected

## Getting started
- Clone the repo: `git clone git@github.com:monographhq/test-review.git`
- Install dependencies: `yarn`
- Make sure the app runs: `yarn start`

## Frontend Challenge

### Dining review app

Design Reference: [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1)

![Dining App](/app.png)

1. **Dynamic inputs** - The Preview section on the right has static placeholder text. Wire up the app so that anything typed in both the feedback and party inputs updates the preview on the right.

2. **Product decision** - We're a small team at Monograph so you may be asked to make recommendations based on a feature we're building. Code from scratch, modify a library, or use a best practice idea is often a decision we're confronted with. You'll be adding an emoji selector to the form on the left. In the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1) we've added a few ideas, but we'd like to see your thinking around the best way to implement a feature which allows a user to express their emotions after dining somewhere.

    In your README doc, write a few sentences about why you might pick a certain direction. Feel free to copy the Figma file and test ideas visually. 

3. **Add emoji selector** - Now implement your idea in code and render it on the right in the Preview section.
4. **Style preview card** - Based on the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1), add CSS styling to the Preview area. In Figma you can click the "Code" tab in the upper right to get the relevant CSS values for each element you click.
5. **Responsive styling** - Now that your Preview is looking good, we need to make the app work for mobile users. We'd like the Preview section to be on top in mobile and everything to look similar to the Figma mockup. Don't worry about tablet styling for now, this is just for mobile.
