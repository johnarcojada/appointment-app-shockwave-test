"use client";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
import FormGroup from "./FormGroup";
import VetCards from "./VetCards";
import vetList from "data/veterinarySources.json";
import Toast, { ToastAction, ToastVariant } from "@/components/Toast";
import {
  EventType,
  addEvent,
  setIsClientOverviewOpen,
  updateEvent,
} from "@/lib/features/clientOverviewSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const inputClasses =
  "p-16 rounded-lg border border-solid border-gray-300 w-full outline-primary hover:border-gray-400";

const Form = () => {
  const dispatch = useAppDispatch();
  const useSelector = useAppSelector;
  const { eventSources } = useSelector((state) => state.clientOverviewReducer);
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  const selectedClientSource = eventSources.find(
    (source) => source.events?.[0].id === eventId
  );

  const [formData, setFormData] = useState<EventType>(
    selectedClientSource?.events?.[0] || {
      id: "0",
      title: "",
      start: "",
      end: "",
      allDay: false,
      icon: "calendar",
      backgroundColor: "#fff4ec",
      textColor: "#1C1C1E",
      borderColor: "#FF630B",
      client: {
        clientInfo: {
          name: "",
          email: "",
          phone: "",
          address: "",
          image:
            "https://ouch-cdn2.icons8.com/4sazhZjvAFjjyrV6c3v4zoowX6PIN_YX0lrtUF0icNU/rs:fit:368:404/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjYy/L2Y3MTc1MjFjLTdl/YjctNGI5MC05ZTkz/LWJmN2U5NDgxNTRm/NC5zdmc.png",
        },
        vetDetails: {
          vetId: "",
          image: "",
          name: "",
          building: "",
          email: "",
          phone: "",
          address: "",
        },
        petDetails: {
          name: "",
          type: "",
          breed: "",
          age: "10 months",
          birthday: "January 1, 2023",
          sex: "" || "male" || "female",
        },
      },
    }
  );
  const [isShowToast, setIsShowToast] = useState<boolean>(false);

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClientInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      client: {
        ...prevState.client,
        clientInfo: {
          ...prevState.client.clientInfo,
          [e.target.name]: e.target.value,
        },
      },
    }));
  };
  const handleOnSelectVet = (vetId: string) => {
    const selectedVet = vetList.find((vet) => vet.vetId === vetId);
    if (!selectedVet) return;
    setFormData((prevState) => ({
      ...prevState,
      client: {
        ...prevState.client,
        vetDetails: selectedVet,
      },
    }));
  };
  const handelPetInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      client: {
        ...prevState.client,
        petDetails: {
          ...prevState.client.petDetails,
          [e.target.name]: e.target.value,
        },
      },
    }));
  };
  const handleOnFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (Object.keys(formData.client.vetDetails).length === 0) {
      setIsShowToast(true);
      return;
    }
    if (eventId !== null) {
      dispatch(updateEvent(formData));
      return router.push("/appointments");
    }
    dispatch(addEvent(formData));
    return router.push("/appointments");
  };

  dispatch(setIsClientOverviewOpen(false));

  return (
    <div className='form-container p-32'>
      {isShowToast && (
        <Toast
          variant={ToastVariant.DEFAULT}
          action={ToastAction.CLOSE}
          show={isShowToast}
          onClose={() => setIsShowToast(false)}
        >
          <span>Please select a Veterinary before submitting.</span>
        </Toast>
      )}
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
            <form action='#' onSubmit={handleOnFormSubmit}>
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
                      name='title'
                      placeholder='Ex: Pet check-up'
                      className={inputClasses}
                      required
                      value={formData.title}
                      onChange={handleFormInputChange}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Appointment Start'
                    id='appointmentStart'
                    className='row-start-3'
                    isRequired
                  >
                    <input
                      type='datetime-local'
                      id='appointmentStart'
                      name='start'
                      className={inputClasses}
                      required
                      value={formData.start}
                      onChange={handleFormInputChange}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Appointment End'
                    id='appointmentEnd'
                    className='row-start-3'
                    isRequired
                  >
                    <input
                      type='datetime-local'
                      id='appointmentEnd'
                      name='end'
                      className={inputClasses}
                      required
                      value={formData.end}
                      onChange={handleFormInputChange}
                    />
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
                      name='name'
                      placeholder='John Doe'
                      className={inputClasses}
                      required
                      value={formData.client.clientInfo.name}
                      onChange={handleClientInputChange}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Email'
                    id='clientEmail'
                    className='row-start-2'
                    isRequired
                  >
                    <input
                      type='text'
                      id='clientEmail'
                      name='email'
                      placeholder='sample@email.com'
                      className={inputClasses}
                      required
                      value={formData.client.clientInfo.email}
                      onChange={handleClientInputChange}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Phone'
                    id='clientPhone'
                    className='row-start-3'
                    isRequired
                  >
                    <input
                      type='text'
                      id='clientPhone'
                      name='phone'
                      placeholder='+630123456789'
                      className={inputClasses}
                      required
                      value={formData.client.clientInfo.phone}
                      onChange={handleClientInputChange}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Address'
                    id='clientAddress'
                    className='row-start-4'
                    isRequired
                  >
                    <input
                      type='text'
                      id='clientAddress'
                      name='address'
                      placeholder='City, Country'
                      className={inputClasses}
                      required
                      value={formData.client.clientInfo.address}
                      onChange={handleClientInputChange}
                    />
                  </FormGroup>
                </div>
              </div>
              <div className='vet-list mb-56'>
                <div className='text-lg text-gray-600 mb-8 flex gap-12 items-center'>
                  <span>Veterinary</span>
                  <div className='divider h-[1px] bg-gray-300 flex-grow'></div>
                </div>
                <div className='grid grid-cols-1 md-lg-900:grid-cols-2 lg-xl:grid-cols-3 gap-16'>
                  {vetList.map((data, index) => (
                    <React.Fragment key={index}>
                      <VetCards
                        image={data.image}
                        name={data.name}
                        building={data.building}
                        address={data.address}
                        contactNumber={data.phone}
                        email={data.email}
                        isSelected={
                          data.vetId === formData.client.vetDetails?.vetId
                        }
                        onSelect={() => handleOnSelectVet(data.vetId)}
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
                      name='name'
                      placeholder='Ex: Brownie'
                      className={inputClasses}
                      required
                      value={formData.client.petDetails.name}
                      onChange={handelPetInputChange}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Pet Type'
                    id='petType'
                    isRequired
                    className='row-start-2'
                  >
                    <input
                      type='text'
                      id='petType'
                      name='type'
                      placeholder='Ex: Dog / Cat / Bird'
                      className={inputClasses}
                      required
                      value={formData.client.petDetails.type}
                      onChange={handelPetInputChange}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Breed'
                    id='petBreed'
                    className='row-start-3'
                  >
                    <input
                      type='text'
                      id='petBreed'
                      name='breed'
                      placeholder='Ex: Golden Retriever / Persian'
                      className={inputClasses}
                      value={
                        formData.client.petDetails.breed || "" || undefined
                      }
                      onChange={handelPetInputChange}
                    />
                  </FormGroup>
                  <FormGroup
                    label='Gender'
                    id='petGender'
                    isRequired
                    className='row-start-4'
                  >
                    <select
                      className={inputClasses}
                      id='petGender'
                      name='sex'
                      value={formData.client.petDetails.sex}
                      onChange={handelPetInputChange}
                    >
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  </FormGroup>
                </div>
              </div>
              <div className='flex'>
                <button
                  type='submit'
                  className='transition-all duration-300 focus:shadow-none rounded-2xl px-28 py-12 active:shadow-none bg-primary text-white hover:bg-orange-hover'
                >
                  Submit changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
