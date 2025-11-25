// // Import only the React type definitions (no runtime import)
// import type React from "react";

// // Props for the Greeting component: a single boolean flag
// type GreetingProps = {
//     isLoggedin: boolean;
// };

// // Props for the Welcome component: username string and admin flag
// type WelcomeProps = {
//     username: string;
//     isAdmin: boolean;
// };

// // Welcome component: displays username and an admin message if isAdmin is true
// const Welcome: React.FC<WelcomeProps> = ({ username, isAdmin }) => {
//     // Component returns JSX: container with a greeting and conditional admin note
//     return (
//         <div className="">
//             {/* Heading showing the username */}
//             <h2>Hello, {username}</h2>
//             {/* Conditional render: only show this <h3> when isAdmin is true */}
//             {isAdmin && <h3> You have admin rights</h3>}
//         </div>
//     );
// };

// // Greeting component: shows different messages based on isLoggedin prop
// const Greeting: React.FC<GreetingProps> = ({ isLoggedin }) => {
//     // Log the current value of isLoggedin for debugging
//     console.log(isLoggedin);

//     // Conditional rendering using if/else to return different JSX
//     if (isLoggedin) {
//         // When logged in, show a welcome message
//         return <p>Welcome to my app!</p>;
//     } else {
//         // When not logged in, prompt the user to log in
//         return <p>Please log in to continue.</p>;
//     }
// };

// // Main component for this file: demonstrates conditional rendering
// function ConditionalRenderComponent() {
//     // Local state/flag used to decide which greeting to show (static here)
//     const isLoggedin = false;

//     // Render a container with a title and the Greeting component
//     return (
//         <div className="">
//             {/* Section title */}
//             <h1>conditional render </h1>
//             {/* Pass the isLoggedin flag down to the Greeting component */}
//             <Greeting isLoggedin={isLoggedin} />
//         </div>
//     );
// }

// // Export the component as the default export of this module
// export default ConditionalRenderComponent;
