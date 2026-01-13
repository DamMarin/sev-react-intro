import {useState} from "react";

type FormProps = {
  name: string;
  email: string;
  message: string;
}

type FormErrorProps = {
  name?: string;
  email?: string;
  message?: string;
}

const initialValues: FormProps = {
  name: "",
  email: "",
  message: "",
}

const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

const MultiFieldFormWithValidation = () => {
  const [values, setValues] = useState<FormProps>(initialValues);
  const [submittedData, setSubmittedData] = useState<FormProps | null>(null);
  const [errors, setErrors] = useState<FormErrorProps>({})

  const validateForm = (values: FormProps): FormErrorProps => {
    const errors: FormErrorProps = {};
    if (!values.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!values.email.trim() || !emailRegex.test(values.email)) {
      errors.email = "Invalid email address.";
    }
    if (!values.message.trim() || values.message.length < 5) {
      errors.message = "Message must be at least 5 characters long.";
    }
    return errors;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(
      (prev) => ({
        ...prev,
        [name]: value,
      })
    )
    setErrors(
      (prev) => ({
        ...prev,
        [name]: undefined,
      })
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null)
      return;
    }

    setSubmittedData(values);
    setValues(initialValues);
    setErrors({});
  }

  const handleClear = () => {
    setValues(initialValues);
    setSubmittedData(null);
    setErrors({});
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-8">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          {errors.name && (
              <p className="text-sm text-cf-dark-red mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          {errors.email && (
            <p className="text-sm text-cf-dark-red mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border rounded px-4 py-2"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-sm text-cf-dark-red mt-1">{errors.message}</p>
          )}
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-cf-dark-red text-white py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-cf-dark-gray text-white py-2 px-4 rounded"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="max-w-md mx-auto space-y-2 border-t border-gray-200 mt-6 pt-4">
          <p><strong>Name: </strong>{submittedData.name}</p>
          <p><strong>Email: </strong>{submittedData.email}</p>
          <p><strong>Message: </strong>{submittedData.message}</p>
        </div>
      )}
    </>
  )
}

export default MultiFieldFormWithValidation;