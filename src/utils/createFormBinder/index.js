const textFieldBinder = ({ formData, onChangeFormData }) => {
	const binderFunction = (key) => {
		return {
			key,
			value: formData[key],
			onChange: (e) => onChangeFormData(key, e.target.value),
		}
	}	
	return binderFunction
}

const submitBinder = ({formData}) => {
	// console.log(formData);
	return (onSubmit) => ({
		onSubmit: (e) => {
			e.preventDefault()
			onSubmit(formData)
		}
	})
}

export const createFormBinder = (formResponse) => {
	console.log(formResponse);
	return {
		textFieldBinder: textFieldBinder(formResponse),
		submitBinder: submitBinder(formResponse),
	}
}