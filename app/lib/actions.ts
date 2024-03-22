//this is a server action file
//mark all the export function as server function
//they can be imported into client or server component
//server functions are async and executed on server to 
//handle form submission and data mutations
'use server'
//zod is a typescript-first validation lib
import { z } from 'zod';

const FormSchema = z.object({
    id:z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id:true, date:true });

export async function createInvoice(formData: FormData){
    //formData is a specific type of form obejct, but we want to 
    //turn it into a plain js object that could use . to access value
    // console.log("createInvoice action function called")
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    

   console.log(typeof(amount))

}