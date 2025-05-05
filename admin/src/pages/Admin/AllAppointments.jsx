// import React, { useEffect } from 'react'
// import { assets } from '../../assets/assets'
// import { useContext } from 'react'
// import { AdminContext } from '../../context/AdminContext'
// import { AppContext } from '../../context/AppContext'

// const AllAppointments = () => {

//   const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
//   const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

//   useEffect(() => {
//     if (aToken) {
//       getAllAppointments()
//     }
//   }, [aToken])

//   return (
//     <div className='w-full max-w-6xl m-5 '>

//       <p className='mb-3 text-lg font-medium'>All Appointments</p>

//       <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
//         <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
//           <p>#</p>
//           <p>Patient</p>
//           <p>Age</p>
//           <p>Date & Time</p>
//           <p>Doctor</p>
//           <p>Fees</p>
//           <p>Action</p>
//         </div>
//         {appointments.map((item, index) => (
//           <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
//             <p className='max-sm:hidden'>{index+1}</p>
//             <div className='flex items-center gap-2'>
//               <img src={item.userData.image} className='w-8 rounded-full' alt="" /> <p>{item.userData.name}</p>
//             </div>
//             <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
//             <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
//             <div className='flex items-center gap-2'>
//               <img src={item.docData.image} className='w-8 bg-gray-200 rounded-full' alt="" /> <p>{item.docData.name}</p>
//             </div>
//             <p>{currency}{item.amount}</p>
//             {item.cancelled ? <p className='text-xs font-medium text-red-400'>Cancelled</p> : item.isCompleted ? <p className='text-xs font-medium text-green-500'>Completed</p> : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />}
//           </div>
//         ))}
//       </div>

//     </div>
//   )
// }

// export default AllAppointments

import React, { useEffect, useContext } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const AllAppointments = () => {

  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  const downloadReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Appointment Report', 14, 15);

    const tableColumn = ["#", "Patient", "Age", "Date & Time", "Doctor", "Fees"];
    const tableRows = [];

    appointments.forEach((item, index) => {
      const rowData = [
        index + 1,
        item.userData.name,
        calculateAge(item.userData.dob),
        `${slotDateFormat(item.slotDate)}, ${item.slotTime}`,
        item.docData.name,
        `${currency}${item.amount}`
      ];
      tableRows.push(rowData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      styles: { fontSize: 10 }
    });

    doc.save('appointment_report.pdf');
  };

  return (
    <div className='w-full max-w-6xl m-5'>

      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      {/* Download Report Button */}
      <div className="flex justify-end mb-2">
        <button
          onClick={downloadReport}
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Download Report
        </button>
      </div>

      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {appointments.map((item, index) => (
          <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
            <p className='max-sm:hidden'>{index + 1}</p>
            <div className='flex items-center gap-2'>
              <img src={item.userData.image} className='w-8 rounded-full' alt="" />
              <p>{item.userData.name}</p>
            </div>
            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <div className='flex items-center gap-2'>
              <img src={item.docData.image} className='w-8 bg-gray-200 rounded-full' alt="" />
              <p>{item.docData.name}</p>
            </div>
            <p>{currency}{item.amount}</p>
            {item.cancelled ? (
              <p className='text-xs font-medium text-red-400'>Cancelled</p>
            ) : item.isCompleted ? (
              <p className='text-xs font-medium text-green-500'>Completed</p>
            ) : (
              <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointments
