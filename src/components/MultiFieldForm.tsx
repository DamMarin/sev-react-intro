import {useState} from "react";

type FormProps = {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormProps = {
  name: "",
  email: "",
  message: "",
}

const MultiFieldForm = () => {
  const [values, setValues] = useState<FormProps>(initialValues);
  const [submittedData, setSubmittedData] = useState<FormProps | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(
      (prev) => ({
        ...prev,
        [name]: value,
      })
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you can handle the form submission, e.g., send data to an API or log it
    setSubmittedData(values);

    setValues(initialValues);
  }

  const handleClear = () => {
    setValues(initialValues);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={values.name}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border rounded px-4 py-2"
          value={values.message}
          onChange={handleChange}
          minLength={5}
          required
        ></textarea>

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

export default MultiFieldForm;