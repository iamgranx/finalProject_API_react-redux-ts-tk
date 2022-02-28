import { User } from "../../api/users.types";

export interface UserProps extends User {
  onClick?: (id: string) => void;
    
}