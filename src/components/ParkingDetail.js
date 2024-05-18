import React, { useEffect, useContext, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import "../App.css";
import BuildingContext from "../context/BuildingContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
export default function ParkingDetail(props) {
  const context = useContext(BuildingContext);
  const { fetchBuildings } = context;
  const [allDay, setAllDay] = useState(false);
  const [buildingList, setBuildingList] = useState([]);
  const fetchBuildingList = async () => {
    const res = await fetchBuildings();
    if (res.error) {
      props.showAlert("Something went wrong", "danger");
    } else {
      console.log(res.items);
      setBuildingList(res.items);
    }
  };
  useEffect(() => {
    fetchBuildingList();
  }, []);

  return (
    <div className="bg-cover h-screen flex flex-row justify-center items-center">
    <Grid>
      <Grid item lg={6}>
          <div className="mt-1">
            <form className="bg-white flex flex-col gap-1 rounded-lg px-4 py-4">
              <h3 className="text-green-700 font-semibold text-center">
                Parking Details
              </h3>
              <TextField id="outlined-basic" label="Building Name" select>
                {buildingList &&
                  buildingList.map((option) => (
                    <MenuItem key={option._id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
              </TextField>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker label="Entry Date & Time" />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker label="Exit Date & Time" />
              </LocalizationProvider>

              <FormControlLabel
                control={<Checkbox color="success" value={allDay} />}
                label="All Day"
                className="text-green-700"
              />
              <div className="bg-green-700 text-center p-3 text-white text-md font-semibold cursor-pointer rounded-md">
                Find a Parking Spot
              </div>
            </form>
          </div>
      </Grid>
      <Grid item lg={6}>
          <div className="mt-1">
            <div className="bg-white flex flex-col gap-4 rounded-lg px-4 py-4"></div>
          </div>
      </Grid>
    </Grid>
    </div>
  );
}
