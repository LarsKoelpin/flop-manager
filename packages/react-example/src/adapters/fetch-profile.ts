import { Profile } from "../models/Profile";

export const fetchProfiles = async (): Promise<Profile[]> => {
  return window
    .fetch("http://localhost:8080/profiles", {})
    .then((res) => res.json())
    .catch((err) => []);
};

export const fetchProfile = async (id: string): Promise<Profile> => {
  return window
    .fetch(`http://localhost:8080/profiles/${id}`, {})
    .then((res) => res.json())
    .catch((err) => []);
};
