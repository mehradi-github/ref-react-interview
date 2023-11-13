1. What are the pros and cons of React?
2. How can compare it with Angular?

   Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.

   React is the library for web and native user interfaces.

   It uses the virtual DOM instead of the real DOM.
   It uses server-side rendering.
   It follows uni-directional data flow or data binding.

   pros:
   It increases the application’s performance
   It can be conveniently used on the client as well as server side
   Because of JSX, code’s readability increases
   React is easy to integrate with other frameworks like Meteor, Angular, etc
   Using React, writing UI test cases become extremely easy

   React is just a library, not a full-blown framework
   Its library is very large and takes time to understand
   It can be little difficult for the novice programmers to understand
   Coding gets complex as it uses inline templating and JSX

3. What is the Virtual DOM?

   A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as React, Vue.js, and Elm.

   The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

4. what is the difference between Virtual DOM and Shadow DOM?
   Virtual DOM: It creates a copy of the entire DOM in the memory. Shadow DOM: It does not create a complete representation of the entire DOM

Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root,

Shadow host: The regular DOM node that the shadow DOM is attached to.
Shadow tree: The DOM tree inside the shadow DOM.
Shadow boundary: the place where the shadow DOM ends, and the regular DOM begins.
Shadow root: The root node of the shadow tree.

5. what is JSX?
   JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
6. what is presentational(dumb) va container(smart) component?
   Container Components: Components that care about what data is shown to the user.
   Presentational Components: Components that care about how data is shown to the user.
