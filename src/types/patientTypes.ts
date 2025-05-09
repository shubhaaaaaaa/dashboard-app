export interface Patient {
    name: {
      first: string
      last: string
    }
    email: string
    gender: string
    dob: {
      age: number
    }
  }