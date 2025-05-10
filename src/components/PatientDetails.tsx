import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const PatientDetails = () => {
  const { id } = useParams()
  const patientId = Number(id)
  const patient = useSelector((state: RootState) =>
    state.patients.data.find((p) => p.id === patientId)
  )

  if (!patient) {
    return (
      <div className="p-6 text-center text-gray-600 font-medium">
        Patient not found.
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-xl shadow-lg border border-muted">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Patient Details</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Name</span>
          <span className="text-gray-800">{patient.firstName} {patient.lastName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Email</span>
          <span className="text-gray-800">{patient.email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Gender</span>
          <span className="text-gray-800">{patient.gender}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Age</span>
          <span className="text-gray-800">{patient.age}</span>
        </div>
      </div>
    </div>
  )
}

export default PatientDetails
