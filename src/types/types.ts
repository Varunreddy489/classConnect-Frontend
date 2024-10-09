export interface StudentAuthTypes {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  studentId: string;
  department: string;
}

export interface StudentLoginTypes {
  email: string;
  password: string;
}

export interface ClubTypes {
  id: string;
  name: string;
  description: string;
  profilePic: string;
}

export type CardFeatures = {
  image: string;
  icon: string;
  text: string;
  description: string;
};

export type CreateClubTypes = {
  id: string;
  name: string;
  description: string;
  profilePic?: string;
};
