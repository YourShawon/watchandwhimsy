"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import RatingStar from "@/components/shared/rating-star";


const formSchema = z.object({
  comment: z.string(),
  username: z.string().min(2).max(50),
  email: z.string().email(),
});
const ReviewForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
      username: "",
      email: "",
    },
  })
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <div>
      <header>
        <h2 className="font-spartan font-spartanSemiBold text-[18px] leading-5 text-black-2x mb-4">Add a review</h2>
        <RatingStar editable/>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-3">
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Write Comment" className="input-border-green" cols={30} rows={9} {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="input-border-green" placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="input-border-green" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="bgGreen">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default ReviewForm

