### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - to navigate and render different components within a React application
  - designed to handle routing within single-page applications
    - nested routing
      - complex architecture


- What is a single page application?
  - a single page application (SPA) is a type of web app that loads a single HTML page and dynamically updates that page as the user interacts with the app. 
  - use AJAX (asynchronous javascript and xml) requests to fetch data from the server, rather than reloading the entire page. 

- What are some differences between client side and server side routing?
  - Initial Load Time:
    - client-side routing uses AJAX requests to load the required data without refreshing the entire page. This allows for faster initial load times compared to server-side routing, which often requires loading an entire new HTML document. 
    - server-side routing involves making a request to the server, which then returns the appropriate HTML document for the requested page. This approach generally involves a longer initial load time, as the server needs to process the request and return the response. 

  - Navigation:
    - client-side routing apps, navigation is typically handled entirely on the client side. This can provide a smoother nav experience, as the browser doesn't need to load a new HTML doc for each navigation action. 
    - server-side routing applications typically require a full page refresh to navigate between pages. 

- What are two ways of handling redirects with React Router? When would you use each?
  - 1) use the redirect component:
        - use the Redirect component from React Router
          - component is rendered conditionally, based on a certain condition
            - if the condition is met, the Redirect component navigates to the specified route. 

  - 2) use the useHistory hook:
        - use the useHistory hook from React Router
          - gives us access to the history object, which we can use to navigate programmatically.
        - generally used for redirects that are triggered by a condition or by some logic within a component. 
          - more suitable for redirects that are triggered by user interaction, ,such as clicking a button. 

- What are two different ways to handle page-not-found user experiences using React Router? 
    - Wildcard path:
      - define a wildcard path ("/*") at the end of routing configuration. 
        - when the user navigates to a route that doesn't match any of the defined paths, React Router will render the NotFound component. 

    - use a catch-all route with the Switch component: 
      - wrap routes in a Switch component. 
        - define a catch-all route without a path
          - matches any route that doesn't have a specific route defined for it. 

- How do you grab URL parameters from within a component using React Router?
    - use the 'useParams' hook
    - access the URL parameters directly form the 'props.match.params' object. 

- What is context in React? When would you use it?
    - a feature that allows you to share data easily through the component tree without having to pass it down manually at every level. 
    - you would use Context when you need to share global data across multiple components, or when you need to share data that can be accessed from anywhere in the component tree. 

- Describe some differences between class-based components and function
  components in React.
    - class-based = component is defined as a class that extends React.Component. (syntax)
    - function components = defined as simple JavaScript functions. (syntax)
    - class-based components have built-in state objects and can utilize lifecycle methods. 
    - function components use 'useState' hook for managing state and 'useEffect' hook for managing side effects. 
    - function components can have slightly better performance compared to class-based components because they are automatically optimized by React.

- What are some of the problems that hooks were designed to solve?
  - code resuability: 
        - function components make it easy to reuse stateful logic because they can contain and export reg JavaScript fns
        - stateful behavior cannot be extracted from a component 
  - component overloading
  - render props
  - hooks were introduced to improve the way we write React components and manage their state and side effects. They offer a more function approach to writing components and allow us to reuse code in a more straightforward way. 