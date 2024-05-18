import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import BuildingContext from "../context/BuildingContext";

function Building(props) {

  const context = useContext(BuildingContext);
  const { buildingStructure , createBuilding} = context;
  const [building, setBuilding] = useState(buildingStructure);

  const handleChange = (event) => {
    setBuilding({ ...building, [event.target.name]: event.target.value });
  };
  const handleUpload = (event) => {
    console.log(event.target.files[0])
    setBuilding({ ...building, [event.target.name] : event.target.files[0] });
  };

  const handleSave = async(event) => {
    event.preventDefault()
    let res = await createBuilding(building);
    if(res.success){
        props.showAlert('Building Data Saved Successful','success')
    }else{
        props.showAlert('Something went wrong','danger')
    }
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-10 mt-28 bg-white py-10 px-20 rounded-lg justify-center">
          <h3 className="text-green-700 text-center">Building Details</h3>
          <TextField
            id="outlined-basic"
            label="Building Name"
            name="name"
            color="success"
            value={building.name}
            onChange={(event)=>handleChange(event)}
          />
          <Button
            color="warning"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<UploadFileIcon />}
          >
            Upload Blueprint
            <input hidden={true} name="blueprint" type="file" onChange={(event)=>handleUpload(event)}/>
          </Button>

          <div className="bg-green-700 text-white p-2 text-center rounded-sm font-medium cursor-pointer"
          onClick={(e)=>handleSave(e)}>
            Save
          </div>
        </div>
      </div>
    </>
  );
}

export default Building;
