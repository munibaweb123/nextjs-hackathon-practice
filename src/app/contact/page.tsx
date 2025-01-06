'use client'
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

const Contact = () => {
  // Initialize form with default values and resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  // Submit handler with type safety
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="max-w-[1170px] mx-auto space-y-4">
      <h2 className="my-10">
        Home / <span className="font-semibold">Contact</span>
      </h2>
      <div className="block md:flex gap-x-4 items-center md:h-auto mx-auto h-[1000px] pb-20">
        {/* Left Section */}
        <div className="shadow-md p-5 md:h-full space-y-4">
          <div className="border-b-2 space-y-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-[#bd4444] text-white rounded-full p-2">
                <FaPhone size={20} />
              </div>
              <p>Call To Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-x-4">
              <div className="bg-[#bd4444] text-white rounded-full p-2">
                <FaEnvelope size={20} />
              </div>
              <p>Write To Us</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: customer@exclusive.com</p>
            <p>Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="shadow-md p-5 space-y-4 md:h-full w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        {...field}
                        className="bg-[#f5f5f5] p-2"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="bg-[#f5f5f5] p-2"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        placeholder="Enter your message"
                        rows={2}
                        className="bg-[#f5f5f5] p-2 w-full"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="flex items-center justify-end">
                <Button
                  type="submit"
                  className="w-[215px] h-[58px] bg-[#db4444] text-white hover:bg-[#b23232] hover:text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
