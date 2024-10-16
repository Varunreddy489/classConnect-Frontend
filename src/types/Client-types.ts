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

export type ClubMembers = {
  id?: string;
  name?: string;
  email?: string;
  profilePic?: string;
  studentId?: string;
};

export type CreateClubTypes = {
  id: string;
  name: string;
  description: string;
  members: ClubMembers[];
  profilePic?: string;
};

export type AuthUserType = {
  id: string;
  name: string;
  email: string;
  profilePic: string;
};

export type Student = {
  id?: string;
  name?: string;
  email?: string;
  profilePic?: string | null;
  studentId?: string;
};

export type StudentsResponse = {
  students: Student[];
};

export type UserClubsResponse = {
  id: string;
  name?: string;
  description?: string;
  profilePic?: string;
  members?: ClubMembers[];
  creator?: ClubMembers;
};

export type Messagetypes = {
  id: string;
  body: string;
  sender: Student;
  createdAt: string;
};
