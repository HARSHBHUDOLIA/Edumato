import React from 'react';
import ReactDom from 'react-dom';
import Routing from  './Components/Routing';

ReactDom.render(<Routing/>,document.getElementById('root'));
 //This here is very important step as it renders the function.

//As you might have seen I have provided props in the footer which is used to send data from parent to child or vice versa.
