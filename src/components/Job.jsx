import { SelectedContext } from "../context/SelectedContext";
import location from "../assets/location.svg";
import { useContext } from "react";

export default function Job(props) {

  const { selected, setSelected } = useContext(SelectedContext);

  const selectJob = () => setSelected({ id: props.data.id, name: props.data.name });

  let container = "";
  
  if (selected.id === props.data.id) {
    container = "border-2 border-solid border-dark-green h-auto p-4 rounded-md my-2 cursor-pointer drop-shadow-sm hover:-translate-y-1 duration-500";
  } else {
    container = "border-2 border-solid border-dark-gray h-auto p-4 rounded-md my-2 cursor-pointer drop-shadow-sm hover:-translate-y-1 duration-500";
  }

  return (
    <div className={container} onClick={selectJob}>
      <div name="details" className="flex flex-row justify-between text-left">
        <img src={props.data.logo} alt="logo" className="w-auto h-12"/>
        <div className="w-4/6">
          <div name="company" className="flex flex-row justify-between">
            <div className="flex flex-row text-sm">
              <p className="mr-2 max-w-40">{props.data.company}</p>
              <p>{props.data.rating} ★</p>
            </div>
          </div>
          <p className="max-w-lg font-open-sans font-bold mt-1">{props.data.name}</p>
          <div name="location" className="flex flex-row">
            <p className="font-semibold text-dark-green">{props.data.date}</p>
            <div className="flex flex-row">
              <img className="w-auto h-4 ml-2 m-0.5" src={location} />
              <p className="ml-1 text-dark-gray text-sm">{props.data.location}</p>
            </div>
          </div>
          <div className="flex flex-row mt-1">
            <p className="text-sm font-medium">{props.data.pay}</p>
            {props.data.pay === undefined ? '' : <div className="bg-light-gray ml-2 p-1 px-2 text-sm rounded-md">EST</div>}
          </div>
        </div>
        <div className="bg-light-green h-1/2 rounded-md p-1.5">
          <p className="text-dark-green font-semibold text-sm">{props.data.tag}</p>
        </div>
      </div>
      <hr className="w-11/12 bg-dark-gray justify-self-center mx-auto my-2"/>
      <div name="technology" className="flex flex-row font-roboto font-semibold text-dark-gray">
        {props.data.techStack.map(tech => <div key={tech} className="py-2 px-2 mx-0.5 bg-light-gray rounded-md">{tech}</div>)}
      </div>
    </div>
    );
}