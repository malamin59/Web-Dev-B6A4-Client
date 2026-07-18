interface Tutor {
  id: string;
  userId: string;
  bio: string;
  expertise: string;
  hourlyRate: number;
  user: {
    id: string;
    email: string;
    name: string;
    phone: string;
    provider: string;
    createdAt: string;
    role: string;
  };
}

