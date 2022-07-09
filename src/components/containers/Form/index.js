import { createFormBinder } from "../../../utils/createFormBinder/index.js"
import { useForm } from "../useForm/index.js"
import { StyledButton, StyledForm, StyledInput } from "./styles/index.js"

export const Form = () => {
	const formResponse = useForm({ email: "", name: "", address: "" })
	const binder = createFormBinder(formResponse)

	const onCustomSubmit = (values) => {
		console.log(values.email, values.name, values.address);
	}

	return (
		<StyledForm {...binder.submitBinder(onCustomSubmit)}>
			<StyledInput {...binder.textFieldBinder("email")} placeholder="Email" />
			<StyledInput {...binder.textFieldBinder("name")} placeholder="Name" />
			<StyledInput {...binder.textFieldBinder("address")} placeholder="Address" />
			<StyledButton type="submit">SUBMIT</StyledButton>
		</StyledForm>
	)
}