export interface SessionData {
    appointment_date: string;
    appointment_date_time: string;
    appointment_time: string;
    booked_by: string;
    charges: number;
    client_full_name: string;
    client_image: string;
    created_at: string;
    id: number;
    paid: string;
    patient_id: number;
    patient_name: string | null;
    relation: string | null;
    rescheduled_by: string | null;
    service_id: number;
    service_name: string;
    status: string;
    time_duration: string;
    type: string;
    updated_at: string;
    user_id: number;
  };

 export type DocTypes = "pdf" | "docx" | "img" | "text" | "canvas"


 export interface CommonSessionNote {
    id: number;
    client_id: number;
    fullname: string;
    avatar: string;
    practitioner_id: number;
    session_id: number;
    type: string;
    title: string;
    filename: string | null;
    file_size: number | null;
    content: string | null;
    canvas: string | null;
    created_at: string;
    updated_at: string;
    file_url: string;
}