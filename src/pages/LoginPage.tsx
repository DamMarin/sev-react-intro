import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import {type LoginFields, loginSchema} from "@/schemas/login.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";
import {useNavigate} from "react-router";
import {useAuth} from "@/hooks/useAuth.ts";

export default function LoginPage() {
  const navigate = useNavigate();
  const {loginUser} = useAuth();

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema)
    }
  );

  const onSubmit = async (data: LoginFields) => {
    try {

      await loginUser(data);

      toast.success("Login successful");
      navigate("/products");
    } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Login failed",
        );
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto mt-12 p-8 border runded space-y-4"
      >
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" {...register("username") }/>
          {errors.username && (
            <div className="text-cf-dark-red">{errors.username.message}</div>
          )}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" {...register("password") }/>
          {errors.password && (
            <div className="text-cf-dark-red">{errors.password.message}</div>
          )}
        </div>
        <Button
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </>
  )
}