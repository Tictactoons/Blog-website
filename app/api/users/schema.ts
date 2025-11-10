

import {z} from "zod";

 const schema = z.object({
  name: z.string().min(2, "Name is required and should be at least 2 characters long"),
  
});

export default schema;