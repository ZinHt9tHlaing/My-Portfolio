import { motion } from "framer-motion";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schema/contactSchema";
import type z from "zod";
import { toast } from "react-toastify";

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    setIsLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully!", {
      position: window.innerWidth < 640 ? "top-center" : "bottom-right", 
      autoClose: 2500,
    });
      console.log("Form data submitted:", data);
      setIsLoading(false);
      reset();
    }, 2000);
  };

  return (
    <PageWrapper pageKey="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="I'm excited to connect with you!"
      />
      <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 p-8 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Send a message
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 dark:text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="mt-1 block w-full py-1 px-3 rounded-md bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 dark:text-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="mt-1 block w-full rounded-md py-1 px-3 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 dark:text-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className="mt-1 block w-full py-1 px-3 rounded-md bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-900 dark:text-white"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex justify-center w-full items-center rounded-md text-base gap-2 text-white font-semibold disabled:bg-blue-700/20 disabled:border-blue-700/20 disabled:pointer-events-none bg-blue-600 cursor-pointer py-1 px-2 border-2 border-blue-600 active:scale-95 duration-200"
            >
              {isLoading && (
                <div className="size-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
              )}
              Submit
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 p-8 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-xl space-y-6 flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Info
          </h3>
          <div className="flex flex-col items-start space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-portfolio-accent/10 text-portfolio-accent">
                <Mail size={24} />
              </div>
              <div className="text-start">
                <span className="text-sm text-portfolio-text-muted">Email</span>
                <a
                  href="mailto:https://mail.google.com/mail/u/0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 dark:hover:text-portfolio-accent duration-200 text-portfolio-text hover:text-portfolio-accent transition-colors"
                >
                  <span>zinhtethlaing4@gmail.com</span>
                </a>
              </div>
            </div>
            {/* Phones */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-portfolio-accent/10 text-portfolio-accent">
                <Phone size={24} />
              </div>
              <div className="text-start">
                <span className="text-sm text-portfolio-text-muted">
                  Phones
                </span>
                <div className="flex">
                  <a
                    href="tel:09965664813"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 dark:hover:text-portfolio-accent duration-200 text-portfolio-text hover:text-portfolio-accent transition-colors"
                  >
                    <span>09965664813</span>
                  </a>
                  <span className="me-2">,</span>
                  <a
                    href="tel:09792746290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 dark:hover:text-portfolio-accent duration-200 text-portfolio-text hover:text-portfolio-accent transition-colors"
                  >
                    <span>09792746290</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Facebook */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-portfolio-accent/10 text-portfolio-accent">
                <FaFacebook size={24} />
              </div>
              <div className="text-start">
                <span className="text-sm text-portfolio-text-muted">
                  Facebook
                </span>
                <a
                  href="https://www.facebook.com/zin.htet.52687506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 dark:hover:text-portfolio-accent duration-200 text-portfolio-text hover:text-portfolio-accent transition-colors"
                >
                  <span>Zin Htet</span>
                </a>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-portfolio-accent/10 text-portfolio-accent">
                <MapPin size={24} />
              </div>
              <div className="text-start">
                <span className="text-sm text-portfolio-text-muted">
                  Location
                </span>
                <a
                  href="#"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 dark:hover:text-portfolio-accent duration-200 text-portfolio-text hover:text-portfolio-accent transition-colors"
                >
                  <span>Yangon, Myanmar</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
