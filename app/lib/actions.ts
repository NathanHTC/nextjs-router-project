//this is a server action file
//mark all the export function as server function
//they can be imported into client or server component
//server functions are async and executed on server to 
//handle form submission and data mutations
'use server'
//zod is a typescript-first validation lib
import { z } from 'zod';
// import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from '@/node_modules/next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenicate (
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch(error){
        if(error instanceof AuthError) {
            switch(error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                defualt:
                    return 'Somthing went wrong';
            }
        }
        throw error;
    }
}

const FormSchema = z.object({
    id:z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.'
    }),
    amount: z.coerce
        .number()
        .gt(0, { message: 'Please enter an amount greater than $0.'}),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status.',
    }),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id:true, date:true });
export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
};
//by using useFormState, we are validating and update the state of form
export async function createInvoice(prevState: State, formData: FormData){
    //validate form fields using Zod
    //safeParse prevent zod throw error when validation fails
    const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    console.log(validatedFields)

    //if form validation fails, return errors early, otherwise, continue
    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    //if we are here, form data is validated
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    //invoice creation date
    const date = new Date().toISOString().split('T')[0];
    try{
        await sql`
       INSERT INTO invoices (customer_id, amount, status, date)
       VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
       `;
       
       } catch(error) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
       } 
       //purge the cache since it became outdated, trigger a new request to the server
       revalidatePath('/dashboard/invoices');
       //redirect user back to invoice page
       redirect('/dashboard/invoices');
}
// export async function createInvoice2(formData: FormData){
//     //formData is a specific type of form obejct, but we want to 
//     //turn it into a plain js object that could use . to access value
//     // console.log("createInvoice action function called")
//     const { customerId, amount, status } = CreateInvoice.parse({
//         customerId: formData.get('customerId'),
//         amount: formData.get('amount'),
//         status: formData.get('status'),
//     });
//     //store monetary values in cents in database
//     //to eliminate JS floating point errors
//     const amountInCents = amount * 100;
//     //invoice creation date
//     const date = new Date().toISOString().split('T')[0];
    
//    try{
//     await sql`
//    INSERT INTO invoices (customer_id, amount, status, date)
//    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//    `;
   
//    } catch(error) {
//     return {
//         message: 'Database Error: Failed to Create Invoice.',
//     };
//    } 
//    //purge the cache since it became outdated, trigger a new request to the server
//    revalidatePath('/dashboard/invoices');
//    //redirect user back to invoice page
//    redirect('/dashboard/invoices');
   
// }

const UpdateInvoice = FormSchema.omit({ id:true, date:true })

export async function updateInvoice(
    id:string,
    prevState:State, 
    formData: FormData
    ){
    const validatedFields = UpdateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        };
    }

    const { customerId, amount, status } = validatedFields.data;

    const amountInCents = amount * 100;

    try{
        await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
        `
        
    } catch(error){
        return {
            message: 'Database error, Failed to update invoice'
        }
    }
    //purge client cache and redirect
    revalidatePath('/dashboard/invoices');
    //redirect works by throwing an error, which would be caught by catch
    redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string){
    // throw new Error('Failed to Delete Invoice');
    try{
        await sql`DELETE FROM invoices WHERE id = ${id}`;
        revalidatePath('/dashboard/invoice');
    } catch(error){
        return {
            message: 'Database error: Failed to delete invoice.'
        }
    }
    
}