import { createForm, FieldApi, formOptions } from '@tanstack/solid-form';
import { Show, Index } from 'solid-js';


const formOpts = formOptions({
  defaultValues: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    referredBy: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    positionDesired: '',
    desiredSalary: '',
    startDate: '',
    currentlyEmployed: '',
    appliedBefore: '',
    previousEmployment: [
      { name: '', startDate: '', endDate: '', reasonForLeaving: '', wage: '' }
    ],
    highSchoolNameAndLocation: '',
    highSchoolGraduated: '',
    highSchoolYearsAttended: 1,
    collegeOrTechnicalSchoolNameAndLocation: '',
    collegeOrTechnicalSchoolGraduated: '',
    collegeOrTechnicalSchoolYearsAttended: 0,
    collegeOrTechnicalSchoolSubjectStudied: '',
    ccpCdaNameAndLocation: '',
    ccpCdaGraduated: '',
    ccpCdaYearsAttended: 0,
    ccpCdaSubjectStudied: '',
    previouslyFingerprinted: '',
    driversLicenseNumber: '',
    performJobFunctions: '',
    professionalDevelopmentLadderCert: '',
    professionalDevelopmentLadderCertExirationDate: '',
    firstAidCprCard: '',
    firstAidCprCardExpirationDate: '',
    foodHandlerCard: '',
    foodHandlerCardExpirationDate: '',
    entryLevelChildCareTraining: '',
    entryLevelChildCareTrainingDate: '',
    felonyConviction: '',
    otherState: '',
    references: [
      { name: '', relationship: '', phone: '' }
    ],
    signature: ''
  }
})

interface FieldInfoProps {
  field: FieldApi<any, any, any, any>
}

