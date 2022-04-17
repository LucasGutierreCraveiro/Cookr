// button {
//   font-family: "Roboto", sans-serif;
//   width: 100px;
// 	background: #27AE60;
// 	font-weight: bold;
// 	color: white;
// 	border: 0 none;
// 	border-radius: 5px;
// 	cursor: pointer;
// 	padding: 10px 5px;
// 	margin: 10px 5px;
// }

// button:hover {
//   box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
// }

import styled from 'styled-components';

interface ButtonType extends HTMLButtonElement {
	color: string,
	isDisabled: boolean,
}
