import { useState } from "react"

export const useForm = (initValue) => {
	const [formData, setFormData] = useState(initValue)

	const onChangeFormData = (key, value) => {
		setFormData((prev) => ({
			...prev,
			[key]: value,
		}))
	}

	return {
		formData,
		onChangeFormData,
	}
}