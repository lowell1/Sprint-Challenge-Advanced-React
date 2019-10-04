- [ ] Why would you use class component over function components (removing hooks from the question)?

You would use class components instead of function components because some companies have been using class components since before hooks existed and it's too expensive to convert all of them.


- [ ] Name three lifecycle methods and their purposes.

1 "componentDidMount" is used to initialize the variables in the component and is useful for things that only need to happen once.

2. in the "render" method, you return all of the elements to be rendered in the dom

3. the "componentDidUpdate" method is called every time something changes and causes another render. it can be used to run side effects and changes things on the dom


- [ ] What is the purpose of a custom hook?

a custom hook is used to abstract some of the work needed to use a hook. an example was when we created a custom hook that used usestate to store information and set it to local storage



- [ ] Why is it important to test our apps?

it is important because some problems are hard to identify without testing and when people actually use the app, they're probably going to find them and it's better to fix as much of them as you can first they don't affect the user's experience