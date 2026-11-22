"use client";
import { Button } from "@base-ui/react/button";
import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import Link from "next/link";
import { Loader2, MailBadge } from "lucide-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "@/app/schema/register.schema";
import { toast } from "react-toastify/unstyled";
import { useRouter as userRouter } from "next/navigation";




type RegisterForm = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
};


export default function Register() {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = userRouter();
  const form = useForm<registerSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
    mode: "all"
    
  });

  const handleRegister = async (values :registerSchemaType) => {
    console.log(values);
    setIsLoading(true);
    try {
      const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",{
        method: "POST",
        body: JSON.stringify(values),
        headers: {"content-type": "application/json"}
      })
      const data = await response.json();
      console.log("register",data);
      if(data.message=="success"){
      toast.success("Rergister Successfully",{position:"top-right", delay:2000, autoClose:1500 })
      setTimeout(()=>{
        router.push("/login")
      },2000)
      }
      else{
        toast.error(data.message,{position:"top-right", delay:2000, autoClose:1500 })
      }
    } catch (error) {
      toast.error("something went wrong",{position:"top-right", delay:2000, autoClose:1500 })
    }finally{
      setIsLoading(false)
    }
  };

  interface FormField {
    name: "name" | "email" | "password" | "rePassword" | "phone";
    type: string;
    placeholder: string;
    outoComplete: string;
  }

  const formFields : FormField[] = [
   {name: "name",type: "text",placeholder: "Enter your name",outoComplete: "name"},
   {name: "email",type: "email",placeholder: "Enter your email",outoComplete: "email"},
   {name: "password",type: "password",placeholder: "Enter your password",outoComplete: "new-password"},
   {name: "rePassword",type: "password",placeholder: "Enter your rePassword",outoComplete: "new-password"},
   {name: "phone",type: "tel",placeholder: "Enter your phone",outoComplete: "phone"}
  ]

  return (
    <div className="w-[90%] lg:w-[60%] mx-auto my-5 rounded-2xl shadow-2xl p-5">
      <h2 className="text-xl text-center">
        Welcome to Fresh Cart
      </h2>

      <form onSubmit={form.handleSubmit(handleRegister)} >
        {formFields.map((myInput)=> <Controller
          key={myInput.name}
          name={myInput.name}
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                id={field.name}
                className="my-4 p-5 w-full"
                aria-invalid={fieldState.invalid}
                placeholder= {myInput.placeholder}
                autoComplete={myInput.outoComplete}
                type={myInput.type}
              />

              {fieldState.error?.message && (
                <p className="text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

       )}
       <p className='mb-3'>
  Already have an account?{" "}
  <Link href="/login" className="text-green-600 hover:underline">
    Login here
  </Link>
</p>
       <Button disabled={isLoading} type="submit" className='w-full flex items-center justify-center bg-green-600 hover:bg-green-700 transition-all duration-300 cursor-pointer p-5'>{isLoading ? <Loader2 className='animate-spin' /> : <>SignUp<MailBadge  /> </>}</Button>
      </form>
    </div>
  );
}

