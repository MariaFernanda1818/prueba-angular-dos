import { Support } from "./Support"
import { User } from "./User"

export interface UsersResponse{

    page:number

    per_page:number

    total: number

    total_pages: number

    object:User[]

    support:Support

}