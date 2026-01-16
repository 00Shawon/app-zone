
import { BiWorld } from "react-icons/bi";
import AddItemForm from "../components/AddItemForm";


const AddItems = () => {
 

  return (
    <div className="bg-[#0b0d17] min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">List New Product</h1>
            <p className="text-white/50">Ready to reach 10k+ buyers? Fill in the details below.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-purple-400 font-bold">
            App Z<BiWorld />ne Partner
          </div>
        </div>
       <AddItemForm></AddItemForm>
        
      </div>
    </div>
  );
};

export default AddItems;