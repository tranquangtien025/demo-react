import styled from "styled-components";

const StyledForm = styled.form`
	display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 50px auto 0;
`

const StyledInput = styled.input`
	height: 50px;
	border: 1px solid black;
	border-radius: 10px;
	margin: 12.5px 0;
	font-size: 14px;
	padding: 0 12.5px;
	color: yellowgreen;
`

const StyledButton = styled.button`
	height: 50px;
	border: 1px solid black;
	border-radius: 25px;
	margin: 12.5px 150px;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
	color: yellowgreen;
`

export {
	StyledForm,
	StyledInput,
	StyledButton,
}