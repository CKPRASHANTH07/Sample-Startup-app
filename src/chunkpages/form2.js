import React  from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const fields = [
  {
    label: "First Name",
    type: "text",
    placeholder: "John",
    required: true,
    gridCols: 1,
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
    required: true,
    gridCols: 1,
  },
  {
    label: "Email",
    type: "email",
    placeholder: "john.doe@example.com",
    required: true,
    gridCols: 2,
  },
  {
    label: "Phone",
    type: "tel",
    placeholder: "+1 123-456-7890",
    required: true,
    gridCols: 2,
  },
  {
    label: "Course",
    type: "text",
    placeholder: "BCA/B.E/B.Tech/..",
    required: true,
    gridCols: 2,
  },
  {
    label: "Graduating year",
    type: "month",
    placeholder: "2024",
    required: true,
    gridCols: 2,
  },
  {
    label: "Query",
    type: "Text",
    placeholder: "Enter your Query",
    required: true,
    gridCols: 2,
  },
];

  
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    // You can perform further actions with the form data here
  console.log("successfully submitted") 
  setSubmitted(true);
  };


  return (
<section
   className="relative overflow-hidden flex  justify-center py-20 lg:py-[20px]"
   >
        <div className=" lg:w-1/2 w-3/4 pb-10 pt-5  p-4 flex flex-wrap justify-center items-center bg-white shadow-2xl my-20 rounded-md mx-auto">
    
          {submitted ? (
        <div className="flex  justify-center items-center text-3xl font-bold">Login successful!</div>
        
      ) : (<> <h1 className="text-3xl font-bold">Register Form</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-start items-center w-full m-auto"
          >
            <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className={`text-left flex flex-col gap-2 w-full ${
                    field.gridCols === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <label className="font-semibold">{field.label}</label>
                  <input
                    {...register(field.label.toLowerCase(), {
                      required: field.required,
                    })}
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500 ${
                      field.gridCols === 2 ? "md:w-full" : ""
                    }`}
                    type={field.type}
                    placeholder={field.placeholder}
                 
                  />
                  {errors[field.label.toLowerCase()] && (
                    <span>This field is required</span>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full text-left">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                title="Confirm Order"
              >
                <span>Register</span>
                <HiOutlineArrowCircleRight size={20} />
              </button>
            </div>
           
          </form>  </>)}
          
        </div>
      
      </section>
  );
}