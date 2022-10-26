import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-4'>
            <h1>Interview Questions Given Below</h1>
            <div>
                <h2> what is cors???</h2>
                <p><span>Answer:</span>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request</p>
            </div>
            <div>
                <h2>Why are you using firebase??</h2>
                <p><span>Answer:</span>Here's why you should use it! Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized</p>
            
            </div>
            <br />
            <div>
                <h2>What other options do you have to implement authentication???</h2>
                <p><span>Answer:</span>The Fundamentals Of Authentication Verification of you by a computer system comes in a few ways: Something you know, such as a password or PIN (personal identifying number); Something you carry, such as a flash drive or a proximity card; or The use of biometrics to authenticate you as an authorized user.</p>
            </div>
            <div>
                <h2>How does the private route work??</h2>
                <p><span>Answer:</span>The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.</p>
            </div>
            <div>
                <h2>What is Node??</h2>
                <p><span>Answer:Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js is a popular, lightweight web framework for beginners, and it is used by many big companies like Netflix and Uber.</span></p>
            </div>
            <div>
                <h2> How does Node work?</h2>
                <p><span>Answer:</span>Node.JS works and runs on the VB JavaScript engine. An essential thing to comprehend is that Node isn’t a web server. In this article will give a simple method to comprehend the outline of how Node.JS works? along with its functions, what makes Node.JS extraordinary and clarify that it’s something other than server-side JavaScript.

</p>
            </div>
        </div>
    );
};

export default Blog;