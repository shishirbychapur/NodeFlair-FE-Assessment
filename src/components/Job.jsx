// import { SelectedContext } from "../context/SelectedContext";
// import location from "../assets/location.svg";
// import { useContext } from "react";

// export default function Job(props) {

//   const { selected, setSelected } = useContext(SelectedContext);

//   const selectJob = () => setSelected({ id: props.data.id, name: props.data.name });

//   let container = "";
  
//   if (selected.id === props.data.id) {
//     container = "border-2 border-solid border-dark-green h-auto p-4 rounded-md my-2 cursor-pointer drop-shadow-sm hover:-translate-y-1 duration-500";
//   } else {
//     container = "border-2 border-solid border-light-gray h-auto p-4 rounded-md my-2 cursor-pointer drop-shadow-sm hover:-translate-y-1 duration-500";
//   }

//   return (
//     <div className={container} onClick={selectJob}>
//       <div className="flex flex-row justify-between text-left">
//         <img src={props.data.logo} alt="logo" className="w-auto sm:h-10 md:h-12 lg:h-14 h-10 mt-2 mr-2"/>
//         <div className="xs:w-11/12 w-9/12">
//           <div className="flex flex-row justify-between">
//             <div className="flex flex-row text-sm">
//               <p className="mr-2 max-w-40">{props.data.company}</p>
//               <p>{props.data.rating} ★</p>
//             </div>
//           </div>
//           <p className="max-w-lg font-open-sans font-bold mt-1 line-clamp-2">{props.data.name}</p>
//           <div className="flex flex-row">
//             <p className="font-semibold text-dark-green mr-1">{props.data.date}</p>
//             <div className="flex flex-row">
//               <img className="w-auto h-4 m-0.5" src={location} />
//               <p className="lg:ml-1 xs:ml-0.5 text-dark-gray text-sm">{props.data.location}</p>
//             </div>
//           </div>
//           <div className="flex flex-row mt-1">
//             <p className="text-sm font-medium">{props.data.pay}</p>
//             {props.data.pay === undefined ? '' : <div className="bg-light-gray ml-2 px-2 text-sm rounded-md lg:max-h-10 max-h-6 text-center"><p>EST</p></div>}
//           </div>
//         </div>
//         <div className="bg-light-green h-1/2 rounded-md p-1 text-center">
//           <p className="text-dark-green font-semibold text-sm">{props.data.tag}</p>
//         </div>
//       </div>
//       <hr className="w-11/12 bg-dark-gray justify-self-center mx-auto my-2"/>
//       <div name="technology" className="text-left font-roboto font-semibold text-dark-gray truncate">
//         {props.data.techStack.map(tech => <span key={tech} className="inline-block py-2 px-2 mx-0.5 bg-light-gray rounded-md">{tech}</span>)}
//       </div>
//     </div>
//     );
// }

import { SelectedContext } from "../context/SelectedContext";
import location from "../assets/location.svg";
import { useContext } from "react";

export default function Job(props) {
  const { selected, setSelected } = useContext(SelectedContext);

  const selectJob = () => setSelected({ id: props.data.id, name: props.data.name });

  const containerClass = selected.id === props.data.id
    ? "bg-white border-2 border-solid border-dark-green h-auto p-4 rounded-md my-2 cursor-pointer drop-shadow-sm hover:-translate-y-1 duration-500"
    : "bg-white border-2 border-solid border-gray-200 h-auto p-4 rounded-md my-2 cursor-pointer drop-shadow-sm hover:-translate-y-1 duration-500";

  return (
    <div className={containerClass} onClick={selectJob}>
      <div className="flex flex-row justify-between text-left">
        <div className="flex flex-col md:flex-row justify-start">
          <img src={props.data.logo} alt="logo" className="w-10 md:w-12 lg:w-14 sm:h-10 md:h-12 lg:h-14 h-10 mt-2 mr-2" />
          <div className="w-11/12 lg:w-9/12">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row text-sm">
                <p className="mr-2 max-w-40">{props.data.company}</p>
                <p>{props.data.rating} ★</p>
              </div>
            </div>
            <p className="max-w-lg font-open-sans font-bold mt-1 line-clamp-2">{props.data.name}</p>
            <div className="flex flex-col sm:flex-row">
              <p className="font-semibold text-dark-green mr-2">{props.data.date}</p>
              <div className="flex flex-row">
                <img className="w-auto h-4 mt-0.5 ml-0.5" src={location} alt="location" />
                <p className="ml-0.5 lg:ml-1.5 xs:ml-1 text-dark-gray text-sm">{props.data.location}</p>
              </div>
            </div>
            <div className="max-w-lg mt-1">
              <p className="text-sm font-medium">
                {props.data.pay}
                { props.data.pay === undefined 
                  ? '' 
                  : <span className="bg-light-gray ml-2 p-1 text-sm rounded-md lg:max-h-10 max-h-6 text-center">EST</span>
                }
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-2/12 bg-light-green h-1/2 rounded-md p-1.5 text-center">
          <p className="text-dark-green font-semibold text-sm">{props.data.tag}</p>
        </div>
      </div>
      <hr className="w-11/12 bg-dark-gray justify-self-center mx-auto my-2" />
      <div name="technology" className="text-left font-roboto font-semibold text-dark-gray truncate">
        {props.data.techStack.map(tech => (
          <span key={tech} className="inline-block py-2 px-2 mx-0.5 bg-light-gray rounded-md">{tech}</span>
        ))}
      </div>
    </div>
  );
}