function FieldInfo(props: FieldInfoProps) {
  return (
    <>
      {props.field.state.meta.isTouched &&
        props.field.state.meta.errors.length ? (
        <em class='text-red-800'>{props.field.state.meta.errors.join(',')}</em>
      ) : null}
      {props.field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

function App() {
  const form = createForm(() => ({
    ...formOpts,
    onSubmit: ({ value }) => {
      console.log(value)
    }
  }))
  return (
    <div class='flex-1 px-4 py-8 sm:px-6 lg:px-8'>
      <form class="max-w-4xl mx-auto p-6 space-y-8 rounded-lg" id="applicationForm" onsubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}>
        {/* Personal Information Section */}
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-8">
          <h2 class="text-2xl font-bold mb-6">Personal Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* First Name */}
            <div class="space-y-2">
              <form.Field
                name="firstName"
                validators={{
                  onSubmit: ({ value }) => !value ? 'First Name is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>First Name</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )

                }}
              />

            </div>
            {/* Last Name */}
            <div class="space-y-2">
              <form.Field
                name="lastName"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Last Name is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name}>Last Name</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Email Address */}
            <div class="space-y-2">
              <form.Field
                name="email"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Email is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name}>Email Address</label>
                      <input
                        id={field.name}
                        type='email'
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Phone Number */}
            <div class="space-y-2">
              <form.Field
                name="phoneNumber"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Phone Number is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name}>Telephone Number</label>
                      <input
                        id={field.name}
                        name={field.name}
                        type='tel'
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Referred By */}
            <div class="space-y-2">
              <form.Field
                name="referredBy"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name}>Referred By</label>
                      <input
                        id={field.name}
                        type='text'
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Date of Birth */}
            <div class="space-y-2">
              <form.Field
                name="dateOfBirth"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Date of Birth is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name}>Date of Birth</label>
                      <input
                        id={field.name}
                        type='date'
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Drivers License/State ID */}
            <div class="space-y-2">
              <form.Field
                name="driversLicenseNumber"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Drivers License/State ID is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name}>Drivers License/State Issued I.D. Number</label>
                      <input
                        id={field.name}
                        type='text'
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Job Functions */}
            <div class="space-y-2">
              <form.Field
                name="performJobFunctions"
                validators={{
                  onSubmit: ({ value }) => !value ? 'This field is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name}>Can you perform the job’s essential functions?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Fingerprinted */}
            <div class="space-y-2">
              <form.Field
                name="previouslyFingerprinted"
                validators={{
                  onSubmit: ({ value }) => !value ? 'This field is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Have you been fingerprinted for Childcare before?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Felony */}
            <div class="space-y-2">
              <form.Field
                name="felonyConviction"
                validators={{
                  onSubmit: ({ value }) => !value ? 'This field is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Have you ever been convicted of a felony?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Other State */}
            <div class="space-y-2">
              <form.Field
                name="otherState"
                validators={{
                  onSubmit: ({ value }) => !value ? 'This field is required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>In the past 5 years, have you lived in any state/country other than Oklahoma?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
          </div>
        </div>
        {/* Address Information Section */}
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-8">
          <h2 class="text-2xl font-bold mb-6">Address Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div class="space-y-2 md:col-span-2">
              <form.Field
                name="streetAddress"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Street Address is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Address</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            <div class="space-y-2">
              <form.Field
                name="city"
                validators={{
                  onSubmit: ({ value }) => !value ? 'City is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>City</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            <div class="space-y-2 ">
              <form.Field
                name="zipCode"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Zip Code is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Zip Code</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
          </div>
        </div>
        {/* Employment Information Section */}
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-8">
          <h2 class="text-2xl font-bold mb-6">Employment Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Position Desired */}
            <div class="space-y-2 md:col-span-2">
              <form.Field
                name="positionDesired"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Position Desired is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Position Desired</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Desired Salary */}
            <div class="space-y-2">
              <form.Field
                name="desiredSalary"
                validators={{
                  onSubmit: ({ value }) => !value ? ' Desired Salary is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Desired Salary</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Start Date */}
            <div class="space-y-2">
              <form.Field
                name="startDate"
                validators={{
                  onSubmit: ({ value }) => !value ? 'Start Date is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Date you can Start</label>
                      <input
                        id={field.name}
                        name={field.name}
                        type='date'
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Currently Employed */}
            <div class="space-y-2">
              <form.Field
                name="currentlyEmployed"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Are you Currently Employed?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* Applied Before */}
            <div class="space-y-2">
              <form.Field
                name="appliedBefore"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Have you applied here before?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
          </div>
        </div>
        {/* Previous Employment Section */}
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-8">
          <h2 class="text-2xl font-bold mb-6">Previous Employment (Most recent 3)</h2>
          <form.Field
            name="previousEmployment">
            {(field) => (
              <>
                <div class="border-b pb-6 mb-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <Show when={field().state.value.length > 0}>
                      <Index each={field().state.value}>
                        {(_, i) => (
                          <>
                            {i > 0 && (
                              <div class="mb-4 col-span-2 text-center">
                                <div class="text-sm font-medium text-gray-500">Previous Employer {i + 1}</div>
                                <div class="w-full border-t border-gray-300 mt-2"></div>
                              </div>
                            )}
                            <form.Field name={`previousEmployment[${i}].name`}>
                              {(subField) => (
                                <div class='space-y-2'>
                                  <label for={field().name} class='text-sm font-medium mb-1 block'>
                                    Employer {i + 1} Name
                                  </label>
                                  <input
                                    type='text'
                                    value={subField().state.value}
                                    onInput={(e) => subField().handleChange(e.target.value)}
                                    class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                  />
                                </div>
                              )}
                            </form.Field>
                            <form.Field name={`previousEmployment[${i}].wage`}>
                              {(subField) => (
                                <div class='space-y-2'>
                                  <label for={field().name} class='text-sm font-medium mb-1 block'>
                                    Wage
                                  </label>
                                  <input
                                    type='text'
                                    value={subField().state.value}
                                    onInput={(e) => subField().handleChange(e.target.value)}
                                    class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                  />
                                </div>
                              )}
                            </form.Field>
                            <form.Field name={`previousEmployment[${i}].startDate`}>
                              {(subField) => (
                                <div class='space-y-2'>
                                  <label for={field().name} class='text-sm font-medium mb-1 block'>
                                    Start Date
                                  </label>
                                  <input
                                    type='date'
                                    value={subField().state.value}
                                    onInput={(e) => subField().handleChange(e.target.value)}
                                    class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                  />
                                </div>
                              )}
                            </form.Field>
                            <form.Field name={`previousEmployment[${i}].endDate`}>
                              {(subField) => (
                                <div class='space-y-2'>
                                  <label for={field().name} class='text-sm font-medium mb-1 block'>
                                    End Date
                                  </label>
                                  <input
                                    type='date'
                                    value={subField().state.value}
                                    onInput={(e) => subField().handleChange(e.target.value)}
                                    class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                  />
                                </div>
                              )}
                            </form.Field>
                            <form.Field name={`previousEmployment[${i}].reasonForLeaving`}>
                              {(subField) => (
                                <div class="md:col-span-2 space-y-2">
                                  <label for={field().name} class='text-sm font-medium mb-1 block'>
                                    Reason for Leaving
                                  </label>
                                  <input
                                    type='text'
                                    value={subField().state.value}
                                    onInput={(e) => subField().handleChange(e.target.value)}
                                    class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                  />
                                </div>
                              )}
                            </form.Field>
                            {field().state.value.length > 1 && i !== 0 && (
                              <button
                                class="py-2 rounded-md  bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors duration-150 w-1/2 col-start-2 place-self-end"
                                onClick={() => field().removeValue(i)}
                                type="button"
                              >
                                <svg
                                  class="w-4 h-4 mr-1.5 inline-block"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                                <span>Remove Employer</span>
                              </button>
                            )}
                          </>
                        )}
                      </Index>
                    </Show>
                  </div>
                </div>
                <div class="flex justify-end">
                  {field().state.value.length < 3 &&
                    (
                      <button onClick={() => field().pushValue({ name: '', startDate: '', endDate: '', reasonForLeaving: '', wage: '' })}
                        class='bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors duration-150'>
                        <svg class="w-4 h-4 mr-1.5 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
                        Add Employer
                      </button>
                    )}
                </div>
              </>
            )}
          </form.Field>
        </div>
        {/*  Education Information Section*/}
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-8">
          <h2 class="text-2xl font-bold mb-6">Education Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
            {/* High School Name And Location*/}
            <div class="space-y-2">
              <form.Field
                name="highSchoolNameAndLocation"
                validators={{
                  onChange: ({ value }) => !value ? 'High School Name & Location is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>High School</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* High School Years Attended */}
            <div class="space-y-2">
              <form.Field
                name="highSchoolYearsAttended"
                validators={{
                  onChange: ({ value }) => !value ? 'Years Attended is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Years Attended</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        type='number'
                        min={1}
                        max={4}
                        onChange={(e) => field().handleChange(e.target.valueAsNumber)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* High School Graduated */}
            <div class="space-y-2">
              <form.Field
                name="highSchoolGraduated"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Did you Graduate?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* College or Tech School */}
            <div class="mb-4 col-span-3 text-center">
              <div class="text-sm font-medium text-gray-500">College or Technical School</div>
              <div class="w-full border-t border-gray-300 mt-2"></div>
            </div>
            {/* College or Technical School Name And Location*/}
            <div class="space-y-2">
              <form.Field
                name="collegeOrTechnicalSchoolNameAndLocation"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>College or Technical School</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* College or Technical School Years Attended */}
            <div class="space-y-2">
              <form.Field
                name="collegeOrTechnicalSchoolYearsAttended"
                validators={{
                  onChange: ({ value }) => !value ? 'Years Attended is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Years Attended</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        type='number'
                        min={0}
                        max={4}
                        onChange={(e) => field().handleChange(e.target.valueAsNumber)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* College or Technical School Graduated */}
            <div class="space-y-2">
              <form.Field
                name="collegeOrTechnicalSchoolGraduated"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Did you Graduate?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* College or Technical School Subject Studied */}
            <div class="space-y-2 md:col-span-3">
              <form.Field
                name="collegeOrTechnicalSchoolSubjectStudied"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Subject Studied</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        type='text'
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* CCP/CDA */}
            <div class="mb-4 col-span-3 text-center">
              <div class="text-sm font-medium text-gray-500">CCP/CDA</div>
              <div class="w-full border-t border-gray-300 mt-2"></div>
            </div>
            {/* CCP/CDA Name And Location*/}
            <div class="space-y-2">
              <form.Field
                name="ccpCdaNameAndLocation"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>CCP/CDA</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* CCP/CDA Years Attended */}
            <div class="space-y-2">
              <form.Field
                name="ccpCdaYearsAttended"
                validators={{
                  onChange: ({ value }) => !value ? 'Years Attended is Required' : null
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Years Attended</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        type='number'
                        min={0}
                        max={4}
                        onChange={(e) => field().handleChange(e.target.valueAsNumber)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* CCP/CDA School Graduated */}
            <div class="space-y-2">
              <form.Field
                name="ccpCdaGraduated"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Did you Graduate?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
            {/* CCP/CDA School Subject Studied */}
            <div class="space-y-2 md:col-span-3">
              <form.Field
                name="ccpCdaSubjectStudied"
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Subject Studied</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field().state.value}
                        onBlur={field().handleBlur}
                        type='text'
                        onChange={(e) => field().handleChange(e.target.value)}
                        class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                      />
                      <FieldInfo field={field()} />
                    </>
                  )
                }}
              />
            </div>
          </div>
        </div>
        {/* Certification Information Section */}
        <div class='bg-white rounded-lg shadow-lg p-6 space-y-8'>
          <h2 class="text-2xl font-bold mb-6">Certification Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Professional Development */}
            <div class="space-y-2 md:col-span-2">
              <form.Field
                name="professionalDevelopmentLadderCert"
                validators={{
                  onChange: ({ value, fieldApi }) => {
                    if (value === 'No') {
                      fieldApi.form.setFieldValue('professionalDevelopmentLadderCertExirationDate', '')
                    }
                    return undefined;
                  }
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>
                        Do you have a Professional Development Ladder certificate or Director’s Credential
                        certificate issued through CECPD.ORG?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />

                      <Show when={field().state.value === 'Yes'}>
                        <form.Field name='professionalDevelopmentLadderCertExirationDate'
                          validators={{
                            onChangeListenTo: ['professionalDevelopmentLadderCert'],
                            onChange: ({ value, fieldApi }) => {
                              if (fieldApi.form.getFieldValue('professionalDevelopmentLadderCert') === 'Yes' && !value) {
                                return 'Expiration Date is required'
                              }
                              if (value && new Date(value) <= new Date()) {
                                return 'Expiration Date must be in the future'
                              }
                              return undefined;
                            }
                          }}>
                          {(subField) => (
                            <>
                              <label for={subField.name} class='text-sm font-medium mb-1 block'>Expiration Date</label>
                              <input
                                id={subField.name}
                                name={subField.name}
                                value={subField().state.value}
                                onBlur={subField().handleBlur}
                                type='date'
                                onChange={(e) => subField().handleChange(e.target.value)}
                                class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                              />
                              <FieldInfo field={subField()} />
                            </>
                          )}
                        </form.Field>
                      </Show>
                    </>
                  )
                }}
              />
            </div>
            {/* First aid CPR */}
            <div class="space-y-2 md:col-span-2">
              <form.Field
                name="firstAidCprCard"
                validators={{
                  onChange: ({ value, fieldApi }) => {
                    if (value === 'No') {
                      fieldApi.form.setFieldValue('firstAidCprCardExpirationDate', '')
                    }
                    return undefined;
                  }
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Do you have a First Aid/CPR card?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />

                      <Show when={field().state.value === 'Yes'}>
                        <form.Field name='firstAidCprCardExpirationDate'
                          validators={{
                            onChangeListenTo: ['firstAidCprCard'],
                            onChange: ({ value, fieldApi }) => {
                              if (fieldApi.form.getFieldValue('firstAidCprCard') === 'Yes' && !value) {
                                return 'Expiration Date is required'
                              }
                              if (value && new Date(value) <= new Date()) {
                                return 'Expiration Date must be in the future'
                              }
                              return undefined;
                            }
                          }}>
                          {(subField) => (
                            <>
                              <label for={subField.name} class='text-sm font-medium mb-1 block'>Expiration Date</label>
                              <input
                                id={subField.name}
                                name={subField.name}
                                value={subField().state.value}
                                onBlur={subField().handleBlur}
                                type='date'
                                onChange={(e) => subField().handleChange(e.target.value)}
                                class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                              />
                              <FieldInfo field={subField()} />
                            </>
                          )}
                        </form.Field>
                      </Show>
                    </>
                  )
                }}
              />
            </div>
            {/*  Food Handlers Permit*/}
            <div class="space-y-2 md:col-span-2">
              <form.Field
                name="foodHandlerCard"
                validators={{
                  onChange: ({ value, fieldApi }) => {
                    if (value === 'No') {
                      fieldApi.form.setFieldValue('foodHandlerCardExpirationDate', '')
                    }
                    return undefined;
                  }
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Do you have a food handlers permit?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />

                      <Show when={field().state.value === 'Yes'}>
                        <form.Field name='foodHandlerCardExpirationDate'
                          validators={{
                            onChangeListenTo: ['foodHandlerCard'],
                            onChange: ({ value, fieldApi }) => {
                              if (fieldApi.form.getFieldValue('foodHandlerCard') === 'Yes' && !value) {
                                return 'Expiration Date is required'
                              }
                              if (value && new Date(value) <= new Date()) {
                                return 'Expiration Date must be in the future'
                              }
                              return undefined;
                            }
                          }}>
                          {(subField) => (
                            <>
                              <label for={subField.name} class='text-sm font-medium mb-1 block'>Expiration Date</label>
                              <input
                                id={subField.name}
                                name={subField.name}
                                value={subField().state.value}
                                onBlur={subField().handleBlur}
                                type='date'
                                onChange={(e) => subField().handleChange(e.target.value)}
                                class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                              />
                              <FieldInfo field={subField()} />
                            </>
                          )}
                        </form.Field>
                      </Show>
                    </>
                  )
                }}
              />
            </div>
            {/* Entry Level Childcare Training */}
            <div class="space-y-2 md:col-span-2">
              <form.Field
                name="entryLevelChildCareTraining"
                validators={{
                  onChange: ({ value, fieldApi }) => {
                    if (value === 'No') {
                      fieldApi.form.setFieldValue('entryLevelChildCareTrainingDate', '')
                    }
                    return undefined;
                  }
                }}
                children={(field) => {
                  return (
                    <>
                      <label for={field.name} class='text-sm font-medium mb-1 block'>Have you taken Entry Level Child Care Training?</label>
                      <select name={field.name} class='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => {
                          field().handleChange(e.target.value)
                        }}>
                        <option value="" disabled selected={true}>Select an option</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                      </select>
                      <FieldInfo field={field()} />

                      <Show when={field().state.value === 'Yes'}>
                        <form.Field name='entryLevelChildCareTrainingDate'
                          validators={{
                            onChangeListenTo: ['entryLevelChildCareTraining'],
                            onChange: ({ value, fieldApi }) => {
                              if (fieldApi.form.getFieldValue('entryLevelChildCareTraining') === 'Yes' && !value) {
                                return 'Date of Training is required'
                              }
                              return undefined;
                            }
                          }}>
                          {(subField) => (
                            <>
                              <label for={subField.name} class='text-sm font-medium mb-1 block'>Date of Training</label>
                              <input
                                id={subField.name}
                                name={subField.name}
                                value={subField().state.value}
                                onBlur={subField().handleBlur}
                                type='date'
                                onChange={(e) => subField().handleChange(e.target.value)}
                                class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                              />
                              <FieldInfo field={subField()} />
                            </>
                          )}
                        </form.Field>
                      </Show>
                    </>
                  )
                }}
              />
            </div>
          </div>
        </div>
        {/* References */}
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-8">
          <h2 class="text-2xl font-bold mb-6">References (Not related to you)</h2>
          <form.Field
            name="references">
            {(field) => (
              <>
                <div class="border-b pb-6 mb-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <Show when={field().state.value.length > 0}>
                      <Index each={field().state.value}>
                        {(_, i) => (
                          <>
                            {i > 0 && (
                              <div class="mb-4 col-span-2 text-center">
                                <div class="text-sm font-medium text-gray-500">Reference {i + 1}</div>
                                <div class="w-full border-t border-gray-300 mt-2"></div>
                              </div>
                            )}
                            <form.Field name={`references[${i}].name`}>
                              {(subField) => (
                                <div class='space-y-2'>
                                  <label for={field().name} class='text-sm font-medium mb-1 block'>
                                    Reference {i + 1} Name
                                  </label>
                                  <input
                                    type='text'
                                    value={subField().state.value}
                                    onInput={(e) => subField().handleChange(e.target.value)}
                                    class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                  />
                                </div>
                              )}
                            </form.Field>
                            <form.Field name={`references[${i}].relationship`}>
                              {(subField) => (
                                <div class='space-y-2'>
                                  <label for={field().name} class='text-sm font-medium mb-1 block'>
                                    Relationship
                                  </label>
                                  <input
                                    type='text'
                                    value={subField().state.value}
                                    onInput={(e) => subField().handleChange(e.target.value)}
                                    class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                  />
                                </div>
                              )}
                            </form.Field>
                            <form.Field name={`references[${i}].phone`}>
                              {(subField) => (
                                <div class='space-y-2 md:col-span-2'>
                                  <label for={field().name} class='text-sm font-medium mb-1 block'>
                                    Phone
                                  </label>
                                  <input
                                    type='tel'
                                    value={subField().state.value}
                                    onInput={(e) => subField().handleChange(e.target.value)}
                                    class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                                  />
                                </div>
                              )}
                            </form.Field>
                            {field().state.value.length > 1 && i !== 0 && (
                              <button
                                class="py-2 rounded-md  bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors duration-150 w-1/2 col-start-2 place-self-end"
                                onClick={() => field().removeValue(i)}
                                type="button"
                              >
                                <svg
                                  class="w-4 h-4 mr-1.5 inline-block"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                                <span>Remove Reference</span>
                              </button>
                            )}
                          </>
                        )}
                      </Index>
                    </Show>
                  </div>
                </div>
                <div class="flex justify-end">
                  {field().state.value.length < 3 &&
                    (
                      <button onClick={() => field().pushValue({ name: '', relationship: '', phone: '' })}
                        class='bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors duration-150'>
                        <svg class="w-4 h-4 mr-1.5 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
                        Add Reference
                      </button>
                    )}
                </div>
              </>
            )}
          </form.Field>
        </div>
        {/* Signature */}
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-8">
          <h2 class="text-2xl font-bold mb-6">Electronic Signature</h2>
          <form.Field name='signature' validators={{
            onSubmit: ({ value }) => !value ? 'Signature is required' : null
          }}
            children={(field) => {
              return (
                <>
                  <div class="space-y-2">
                    <label for={field.name} class='text-sm font-medium mb-1 block'>Signature</label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field().state.value}
                      onBlur={field().handleBlur}
                      onChange={(e) => field().handleChange(e.target.value)}
                      class='py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
                    />
                    <p class="text-sm text-gray-500">
                      By typing your name above, you agree that this constitutes a legal
                      signature.
                    </p>
                    <FieldInfo field={field()} />
                  </div>
                </>
              )
            }}
          />
        </div>

        <form.Subscribe
          selector={(state) => ({
            canSubmit: state.canSubmit,
            isSubmitting: state.isSubmitting,
          })}
          children={(state) => {
            return (
              <button type="submit" disabled={!state().canSubmit} class='bg-blue-500 text-white py-2 px-4 rounded-md'>
                {state().isSubmitting ? '...' : 'Submit'}
              </button>
            )
          }}
        />
      </form>
    </div>
  )
}

export default App;