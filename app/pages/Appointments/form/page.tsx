"use client";
import React from "react";
import { FaArrowLeftLong, FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import FormGroup from "./FormGroup";
import VetCards from "./VetCards";
import vetList from "data/veterinarySources.json";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "./form.css";

const inputClasses =
  "p-16 rounded-lg border border-solid border-gray-300 w-full outline-primary hover:border-gray-400";

const Form = () => {
  const router = useRouter();

  return (
    <div className='form-container p-32'>
      <div className='form-wrapper'>
        <div className='w-full max-w-[900px] mx-auto'>
          <div>
            <span
              onClick={() => router.back()}
              className='inline-flex items-center gap-8 cursor-pointer text-gray-600 hover:text-primary transition-all duration-300 text-sm outline-primary'
              tabIndex={0}
            >
              <FaArrowLeftLong />
              <span>Go back</span>
            </span>
          </div>
          <div className='text-2xl py-32 block'>Appointments</div>
          <div className='form-card'>
            <form action='#'>
              <div className='appointment-details mb-56'>
                <div className='text-lg text-gray-600 mb-8 flex gap-12 items-center'>
                  <span>Appointment Details</span>
                  <div className='divider h-[1px] bg-gray-300 flex-grow'></div>
                </div>
                <div className='grid grid-cols-2 gap-16'>
                  <FormGroup
                    label='Apointment Title'
                    id='appointmentName'
                    isRequired
                  >
                    <input
                      type='text'
                      id='appointmentName'
                      placeholder='Pet check-up'
                      className={inputClasses}
                      required
                    />
                  </FormGroup>
                  <FormGroup
                    label='Appointment Start'
                    id='appointmentStart'
                    className='row-start-3'
                    isRequired
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={["DateTimePicker"]}
                        sx={{ pt: 0 }}
                      >
                        <DateTimePicker
                          minutesStep={30}
                          className='dateTimePicker'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </FormGroup>
                  <FormGroup
                    label='Appointment End'
                    id='appointmentEnd'
                    className='row-start-3'
                    isRequired
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={["DateTimePicker"]}
                        sx={{ pt: 0 }}
                      >
                        <DateTimePicker
                          minutesStep={30}
                          className='dateTimePicker'
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </FormGroup>
                </div>
              </div>
              <div className='client-information mb-56'>
                <div className='text-lg text-gray-600 mb-8 flex gap-12 items-center'>
                  <span>Client information</span>
                  <div className='divider h-[1px] bg-gray-300 flex-grow'></div>
                </div>
                <div className='grid grid-cols-2 gap-16'>
                  <FormGroup label="Client's Name" id='clientName' isRequired>
                    <input
                      type='text'
                      id='clientName'
                      placeholder='John Doe'
                      className={inputClasses}
                      required
                    />
                  </FormGroup>
                  <FormGroup
                    label='Email'
                    id='email'
                    className='row-start-2'
                    isRequired
                  >
                    <input
                      type='text'
                      id='email'
                      placeholder='sample@email.com'
                      className={inputClasses}
                      required
                    />
                  </FormGroup>
                  <FormGroup
                    label='Phone'
                    id='phone'
                    className='row-start-3'
                    isRequired
                  >
                    <input
                      type='text'
                      id='phone'
                      placeholder='+630123456789'
                      className={inputClasses}
                      required
                    />
                  </FormGroup>
                  <FormGroup
                    label='Address'
                    id='address'
                    className='row-start-4'
                    isRequired
                  >
                    <input
                      type='text'
                      id='address'
                      placeholder='City, Country'
                      className={inputClasses}
                      required
                    />
                  </FormGroup>
                </div>
              </div>
              <div className='vet-list mb-56'>
                <div className='text-lg text-gray-600 mb-8 flex gap-12 items-center'>
                  <span>Veterinary</span>
                  <div className='divider h-[1px] bg-gray-300 flex-grow'></div>
                </div>
                <div className='grid grid-cols-1 md-lg:grid-cols-2 lg-xl:grid-cols-3 gap-16'>
                  {vetList.map((data, index) => (
                    <React.Fragment key={index}>
                      <VetCards
                        image={data.image}
                        name={data.veterinary_name}
                        building={data.building}
                        address={data.address}
                        contactNumber={data.contact_number}
                        email={data.email}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className='pet-information mb-56'>
                <div className='text-lg text-gray-600 mb-8 flex gap-12 items-center'>
                  <span>Pet information</span>
                  <div className='divider h-[1px] bg-gray-300 flex-grow'></div>
                </div>
                <div className='grid grid-cols-2 gap-16'>
                  <FormGroup label="Pet's Name" id='petName' isRequired>
                    <input
                      type='text'
                      id='petName'
                      placeholder="Pet's Name"
                      className={inputClasses}
                      required
                    />
                  </FormGroup>
                  <FormGroup
                    label='Pet Type'
                    id='type'
                    isRequired
                    className='row-start-2'
                  >
                    <input
                      type='text'
                      id='type'
                      placeholder='Dog / Cat / Bird'
                      className={inputClasses}
                      required
                    />
                  </FormGroup>
                  <FormGroup label='Breed' id='breed' className='row-start-3'>
                    <input
                      type='text'
                      id='breed'
                      placeholder='Golden Retriever / Persian'
                      className={inputClasses}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Gender'
                    id='gender'
                    isRequired
                    className='row-start-4'
                  >
                    <select className={inputClasses} id='breed'>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  </FormGroup>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
