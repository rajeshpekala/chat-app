import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Features() {
  return (
    <div className=" m-3">
      <div className="w-1/4 p-4 mt-5 bg-white hover:bg-green-500 border border-black rounded-lg">
        <h1 className="font-bold flex flex-col text-2xl">
          <span>
            <FontAwesomeIcon icon={faLock} style={{ color: "#349aa2" }} />
          </span>
          <span>End to end Encryption and</span>
          <span>privacy copntrols</span>
        </h1>
      </div>
    </div>
  );
}

export default Features