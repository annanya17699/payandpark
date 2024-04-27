import React from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import '../App.css'

export default function ParkingDetail() {
    return (
        <div className="bg-cover h-screen flex flex-col justify-center items-center">
            <div className="mt-20">
                <form className="bg-white flex flex-col justify-center gap-4 rounded-lg px-4 py-4">
                    <h3 className="text-green-700 font-semibold text-center">Parking Details</h3>
                    <TextField id="outlined-basic" label="Building Name" type='text' style={{ width: '40rem' }} />
                    <TextField id="outlined-basic" label="Vehicle Type" type='text' style={{ width: '40rem' }} />
                    <TextField id="outlined-basic" label="Vehicle Number" type='text' style={{ width: '40rem' }} />
                    <TextField id="outlined-basic" label="Entry Date & Time" type='text' style={{ width: '40rem' }} />
                    <TextField id="outlined-basic" label="Exit Date & Time" type='text' style={{ width: '40rem' }} />
                    <FormControlLabel control={<Checkbox />} label="All Day" className="text-green-700"/>
                    <div className="bg-green-700 text-center p-3 text-white text-xl font-semibold cursor-pointer rounded-md">
                        Find a Parking Spot
                    </div>
                </form>
            </div>
        </div>
    )
}