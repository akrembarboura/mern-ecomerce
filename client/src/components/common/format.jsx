import { Input } from "@/components/ui/input"
import {
  Select,   
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function Commonformat({formControls,formData , setFormData , onSubmit , buttonText} ) {
    const renderInputsBycomponenType = (controlItem) => {
        let element = null ;
        const value = formData[controlItem.name] || "" ;
        switch(controlItem.componentType) {
            case "input":
                element = (
                      <Input 
                 name = {controlItem.name}
                 placeholder={controlItem.placeholder}
                    type={controlItem.type}
                    value={value}
                    onChange={(e) => setFormData({...formData , [controlItem.name]: e.target.value})
                }
                />
            );
        break;

               case "select":
        element = (
          <Select
            value={value}
            onValueChange={(value) =>
              setFormData({ ...formData, [controlItem.name]: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {controlItem.options && controlItem.options.length > 0
                ? controlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
  case "textarea":
   element =(
     <textarea
        name ={controlItem.name}
        placeholder={controlItem.placeholder}
        id ={controlItem.name}
        value={value}
        onChange={(e) => setFormData({...formData , [controlItem.name]: e.target.value})}
     />
   )
   break;

            
        
    }
    return element;
        }
  return (
    <form onSubmit={onSubmit}>
         <div className="flex flex-col gap-3">
            {
                formControls.map(controlItem => <div className="grid w-full gap-1.5 " key={controlItem.name}>
                    <label className="mb-1">{controlItem.label}</label>
                    {renderInputsBycomponenType(controlItem)}

                </div>)
                
            }

         </div>
         <button  type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded">{buttonText||'Submit'}</button> 
      
    </form>
  )
}


export default Commonformat
