import { useState } from "react"
import { StyledButton, StyledForm, StyledInput } from "./styles";

export const MyForm = () => {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		console.log(event);
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledInput name="email" value={inputs.email || ""} placeholder="Email" onChange={handleChange} />
			<StyledInput name="name" value={inputs.name || ""} placeholder="Name" onChange={handleChange} />
			<StyledInput name="address" value={inputs.address || ""} placeholder="Address" onChange={handleChange} />
			<StyledButton type="submit">SUBMIT</StyledButton>
		</StyledForm>
	)
}