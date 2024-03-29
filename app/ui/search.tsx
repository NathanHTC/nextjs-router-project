'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from "@/node_modules/next/navigation";
import { useDebouncedCallback } from 'use-debounce'; 

export default function Search({ placeholder }: { placeholder: string }) {
  //turn searchParams into a read only, key value pair object
  //this will always keep up-to-date with the latest input
  const searchParams = useSearchParams();
  //access current path: /dashboard/invoices
  const pathname = usePathname();
  const { replace } = useRouter();
  //handleSearch only run the code after user stop typing for 300ms 
  const handleSearch = useDebouncedCallback((term:string) => {
    //create params obj using current read only searchParams
    //use utilty functions of URLSearchParams
     const params = new URLSearchParams(searchParams);
     params.set('page', '1')
     if(term){
       params.set('query', term);
     }
     else {
       params.delete('query');
     }
     console.log(`${placeholder}${term}`);
     //update url without navigating away from cur page
     replace(`${pathname}?${params.toString()}`)
  }, 300);
   
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />

      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
