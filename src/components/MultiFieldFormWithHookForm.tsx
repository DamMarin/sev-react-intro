import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const formSchema=z.object({
  name: z.string().trim().min(1, {error: "Name is required."}),
  email: z
    .email({error: "Invalid email address."})
    .min(1, {error: "Email is required."}),
  message: z
    .string()
    .trim()
    .min(5, {error:"Message must be at least 5 characters long."})
    .max(8, {error:"Message must be at most 8 characters long."})
    .min(1, {error:"Message is required."}),
})

type FormProps = z.infer<typeof formSchema>;

const initialValues: FormProps = {
  name: "",
  email: "",
  message: "",
}

const MultiFieldFormWithHookForm = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch
   } = useForm<FormProps>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues
   });

  const watchedValues = watch();

  const onSubmit = () => {
    reset();
  }

  const handleClear = () => {
    reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto space-y-4 mt-8"
      >
        <div>
          <input
            {...register("name")} // name="name"
            placeholder="Your Name"
            className={`w-full border rounded px-4 py-2 ${errors.name ? "border-cf-dark-red" : ""} `}
          />
          {errors.name && (
              <p className="text-sm text-cf-dark-red mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")} // name="email"
            placeholder="Your Email"
            className={`w-full border rounded px-4 py-2 ${errors.email ? "border-cf-dark-red" : ""} `}
          />
          {errors.email && (
            <p className="text-sm text-cf-dark-red mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register("message")} // name="message"
            className={`w-full border rounded px-4 py-2 ${errors.message ? "border-cf-dark-red" : ""} `}
          ></textarea>
          {errors.message && (
            <p className="text-sm text-cf-dark-red mt-1">{errors.message.message}</p>
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

      <div className="max-w-md mx-auto space-y-2 border-t border-gray-200 mt-6 pt-4">
        <p><strong>Name: </strong>{watchedValues.name}</p>
        <p><strong>Email: </strong>{watchedValues.email}</p>
        <p><strong>Message: </strong>{watchedValues.message}</p>
      </div>


    </>
  )
}

export default MultiFieldFormWithHookForm;