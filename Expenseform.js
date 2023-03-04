import "./Form.css";
function Form(){
   
    return(
        <>
           <form>
               <div>
                   <input placeholder="item"/>
               </div>
              
               <div>
                   <input placeholder="cost" />
               </div>
              <div>
                <input type="date" size="30"/>
              </div>
               <div>
                   <button>
                       ADD
                   </button>
               </div>
           </form>
        </>
    );
}
export default Form;
