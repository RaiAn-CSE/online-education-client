import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        An HTTP-header based system called Cross-Origin Resource Sharing (CORS) enables a server to specify any origins (domain, scheme, or port) other than its own from which a browser should be able to load resources. In order to verify that the server hosting the cross-origin resource would allow the actual request, CORS also uses a method wherein browsers send a "preflight" request to the server hosting the resource. The browser transmits headers that specify the HTTP method and headers that will be used in the actual request during that preflight.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        For startups and large corporations alike, Firebase offers tools to help you expand your app and business. With fully managed backend infrastructure, you can quickly and securely get your app up and running. Track the performance of the app. 15 and up products and solutions. solutions that span platforms. <br />
                        5 Common Authentication Types: <br />
                        1. Password-based authentication <br />
                        2. Multi-factor authentication <br />
                        3. Certificate-based authentication <br />
                        4. Biometric authentication <br />
                        5. Token-based authentication
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. <br />

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br />
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Learn about Node.js, a JavaScript runtime for building server-side or desktop applications. <br />
                        Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file. <br />

                        module is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.
                        require() is a function used to import modules from other files or Node packages.
                        process is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more. <br /> <br />

                        How does Node work?<br />
                        To begin, download and install Node.js for your operating system.<br />

                        To run JS files in Node, the node command followed by a file path will execute the program file.<br />

                        For example, if we have the following saved in a file script.js:<br />
                        console.log('I am a Node program');<br />
                        Running the terminal command node script.js in the same folder as script.js will start Node, print I am a Node program to the terminal window, and exit, as the script file has finished execution.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Container>
    );
};

export default Blog;