import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const PatientDetails = () => {
    const { id } = useParams()
    const patientId = Number(id)
    const patient = useSelector((state: RootState) =>
        state.patients.data.find((p) => p.id === patientId)
      )

  if (!patient) return <div>Patient not found.</div>

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Patient Details</h2>
      <p><strong>Name:</strong> {patient.firstName} {patient.lastName}</p>
      <p><strong>Email:</strong> {patient.email}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Age:</strong> {patient.age}</p>
    </div>
  )
}

export default PatientDetails
