"use client"

import * as z from "zod";
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <p className="text-black mb-4">For any type of query or help ..contact us without hesitation</p>
        <div className=" p-8 rounded-2xl w-full max-w-lg bg-gradient-to-br from-gray-50 to-amber-50">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Get in touch</h2>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
                <FormField
                control={form.control}
                name="username"
                render={() => (
                    <FormItem className="text-black">
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                        <Input placeholder="enter you name..."   className="focus:ring-2 focus:ring-amber-100 focus:outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="username"
                render={() => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="email" className="focus:ring-2 focus:ring-amber-100 focus:outline-none"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="username"
                render={() => (
                    <FormItem>
                    <FormLabel>Feedback</FormLabel>
                    <FormControl>
                        <Input placeholder="Your words ..."  className="focus:ring-2 focus:ring-amber-100 focus:outline-none"/>
                    </FormControl>
                    <FormDescription className="mr-70 opacity-60 font-weight-light">
                        Write your feedback here.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="bg-amber-300">Submit</Button>
            </form>
            </Form>
        </div>
        <p className="text-black mt-4">Or email us directly at: <span className="text-amber-300 hover:underline">support@bookvibes.com</span></p>
    </div>
  )
}
