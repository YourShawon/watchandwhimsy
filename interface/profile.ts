export interface ProfileData {
  name: string
  username: string
  email: string
  phone: string
}

export interface ChangePassFormData {
  oldPass: string
  newPass: string
  confirmPass: string
}

export interface RowData {
  status:
    | 'pending'
    | 'processing'
    | 'success'
    | 'failed'
    | 'shipped'
    | 'delivered'
}
